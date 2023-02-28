import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpConfirmation from "./pages/SignUpConfirmation";
// import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-confirmation" element={<SignUpConfirmation />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Navbar />
      {/* <Footer /> */}
    </>
  );
}

export default App;
