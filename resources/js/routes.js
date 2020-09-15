import Welcomeform from "./pages/Welcomeform";
import Welcome from "./Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
<<<<<<< HEAD
import Create from "./pages/profile/Create";
export default [
    {
        path: "/",
        name: "home",
        component: Home
=======
import Home from "./components/Home";
export default [
    {
        path: "/Home",
        name: "Home",
        component: Home,
        meta: {
            progress: {
                func: [
                    { call: "color", modifier: "temp", argument: "#ffb000" },
                    { call: "fail", modifier: "temp", argument: "#6e0000" },
                    { call: "location", modifier: "temp", argument: "top" },
                    {
                        call: "transition",
                        modifier: "temp",
                        argument: {
                            speed: "1.5s",
                            opacity: "0.6s",
                            termination: 400
                        }
                    }
                ]
            }
        }
>>>>>>> d1368a69f93c3efd1aba021858516d5eb316c849
    },
    {
        path: "/",
        name: "Welcome",
        component: Welcome,
        meta: {
            progress: {
                func: [
                    { call: "color", modifier: "temp", argument: "#ffb000" },
                    { call: "fail", modifier: "temp", argument: "#6e0000" },
                    { call: "location", modifier: "temp", argument: "top" },
                    {
                        call: "transition",
                        modifier: "temp",
                        argument: {
                            speed: "1.5s",
                            opacity: "0.6s",
                            termination: 400
                        }
                    }
                ]
            }
        }
    },
    {
        path: "/Welcomeform",
        name: "Welcomeform",
        component: Welcomeform,
        meta: {
            progress: {
                func: [
                    { call: "color", modifier: "temp", argument: "#ffb000" },
                    { call: "fail", modifier: "temp", argument: "#6e0000" },
                    { call: "location", modifier: "temp", argument: "top" },
                    {
                        call: "transition",
                        modifier: "temp",
                        argument: {
                            speed: "1.5s",
                            opacity: "0.6s",
                            termination: 400
                        }
                    }
                ]
            }
        }
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
    },
    {
        path: "/profile/create",
        name: "create",
        component: Create
    }
];
