import {
  GET_LIST_STARTED,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE
} from '../actions';

const defaultState = {
  loading: false,
  error: false,
  list: []
};

const listReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_LIST_STARTED:
      return {
        ...defaultState,
        loading: true
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
        error: false
      }
    case GET_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
};

export default listReducer;
