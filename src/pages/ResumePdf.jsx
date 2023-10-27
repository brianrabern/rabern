import React from "react";
import { useEffect } from "react";
import BrianRabernResume from "./BrianRabernResume.png";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { useNavigate } from "react-router-dom";

const ResumePdf = () => {
  const navigate = useNavigate();
  useEffect(() => {
    themeChange(false);
  }, []);

  function togglePdf() {
    navigate("/resume");
  }

  return (
    <>
      <main className="px-10">
        <nav className="py-8 mb-12 flex justify-between items-center">
          <ul className="justify-end text-accent">
            <li>
              {" "}
              <input
                data-set-theme="business"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="coffee"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="dark"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="black"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="cyberpunk"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="bumblebee"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
            </li>
          </ul>
          <ul className="menu menu-horizontal bg-base-100 rounded-box">
            <li>
              <div className="tooltip" data-tip="home">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
              </div>
            </li>
            <li>
              <div className="tooltip" data-tip="résumé">
                {" "}
                <Link to="/resume">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="form-control">
          <label className="label cursor-pointer justify-end">
            <p className="px-1 text-sm text-gray-600 justify-right">html</p>
            <input
              type="checkbox"
              className="toggle"
              onClick={togglePdf}
              defaultChecked
            />
            <p className="px-1 text-sm  text-gray-600 justify-right">pdf</p>
          </label>
        </div>
        <a href="https://brianrabern.net/BrianRabernResume.pdf">
          <button className="btn btn-block">open pdf</button>
        </a>
        <div className="py-10 flex justify-center w-full h-full">
          <div className="overflow-scroll">
            <img src={BrianRabernResume} alt="resume" />
          </div>
        </div>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2023 rabern - brian.rabern@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default ResumePdf;
