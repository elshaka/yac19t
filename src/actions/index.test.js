import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '.';

const mockStore = configureMockStore([thunk]);
const initialState = {
  list: {
    loading: false,
    error: false,
    list: [],
    filter: '',
  },
  item: {
    loading: false,
    error: false,
    item: null,
  },
};
const store = mockStore(initialState);

describe('#getList', () => {
  beforeEach(() => {
    store.clearActions();
    store.dispatch(actions.getList());
  });

  describe('when the request is successful', () => {
    it('should dispatch the related actions in the expected order', () => {
      const actionTypes = store.getActions().map(({ type }) => type);

      expect(actionTypes).toEqual([
        actions.GET_LIST_STARTED,
        actions.GET_LIST_SUCCESS,
      ]);
    });
  });
});
