import {createStore} from "vuex";
import {forms} from "./forms.js";
import {shop} from "./shop.js";
import {cart} from "./cart.js";
import {document} from "./document.js";

export const store = createStore({
    modules: {
        forms,
        shop,
        cart,
        document
    }
})