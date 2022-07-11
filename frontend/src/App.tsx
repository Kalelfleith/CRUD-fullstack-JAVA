import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Form />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;