import * as userService from "services/user"
import { routerRedux } from 'dva/router';
export default {
  namespace: 'global',
  state: {
    collapsed: false,
    userData: {}
  },
  effects: {
    *login({payload: params}, { call, put }) {
      const data = yield call(userService.login, params)
      if (data.success){
        yield put({ type: "updateUserData", payload: data.data })
        yield put(routerRedux.push('/license'))
      }
    }
  },
  reducers: {
    changeCollapsed(state, {payload}) {
      return {
        ...state,
        collapsed: payload
      }
    },
    updateUserData(state, {payload}) {
      console.log(payload)
      return {
        ...state,
        userData: payload.user
      }
    }
  }
}
