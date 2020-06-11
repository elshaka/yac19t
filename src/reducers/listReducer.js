import {
  GET_LIST_STARTED,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  SET_LIST_FILTER,
} from '../actions';

const defaultState = {
  loading: false,
  error: false,
  list: [],
  filter: '',
};

const listReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_LIST_STARTED:
      return {
        ...defaultState,
        loading: true,
      };
    case GET_LIST_SUCCESS:
      return {
        ...defaultState,
        loading: false,
        list: payload,
        error: false,
      };
    case GET_LIST_FAILURE:
      return {
        ...defaultState,
        loading: false,
        error: true,
      };
    case SET_LIST_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};

export default listReducer;
