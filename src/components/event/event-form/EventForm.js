import React from "react";
import "./eventform.css";
import { useEffect, useState } from "react";
import { eventService, eventTableService, editeventService } from "../../../redux/service/eventService";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EventTable from "../event-table/EventTable";

function EventForm(props) {
  const [eventData, seteventData] = useState({
    name: "",
    date: "",
    desc: "",
    price: "",
    premium: "",
    tc: false,
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [eventId, setEventId] = useState(0);
  const handleChange = (e) => {
    // console.log(e.target.value)
    seteventData({ ...eventData, [e.target.id]: e.target.value });
  };
  const reset = () => {
    seteventData({
      name: "",
      date: "",
      desc: "",
      price: "",
      premium: "",
      tc: false,
    });
    setIsUpdating(false);
    setEventId(0);
  };

  useEffect(() => {
    reset();
    props.eventTable({ userId: props.loggedInUser.id });
  }, [props.eventResponse, props.deleteeventTableResponse, props.editeventResponse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      userId: props.loggedInUser.id,
      name: eventData.name,
      date: eventData.date,
      desc: eventData.desc,
      price: eventData.price,
      premium: eventData.premium,
    };
    if (isUpdating) {
      request.id = eventId;
      props.editevent(request);
    } else {
      props.event(request);
    }
  };

  const handleEdit = (data) => {
    setIsUpdating(true);
    seteventData({
      name: data.name,
      date: data.date,
      desc: data.desc,
      price: data.price,
      premium: data.premium,
    });
    setEventId(data.id);
  };

  return (
    <>
      <div className="event">
        <div className="eventComponent">
          {props.eventTableResponse.length && <EventTable handleEdit={handleEdit} eventTableResponse={props.eventTableResponse} />}
          <form className="eventForm" onSubmit={handleSubmit}>
            <div className="heading">{isUpdating ? "Update Event" : "Add Event"}</div>
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="eventInput"
              type="text"
              id="name"
              value={eventData.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label htmlFor="date">Date</label>
            <br />
            <input
              className="eventInput"
              type="date"
              id="date"
              value={eventData.date}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label htmlFor="desc">Description</label>
            <br />
            <input
              className="eventInput"
              id="desc"
              value={eventData.desc}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="eventInput"
              type="number"
              id="price"
              value={eventData.price}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <div className="eventRadio">
              <label htmlFor="premium">
                <input type="radio" value="Normal" id="premium" checked={eventData.premium === "Normal"} onChange={handleChange} />
                Normal
              </label>

              <label htmlFor="premium">
                <input type="radio" id="premium" value="Premium" checked={eventData.premium === "Premium"} onChange={handleChange} />
                Premium
              </label>
            </div>
            <br />
            {!isUpdating && (
              <label htmlFor="tc">
                <input id="tc" type={"checkbox"} onClick={() => seteventData({ ...eventData, tc: !eventData.tc })} checked={eventData.tc} /> &nbsp; I accept terms & conditions.
              </label>
            )}

            <br />
            <div className="eventButtons">
              <button className={!isUpdating && !eventData.tc ? "buttonDisabled" : "button"} disabled={!isUpdating && !eventData.tc}>
                {isUpdating ? "Update Event" : "Save Event"}{" "}
              </button>
              <button className="button" type="button" onClick={reset}>
                Reset
              </button>
            </div>

            <br />
          </form>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  eventResponse: state.eventReducer.eventResponse,
  eventError: state.eventReducer.eventError,
  loggedInUser: state.userReducer.loggedInUser,
  deleteeventTableResponse: state.eventReducer.deleteeventTableResponse,
  editeventResponse: state.eventReducer.editeventResponse,
  eventTableResponse: state.eventReducer.eventTableResponse,
  eventTableError: state.eventReducer.eventTableError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      event: eventService,
      eventTable: eventTableService,
      editevent: editeventService,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
