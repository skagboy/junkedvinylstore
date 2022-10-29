export const document = {
    strict: true,
    namespaced: true,
    state() {
        return {
            progress: 0,
        }
    },
    getters: {
        isDocRead(state) {
            return state.progress === 100
        }
    },
    mutations: {
        checkReadingProgress(state, value) {
            state.progress = Math.max(state.progress, value);
        },
    },
}