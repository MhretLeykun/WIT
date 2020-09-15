import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
];
