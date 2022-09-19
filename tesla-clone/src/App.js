import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import HeaderBlock from "./components/HeaderBlock";
import TeslaAccount from "./components/TeslaAccount";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock />
        <TeslaAccount />
      </div>
    </BrowserRouter>
  );
};

export default App;
