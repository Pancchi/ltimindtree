import { createEventError, createEventSuccess, TableEventError, editTableEventSuccess, deleteTableEventSuccess, TableEventSuccess } from "../action/eventAction";
import axios from "axios";

export function eventService(request) {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/events", request)
      .then((res) => res.data)
      .then((res) => {
        dispatch(createEventSuccess(res));
      })
      .catch((error) => {
        dispatch(createEventError(error));
      });
  };
}

export function eventTableService(request) {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/users/${request.userId}/events`)
      .then((res) => res.data)
      .then((res) => {
     
        dispatch(TableEventSuccess(res));
      })
      .catch((error) => {
        dispatch(TableEventError(error));
      });
  };
}

export function deleteeventTableService(request) {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/events/${request.id}`)
      .then((res) => res.data)
      .then((res) => {
        dispatch(deleteTableEventSuccess(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function editeventService(request) {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/events/${request.id}`, request)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        dispatch(editTableEventSuccess(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
