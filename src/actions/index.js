import streams from '../apis/streams';
// import createBrowserHistory from '../history';

import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_ONE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    // Include some programmatic navigation to the root route
    // const history = createBrowserHistory;
    // history.push('/');
    //does not work, has been moved to onSubmit in CreateStream component
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchOneStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_ONE_STREAM, payload: response.data });
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
}