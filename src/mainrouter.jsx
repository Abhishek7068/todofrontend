import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import App from "./app";


const MainRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/register" element = {<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};


export default MainRouter;