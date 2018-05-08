export default {
    namespace: 'global',
    state: {
        collapsed: false
    },
    reducers: {
        changeCollapsed(state, { payload }) {
            return {
                ...state,
                collapsed: payload
            }
        }
    }
}