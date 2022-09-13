import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./logged_out/login.jsx";
import ManagerDashbord from "./manager_logged_in/pages/ManagerDashbord";
import WorkerDashbord from "./worker_logged_in/pages/WokerDashbord";
import Annotaion from "./annotation/pages/Annotation.jsx";

function App() {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/manager" element={<ManagerDashbord />} />
              <Route path="/worker" element={<WorkerDashbord  />} />
              <Route path="/annotation" element={<Annotaion  />} />
          </Routes>
    </Router>
  );
}
export default App;
