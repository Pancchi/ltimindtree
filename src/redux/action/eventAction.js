export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';

export const Table_EVENT_SUCCESS = 'Table_EVENT_SUCCESS';
export const Table_EVENT_ERROR = 'Table_EVENT_ERROR';

export const DELETE_Table_EVENT_SUCCESS = 'DELETE_Table_EVENT_SUCCESS';

export const EDIT_Table_EVENT_SUCCESS = 'EDIT_Table_EVENT_SUCCESS';

export function editTableEventSuccess(editeventResponse) {
    return {
        type: EDIT_Table_EVENT_SUCCESS,
        editeventResponse: editeventResponse,
    };
}

export function createEventSuccess(eventResponse) {
    return {
        type: CREATE_EVENT_SUCCESS,
        eventResponse: eventResponse,
    };
}

export function createEventError(error) {
    return { type: CREATE_EVENT_ERROR, error: error }
}

export function TableEventSuccess(eventTableResponse) {
    return {
        type: Table_EVENT_SUCCESS,
        eventTableResponse: eventTableResponse,
    };
}

export function TableEventError(error) {
    return { type: Table_EVENT_ERROR, error: error }
}

export function deleteTableEventSuccess(deleteeventTableResponse) {
    return {
        type: DELETE_Table_EVENT_SUCCESS,
        deleteeventTableResponse: deleteeventTableResponse,
    };
}
