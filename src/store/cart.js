export const cart = {
    strict: true,
    namespaced: true,
    state() {
        return {
            cart: []
        }
    },
    getters: {
        getAmount(state) {
            return state.cart.length;
        },
        getAllInCart(state) {
            return state.cart;
        },
        isVinylInCart: (state) => id => state.cart.find(vinyl => vinyl.id === id),
    },
    mutations: {
        setItemToCart(state, payload) {
            state.cart.push(payload);
        },
        delVinylFromCart(state, id) {
            state.cart = state.cart.filter(vinyl => vinyl.id !== id)
        },

    },
    actions: {}
}