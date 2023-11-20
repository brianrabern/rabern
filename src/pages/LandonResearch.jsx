import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import PublicationCard from "../components/PublicationCard";
import landonPublicationsData from "../components/landonPublicationsData.js";
import graphs_header2 from "./assets/graphs_header2.png";
import lwr_beach from "./assets/lwr_beach.jpg";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiArxiv } from "react-icons/si";
import { Icon } from "@iconify/react";
import { themeChange } from "theme-change";

const publicationsData = landonPublicationsData || [];

const LandonResearch = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  // useEffect(() => {
  //   // set default theme on this page
  //   localStorage.setItem("theme", "dark");
  // }, []);

  return (
    <main>
      <nav className="px-4 py-8 mb-12 flex justify-between items-center">
        <div className="tooltip" data-tip="mood?">
          <ul className="justify-end">
            <li>
              {" "}
              <input
                data-set-theme="business"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
                id="business-radio"
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
            </li>
          </ul>{" "}
        </div>

        <ul className="menu menu-horizontal bg-base-100 rounded-box">
          <li>
            <div className="tooltip" data-tip="memorial">
              <Link to="/landon/memorial">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </Link>
            </div>
          </li>
          <li>
            <div className="tooltip" data-tip="research">
              <Link to="/landon/research">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className="bg-gray-100 p-8">
        <h1 className="text-2xl text-base-300 font-semibold mb-4 text-center">
          Landon Rabern Bibliography
        </h1>
        <div className="card bg-info m-4">
          <div className="card-body">
            <a href="https://landon.github.io/#data">
              <img
                src={graphs_header2}
                alt="graphs"
                className="w-full image-class transform hover:rotate-180"
              />
            </a>
          </div>

          <div className="mb-3 flex justify-center space-x-4">
            <a
              href="https://arxiv.org/search/?query=rabern&searchtype=author"
              className="btn btn-sm btn-info hover:btn-error"
            >
              <SiArxiv className="text-2xl hover:text-white" />
            </a>
            <a
              href="https://github.com/landon"
              className="btn btn-sm btn-info hover:btn-primary"
            >
              <AiFillGithub className="text-2xl" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=aZg5kIEAAAAJ&hl=en"
              className="btn btn-sm btn-info hover:btn-accent"
            >
              <SiGooglescholar className="text-2xl" />
            </a>
            <a
              href="/landon-pubs.txt"
              className="btn btn-sm btn-info hover:btn-success"
              download
            >
              <button>
                <Icon
                  icon="file-icons:bibtex"
                  className="text-2xl hover:text-white"
                />
              </button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {publicationsData.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mb-2 px-4 bg-gray-100">
          <div className="card bg-info">
            <div className="card-body">
              <p className="text-center text-black">
                "We do not need more tools, we need hands to pick up the tools"
              </p>
            </div>
          </div>
        </div>
        <div className="mb-2 px-4 bg-gray-100">
          <div className="card bg-black">
            <div className="card-body">
              <p className="text-center">
                "Formalism. formalism! give us our formalism, for our minds are
                weak and our vision poor."{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 grid bg-gray-100 grid-cols-2 gap-2">
          <div className="card mb-2 bg-black">
            <div className="card-body">
              <p className="text-xs">
                <code>public Delegate Turtle Turtle(Turtle turtle);</code>
              </p>
            </div>
          </div>
          <div className="card mb-2 bg-black">
            <div className="card-body">
              <p className="text-xs">
                <code>public Delegate Turtle Turtle(Turtle turtle);</code>
              </p>
            </div>
          </div>
        </div>

        <img src={lwr_beach} alt="lwr_beach" className=" bg-gray-100 w-full" />
      </div>
    </main>
  );
};

export default LandonResearch;
