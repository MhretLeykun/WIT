require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./routes";
const router = new VueRouter({
    routes
});
// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );
Vue.component("spinner", require("vue-simple-spinner"));
import App from "./App.vue";
const app = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
