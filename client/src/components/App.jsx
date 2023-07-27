import { useState, useEffect } from "react";
import Logo from "./Logo";
import "../App.css";

function App() {
  const [, setBackendData] = useState([{}]);

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
            <Logo
              id="logo"
              url="https://aboutlee.xyz"
              src="/logo-expanded.svg"
              alt="Expanded 'Lee Santos' logo."
            />
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
      </header>

      <main className="container">
        <nav id="navbar">
          <div id="navbar-content">
            <table className="quick-links container">
              <tbody>
                <tr>
                  <th>
                    <h5>Quick links</h5>
                  </th>
                </tr>
                <tr>
                  <td>
                    <a href="/resume">resume</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/portfolio">portfolio</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/blog">blog</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <ul>
              <li>
                <a href="#about-me">about me</a>
              </li>
              <li>
                <a href="#education">education</a>
              </li>
              <ul>
                <li>
                  <a href="#education">web development</a>
                </li>
                <li>
                  <a href="#education">data science</a>
                </li>
                <li>
                  <a href="#education">civil engineering</a>
                </li>
              </ul>
              <li>
                <a href="#employment">employment</a>
              </li>
              <ul>
                <li>
                  <a href="#employment">data analysis</a>
                </li>
                <li>
                  <a href="#employment">project coordinator</a>
                </li>
                <li>
                  <a href="#employment">cadet engineer</a>
                </li>
              </ul>
              <li>
                <a href="#skills">skills</a>
              </li>
              <ul>
                <li>
                  <a href="#skills">data wrangling</a>
                </li>
                <li>
                  <a href="#skills">data visualization</a>
                </li>
                <li>
                  <a href="#skills">programming</a>
                </li>
                <li>
                  <a href="#skills">machine learning</a>
                </li>
                <li>
                  <a href="#skills">tools & platforms</a>
                </li>
                <li>
                  <a href="#skills">big data</a>
                </li>
              </ul>
            </ul>
            <div className="navbar-spacer"></div>
          </div>
        </nav>

        <article
          id="main"
          className="container"
          data-bs-spy="scroll"
          data-bs-target="#navbar"
          data-bs-offset="0"
          data-bs-smooth-scroll="true"
          tabIndex="0"
        >
          <div id="about-me" className="article-container">
            <h2>About me</h2>
            <p>
              Specialization in data science with 8+ years of experience in
              fast-paced, high-stress construction environments as part of
              interdisciplinary project management teams. Pursuing a
              professional career in data science to find solutions to
              inefficiencies in management systems that are common in industries
              that are slow to adopt new technologies.
            </p>
            <br />
            <p>
              As an unrepentant hobbyist, machine learning provides tools that
              can either improve upon existing projects or open opportunities
              for new ones.
            </p>
          </div>

          <div id="education" className="article-container">
            <h2>Education</h2>
            <table id="education-table">
              <tbody>
                <tr>
                  <th className="education">Education</th>
                  <th className="institution">Institution</th>
                  <th className="graduation">Graduation</th>
                </tr>
                <tr>
                  <td>Web Development, Certification</td>
                  <td>Udemy</td>
                  <td>May 2023</td>
                </tr>
                <tr>
                  <td>Data Science, Diploma</td>
                  <td>Lighthouse Labs</td>
                  <td>September 2022</td>
                </tr>
                <tr>
                  <td>Civil Engineering, BaSC</td>
                  <td>Western University</td>
                  <td>February 2012</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="employment" className="article-container">
            <h2>Employment</h2>
            <table id="employment-table">
              <tbody>
                <tr>
                  <th className="position">Position</th>
                  <th className="company">Company</th>
                  <th className="start">Start</th>
                  <th className="end">End</th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#collapse-item1"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item1"
                    >
                      Data Analyst
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item1"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item1"
                    >
                      Freelance
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item1"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item1"
                    >
                      October 2022
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item1"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item1"
                    >
                      Present
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="collapsed-row" colSpan="4">
                    <div className="collapse" id="collapse-item1">
                      <ul>
                        <li>
                          Working with clients to retrieve and manipulate data
                          accumulated over the last decade.
                        </li>
                        <li>
                          Using the Data Science life cycle as our guidepost, we
                          perform discoveries in the context of their business
                          goals to uncover actionable insights.
                        </li>
                        <li>
                          Prefer direct communication with the COO to develop
                          hypotheses and outline the investigation.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#collapse-item2"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item2"
                    >
                      Project Coordinator
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item2"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item2"
                    >
                      Four Seasons Site Development
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item2"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item2"
                    >
                      March 2014
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item2"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item2"
                    >
                      October 2022
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="collapsed-row" colSpan="4">
                    <div className="collapse" id="collapse-item2">
                      <ul>
                        <li>
                          Implemented and enforced production-specific safety
                          programs and maintained clean safety records
                          year-on-year in concert with clients, consultants,
                          subcontractors, and company health & safety management
                          personnel; challenging safety conditions include 30-m
                          depth excavations and micro-tunneling underneath a
                          provincial highway.
                        </li>
                        <li>
                          Developed skill sets to meet challenging deadlines and
                          negotiate unforeseen complications in the
                          pre-construction and exploratory phases of most
                          projects such that client needs were still met with
                          minimal loss to time and budget.
                        </li>
                        <li>
                          Created technical specification documents for clients
                          to satisfy contract requirements when closing
                          projects.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#collapse-item3"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item3"
                    >
                      Cadet Engineer
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item3"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item3"
                    >
                      Stateland
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item3"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item3"
                    >
                      September 2012
                    </a>
                  </td>
                  <td>
                    <a
                      href="#collapse-item3"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-item3"
                    >
                      April 2013
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="collapsed-row" colSpan="4">
                    <div className="collapse" id="collapse-item3">
                      <ul>
                        <li>
                          Assessed BoM for semi-detached housing to spot
                          deviations from historical data and/or implement
                          changes according to design revisions to inform future
                          design decisions relating to subdivision developments
                          and other low-cost residential projects.
                        </li>
                        <li>
                          Provided material take-offs to develop construction
                          schedules and plans for material procurement.
                        </li>
                        <li>
                          Consulted with vendors to closely monitor their
                          efforts (and re-establish deadlines as necessary) and
                          to conduct trade buy-ins for masonry works, steel
                          framing, and for various architectural elements such
                          as windows and doors.
                        </li>
                        <li>
                          Facilitated meetings between senior engineers and
                          vendors to negotiate costs, determine product
                          specifications, and maintain collaborative
                          relationships between all parties.
                        </li>
                        <li>
                          Created and modified existing templates to automate
                          routine assignments, which doubled work efficiency as
                          well as enhanced accuracy and consistency by removing
                          sources of human error.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="skills" className="article-container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="big-data">
                <h6>Big Data</h6>
                <ul>
                  <li>apache spark</li>
                  <li>pyspark</li>
                </ul>
              </div>
              <div className="data-wrangling">
                <h6>Data Wrangling</h6>
                <ul>
                  <li>numpy</li>
                  <li>pandas</li>
                  <li>statsmodels</li>
                  <li>scipy</li>
                </ul>
              </div>
              <div className="data-visualization">
                <h6>Data Visualization</h6>
                <ul>
                  <li>matplotlib</li>
                  <li>seaborn</li>
                  <li>plotly</li>
                </ul>
              </div>
              <div className="programming">
                <h6>Programming</h6>
                <ul>
                  <li>python</li>
                  <li>SQL</li>
                  <li>javascript</li>
                </ul>
              </div>
              <div className="machine-learning">
                <h6>Machine Learning</h6>
                <ul>
                  <li>scikit-learn</li>
                  <li>keras</li>
                  <li>NLTK</li>
                  <li>gensim</li>
                  <li>OpenCV</li>
                  <li>SVM</li>
                </ul>
              </div>
              <div className="tools-platform">
                <h6>Tools & Platforms</h6>
                <ul>
                  <li>AWS</li>
                  <li>jupyter</li>
                  <li>VSCode</li>
                  <li>github</li>
                  <li>tmux</li>
                  <li>flask</li>
                  <li>Docker</li>
                  <li>ffmpeg</li>
                </ul>
              </div>
              <div className="web-development">
                <h6>Web Development</h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Node.js</li>
                  <li>figma</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <aside className="quick-links container">
          <table>
            <tbody>
              <tr>
                <th>
                  <h5>Quick links</h5>
                </th>
              </tr>
              <tr>
                <td>
                  <a href="/resume">resume</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/portfolio">portfolio</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/blog">blog</a>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </main>
    </>
  );
}

export default App;
