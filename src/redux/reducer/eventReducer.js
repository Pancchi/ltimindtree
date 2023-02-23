import { CREATE_EVENT_ERROR,CREATE_EVENT_SUCCESS,Table_EVENT_ERROR,DELETE_Table_EVENT_SUCCESS,EDIT_Table_EVENT_SUCCESS,Table_EVENT_SUCCESS } from "../action/eventAction";

const initialState = {
    eventResponse:{},
    eventError:{},
    eventTableResponse:[],
    eventTableError:{},
    deleteeventTableResponse:{},
    editeventResponse:{}
}


export default function eventReducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_EVENT_SUCCESS: return {
            ...state, eventResponse: action.eventResponse, eventError:{}
        }
        case CREATE_EVENT_ERROR: return {
            ...state, eventError: action.error,eventResponse:{}
        }
         case Table_EVENT_SUCCESS: return {
            ...state, eventTableResponse: action.eventTableResponse, eventTableError:{}
        }
        case Table_EVENT_ERROR: return {
            ...state, eventTableError: action.error,eventTableResponse:[]
        }
        case DELETE_Table_EVENT_SUCCESS: return {
            ...state, deleteeventTableResponse: action.deleteeventTableResponse
        }
        case EDIT_Table_EVENT_SUCCESS: return {
            ...state, editeventResponse: action.editeventResponse
        }
        default: return { ...state }
    }
}