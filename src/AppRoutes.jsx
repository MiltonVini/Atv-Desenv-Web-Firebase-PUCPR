import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/my-account" element={<MyAccount />}/>
            </Routes>
        )
    }
}

export default AppRoutes