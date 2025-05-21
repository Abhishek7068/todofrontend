import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./components/register";
// import Login from "./components/login";
import App from "./app";
// import { AuthProvider, useAuth } from "./context/authContext";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };


const MainRouter = () =>{
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
                <Routes>
                    {/* <Route 
                        path = "/"
                        element = {
                            <ProtectedRoute>
                                <App/>
                            </ProtectedRoute>
                        }/> */}
                    {/* <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/register" element = {<Register/>}/> */}
                    <Route path = "/" element = {<App/>}/>
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
};


export default MainRouter;