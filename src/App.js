import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Register from "./components/SingUp";
import TwoFactor from "./components/TwoFactor";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to="/register"/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/twofac' element={<TwoFactor/>}/>
      </Routes>
    </>
  );
};

export default App;
