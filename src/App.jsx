import Home from "./components/pages/Home";
import Navbar from "./components/global-components/Navbar";
import Schedule from "./components/pages/Schedule";
import Patients from "./components/pages/Patients";
import Team from "./components/pages/Team";
import Operation from "./components/pages/Operation";
import Inventory from "./components/pages/Inventory";
import Billing from "./components/pages/Billing";
import "./styles/global-styles/index.scss";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/patients" element={<Patients />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/operation" element={<Operation />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/billing" element={<Billing />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
