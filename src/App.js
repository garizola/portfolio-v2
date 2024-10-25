import "./App.css";
import "./index.css";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import React from "react";

function App() {
  return (
    <div className="sm:p-6 p-4 sm:mt-0 mt-2 max-w-[900px] m-auto cursor-none min-h-[100vh] flex flex-col justify-between ">
      <div>
        <Header />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
