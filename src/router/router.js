import {createRouter, createWebHistory} from "vue-router";

import EnterForm from "../components/Form.vue";
import Document from "../components/Document.vue";
import OutputTable from "../components/OutputTable.vue";
import Thanx from "../components/Thanx.vue";
import NotFound from "../components/NotFound.vue";
import Greetings from "../components/Greetings.vue";
import Shop from "../components/Shop.vue";

const routes = [
    {name: "root", path: '/', component: Greetings},
    {name: "greetings", path: '/greetings', component: Greetings},
    {name: "shop", path: '/shop', component: Shop},
    {name: "form", path: '/form', component: EnterForm},
    {name: "docs", path: '/document', component: Document},
    {name: "final", path: '/final', component: OutputTable},
    {name: "thanx", path: '/thanx', component: Thanx},
    {name: "not-found", path: '/:pathMatch(.*)*', component: NotFound},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})