import Home from "./components/Home";
import Welcomeform from "./pages/Welcomeform";
import Welcome from "./Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/profile/Create";
export default [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/Home",
        name: "Home",
        component: Home
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
