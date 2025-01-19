import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home";
import Portfolio from "./pages/W/Portfolio";
import Attributions from "./pages/attributions/Attributions";

import "./App.css";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/w" element={<Portfolio />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <>
      <Router>{routes}</Router>
    </>
  );
}

export default App;
