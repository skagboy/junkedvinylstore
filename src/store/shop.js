export const shop = {
    strict: true,
    namespaced: true,
    state() {
        return {
            box: [
                {
                    id: 1,
                    title: "Coming Down",
                    artist: "Junky Palms",
                    year: "2019",
                    price: 1200,
                    currency: "RUB",
                    cover: "https://f4.bcbits.com/img/a3713616930_10.jpg"
                },
                {
                    id: 2,
                    title: "Better Call Saul",
                    artist: "Junky Palms",
                    year: "2021",
                    price: 1200,
                    currency: "RUB",
                    cover: "https://f4.bcbits.com/img/a3009997035_10.jpg"
                },
                {
                    id: 3,
                    title: "Better Call Saul",
                    artist: "Junky Palms",
                    year: "2021",
                    price: 1200,
                    currency: "RUB",
                    cover: "https://f4.bcbits.com/img/a3009997035_10.jpg"
                }
            ]
        }
    },
    getters: {
        getVinylBox(state) {
            return state.box;
        }
    },
    mutations: {},
    actions: {}
}