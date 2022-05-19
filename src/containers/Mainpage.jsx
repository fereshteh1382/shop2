import React, { useEffect } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import MainLayout from "../components/layouts/Main";
//import Login from "../pages/login/Login";
import Register from "../pages/register/register";
//import Archive from "../pages/course/Archive";


const Mainpage = () => {
   
    return (
        <MainLayout> 
           <Register />
            {/* <Routes>
              <Route path="/" exact element={<Course />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/logout"
                    render={() =>
                        isEmpty(user) ? <Redirect to="/" /> : <Logout />
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/archive" element={<Archive />} />
           
           <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
            </Routes> */}
        </MainLayout>
    );
};

export default Mainpage;
