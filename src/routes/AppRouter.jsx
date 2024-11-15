import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DrawerAppBar from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";

const AppRouter = () => {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
