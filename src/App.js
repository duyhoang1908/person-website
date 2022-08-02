import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import { useState } from "react";
import ScrollToTop from "./components/router/ScrollToTop";

function App() {
  const [route, setRoute] = useState("home");
  return (
    <ScrollToTop>
      <div className="App">
        <Header route={route} setRoute={setRoute} />
        <Routes>
          <Route
            path="/"
            element={<Home route={route} setRoute={setRoute} />}
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
