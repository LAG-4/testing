import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add routing support
import Home from "./pages/Home"; // Ensure the relative path is correct
import SignIn from "./pages/SignIn"; // Example: Additional component
import SignUp from "./pages/SignUp"; // Example: Additional component
import WellnessChatbot from "./pages/WellnessChatbot"; // Example: Additional component
import './index.css'; // Ensure global styles are imported

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Main application routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wellness" element={<WellnessChatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
