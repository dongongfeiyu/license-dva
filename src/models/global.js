/**
 * Created by Zhang Haijun on 2018/7/16.
 */
import { routerRedux } from 'dva/router';
import * as userService from 'services/user';

export default {
  namespace: 'global',
  state: {
    collapsed: false,
    userData: {},
  },
  effects: {
    *login({payload: params}, {call, put}){
      const data = yield call(userService.login, params);
      if (data.success){
        yield put({type: 'updateUserData', payload: data.data});
        yield put(routerRedux.push('/license'))
      }
    }
  },
  reducers: {
    changeCollapsed(state, {payload}){
      return {
        ...state,
        collapsed: payload
      }
    },
    updateUserData(state, {payload}){
      return {
        ...state,
        userData: payload.user
      }
    }

  }
}
