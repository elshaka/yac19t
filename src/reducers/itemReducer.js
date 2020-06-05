import {
  GET_ITEM_STARTED,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
} from '../actions';

const defaultState = {
  loading: false,
  error: false,
  item: null,
};

const itemReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ITEM_STARTED:
      return {
        ...defaultState,
        loading: true,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...defaultState,
        item: payload,
      };
    case GET_ITEM_FAILURE:
      return {
        ...defaultState,
        error: true,
      };
    default:
      return state;
  }
};

export default itemReducer;
