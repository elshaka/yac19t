import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios'; // Mocked axios from __mocks__
import * as actions from './';

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
  }
}
let store = null;

describe('#getList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch(actions.getList());
  });

  describe('when the request is successful', () => {
    it('should dispatch the related actions in the expected order', () => {
      const actionTypes = store.getActions().map(({ type }) => type );
      debugger;
      expect(actionTypes).toEqual([
        actions.GET_LIST_STARTED,
        actions.GET_LIST_SUCCESS
      ]);
    });

    it('should set the correct list state in the store', () => {
      const list = store.getState().list.list;
      expect(list).not.toEqual([]);
    });
  });
});
