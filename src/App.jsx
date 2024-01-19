import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import LearningOutcomeDetail from "./pages/LearningOutcomeDetail";

//divisions
import Portfolio from "/Portfolio";
import OutOfSpace from "/OutOfSpace";
import DutchDesignWeek from "/DutchDesignWeek";
import Weyweyweb from "/Weyweyweb";
import Group from "/Group";

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
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/OutOfSpace" element={<OutOfSpace />} />
            <Route path="/DutchDesignWeek" element={<DutchDesignWeek />} />
            <Route path="/weyweyweb" element={<Weyweyweb />} />
            <Route
              path="/learning-outcome-detail"
              element={<LearningOutcomeDetail />}
            />
            <Route path="/lOAll" element={<LOAll />} />
            <Route path="/Group" element={<Group />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
