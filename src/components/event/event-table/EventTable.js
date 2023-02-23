import React, { useEffect, useState } from "react";
import { deleteeventTableService } from "../../../redux/service/eventService";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./eventTable.css";

function EventTable(props) {
  const handleDelete = (id) => {
    props.eventDelete({ id });
  };

  return (
    <>
      <table className={"eventTable"}>
        <thead>
          <tr className="headerRow">
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Booking Type</th>
            <th>Price</th>
            <th>Edit Event</th>
            <th>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {props.eventTableResponse.map((a) => {
            return (
              <tr className={a.premium === "Premium" ? "premiumRow" : "normalRow"}>
                <td>{a.name}</td>
                <td>{a.date}</td>
                <td>{a.desc}</td>
                <td>{a.premium}</td>
                <td>{a.price}</td>
                <td>
                  <button className="eventButton" onClick={() => props.handleEdit(a)}>
                    &#x270E;
                  </button>
                </td>
                <td>
                  <button className="eventButton" onClick={() => handleDelete(a.id)}>
                    &#128465;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      eventDelete: deleteeventTableService,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventTable);
