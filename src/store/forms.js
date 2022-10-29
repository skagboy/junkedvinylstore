export const forms = {
    strict: true,
    namespaced: true,
    state() {
        return {
            info: [
                {
                    label: 'Name',
                    value: 'Kirill',
                    pattern: /^[a-zA-Z ]{2,30}$/
                },
                {
                    label: 'Phone',
                    value: '',
                    pattern: /^[0-9]{7,14}$/
                },
                {
                    label: 'Email',
                    value: 'wellcrack@gmail.com',
                    pattern: /.+/
                },
                {
                    label: 'Some Field 1',
                    value: 'xxx',
                    pattern: /.+/
                },
                {
                    label: 'Some Field 2',
                    value: 'qqq',
                    pattern: /.+/
                }
            ],
        }
    },
    getters: {
        currentStep(state) {
            return state.info.filter(field => field.valid).length;
        },
        allSteps(state) {
            return state.info.length;
        },
        checkFormCompleted(state) {
            return state.info.every(field => field.valid);
        },
        showProgress(_, getters) {
            return Math.round(getters.currentStep / getters.allSteps * 100);
        },
    },
    mutations: {
        fillFormField(state, item) {
            const {path, value} = item;
            let field = state.info[path];
            field.value = value;
            field.valid = field.pattern.test(field.value);
        },
        init(state) {
            state.info = state.info.map(field => {
                field.valid = field.pattern.test(field.value);
                return {...field}
            })
        }
    },
    actions: {
        init({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('init')
                    resolve()
                }, 5000)
            })
        }
    }
}