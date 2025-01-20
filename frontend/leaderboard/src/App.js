import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext.js";
import Navbar from "./components/common/Navbar";
import ErrorAlert from "./components/common/ErrorAlert";
import User from "./components/pages/User";
import Leaderboard from "./components/pages/Leaderboard";
import History from "./components/pages/History";
import ClaimPoints from "./components/pages/ClaimPoints";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  return (
    <Router>
      <AppProvider>
        <ErrorAlert />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <div className="min-h-screen bg-bg-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/claim" element={<ClaimPoints />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
