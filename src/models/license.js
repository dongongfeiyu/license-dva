import * as licenseService from "services/license"
export default {
    namespace: "license",
    state: {
        list: [],
        total: null,
        pagination: {}
    },
    reducers: {
        queryList(state, { payload: data }) {
            return { ...state, list: data.rows, total: data.total }
        }
    },
    effects: {
        *fetch({payload: params}, { call, put }) {
            const data = yield call(licenseService.queryList, params)
            yield put({ type: "queryList", payload: data.data })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === "/license") {
                    dispatch({ type: "fetch", payload: {page: 1, rows: 10} });
                }
            });
        }
    },
}
