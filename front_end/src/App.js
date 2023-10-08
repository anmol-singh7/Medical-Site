import React, { useEffect, useState } from "react";
import "./App.css";
import {
  LoginPage,
  SignupPage,
  HomePage,
  ActivationPage,
  FAQPage,
  ProfilePage,
} from "./routes/Routes.js";
import ProtectedRoute from "./routes/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import { server } from "./server";

import Store from "./redux/store";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';

const App=()=> {
  return (
    <BrowserRouter>
   

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/profile"
          element={
            // <ProtectedRoute>
              <ProfilePage />
            // </ProtectedRoute>
          }
        />
        
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
