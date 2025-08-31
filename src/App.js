import "./App.css";

import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PrivatePolicy from "./components/pages/PrivatePolicy";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review-policy" element={<PrivatePolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
