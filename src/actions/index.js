import COVID19 from '../services/covid19';

export const GET_LIST_STARTED = 'GET_LIST_STARTED';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';

export const GET_ITEM_STARTED = 'GET_ITEM_STARTED';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

const getListStarted = () => ({ type: GET_LIST_STARTED });
const getListSuccess = list => ({ type: GET_LIST_SUCCESS, payload: list });
const getListFailure = () => ({ type: GET_LIST_FAILURE });

const getItemStarted = () => ({ type: GET_ITEM_STARTED });
const getItemSuccess = item => ({ type: GET_ITEM_SUCCESS, payload: item });
const getItemFailure = () => ({ type: GET_ITEM_FAILURE });

export const getList = () => dispatch => {
  dispatch(getListStarted());
  COVID19.getList()
    .then(list => {
      dispatch(getListSuccess(list));
    })
    .catch(() => {
      dispatch(getListFailure());
    });
};

export const getItem = id => dispatch => {
  dispatch(getItemStarted());
  COVID19.getItem(id)
    .then(item => {
      dispatch(getItemSuccess(item));
    })
    .catch(() => {
      dispatch(getItemFailure());
    });
};
