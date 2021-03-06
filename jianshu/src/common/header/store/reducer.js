import * as contants from './contants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case contants.SEARCH_BLUR:
      return state.set('focused', false);
    case contants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case contants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case contants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case contants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state
  }
}