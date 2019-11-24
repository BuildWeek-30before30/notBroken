import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";

function App() {
  return (
    <div className="App">
      <h1>30before30</h1>
      <Header></Header>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
