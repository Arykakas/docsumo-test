import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginApp from "./components/LoginApp";
import Logo from "./assets/docsumo-logo.png";
import Success from "./components/Success";

function App() {
  useEffect(() => {
    document.title = "Docsumo Test";
  });
  return (
    <Router>
      <main className="app-container">
        <section className="app-content">
          <div className="content">
            <header>
              <img src={Logo} alt="docsumo" />
            </header>
            <article className="login-app-container">
              <Routes>
                <Route path="/" element={<LoginApp />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </article>
          </div>
        </section>
      </main>
    </Router>
  );
}

export default App;
