import { useState, useEffect } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/favicon.svg";
import "../App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  // key component for using
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Received status: ${response.status}`
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setBackendData(data);
      })
      .catch((error) =>
        console.log("There was a problem with your fetch operation:", error)
      );
  }, []);

  return (
    <>
      <header>
        <section id="banner-wrapper">
          <div id="banner" className="container">
            <div id="logo">
              <a href="https://aboutlee.xyz">
                <img
                  src="/logo-expanded.svg"
                  alt="Expanded 'Lee Santos' logo."
                />
              </a>
            </div>
            <div id="accessibility-wrapper">
              <div
                className="accessibility-items placeholder-wave no-select"
                aria-hidden="true"
              >
                <span
                  className="placeholder"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Theme toggle coming soon."
                >
                  Theme btn.
                </span>
                <span
                  className="placeholder"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Search function coming soon."
                >
                  This is a placeholder.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="breadcrumb-wrapper">
          <nav className="breadcrumb-items container" aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Resume
              </li>
            </ul>
          </nav>
          <nav className="navbar-row container" aria-label="navbar">
            <div className="navbar-row-links">
              <a href="/resume">resume</a>
              <a href="/portfolio">portfolio</a>
              <a href="/blog">blog</a>
            </div>
            <div className="navbar-row-items">
              <a href="#about-me">about me</a>
              <a href="#education">education</a>
              <a href="#employment">employment</a>
              <a href="#skills">skills</a>
            </div>
          </nav>
        </section>

        <div id="banner-divider" className="gradient-background"></div>
      </header>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <ul>
        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <li key={i}>{user}</li>)
        )}
      </ul>
    </>
  );
}

export default App;
