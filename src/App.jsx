import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import LearningOutcomeDetail from "./pages/LearningOutcomeDetail";

//divisions
import Portfolio from "./pages/Portfolio";
import OutOfSpace from "./pages/OutOfSpace";
import DutchDesignWeek from "./pages/DutchDesignWeek";
import Weyweyweb from "./pages/Weyweyweb";
import Group from "./pages/Group";

//other
import LOAll from "./pages/LOAll";

// import { LAData } from "./constants";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {divisions.map((division) => (
              <Route
                key={division.id}
                path={`/${division.id}`}
                element={React.createElement(
                  require(`./pages/${division.id}`).default
                )}
              />
            ))}
            <Route
              path="/learning-outcome-detail"
              element={<LearningOutcomeDetail />}
            />
            <Route path="/lOAll" element={<LOAll />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
