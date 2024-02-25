import React from "react";
import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import Nav from "../components/Nav.jsx";
import Typewriter from "typewriter-effect";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { TbLambda } from "react-icons/tb";
import PublicationCard from "../components/PublicationCard";
import PublicationCardBooks from "../components/PublicationCardBooks";
import brianPublicationsData from "../components/brianPublicationsData.js";
import brianPublicationsDataBooks from "../components/brianPublicationsDataBooks.js";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiArxiv } from "react-icons/si";
import { Icon } from "@iconify/react";

const publicationsData = brianPublicationsData || [];
const publicationsDataBooks = brianPublicationsDataBooks || [];

const Research = () => {
  useEffect(() => {
    themeChange(false);
    window.scrollTo(0, 0);
  }, []);
  //   useEffect(() => {
  //     // set default theme on this page
  //     localStorage.setItem("theme", "dark");
  //   }, []);

  const [toggle, setToggle] = useState(false);

  function toggleIt() {
    setToggle(!toggle);
  }

  return (
    <main>
      <section className="px-10">
        <Nav> </Nav>

        <h3 className="text-3xl text-secondary font-medium py-2">
          <code className="h-10 flex items-center justify-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("φιλοσοφία")

                  .pauseFor(600)
                  .deleteAll()
                  .typeString("Research")

                  .start();
              }}
            />
          </code>
        </h3>
      </section>
      <section>
        <div className="bg-gray-100 p-8">
          <div className="card bg-info m-4">
            <div className="card-body">
              {/* <a href="https://landon.github.io/#data">
                <img
                  src={nash_header}
                  alt="graphs"
                  className="w-full image-class transform hover:rotate-180"
                />
              </a> */}
            </div>

            <div className="mb-3 flex justify-center space-x-4">
              <a
                data-tip="philpapers"
                href="https://philpeople.org/profiles/brian-rabern"
                className="btn btn-sm btn-info tooltip hover:btn-success"
              >
                <button>
                  <svg
                    height="25"
                    viewBox="0 0 512 512"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m281.1554 248.03682a68.31745 68.310912 0 0 0 28.96139-16.22382c19.80361-17.99355 29.70388-41.9537 29.70388-71.87698a117.70966 117.69839 0 0 0 -8.65195-45.64664 84.382038 84.373965 0 0 0 -24.70979-33.82228 78.394491 78.386985 0 0 0 -33.56475-16.467103h-67.72504v188.417963h29.70392c20.03854.0128 35.46585-1.44813 46.28279-4.3807zm68.33935-184.017582a104.474 104.464 0 0 1 20.68219 12.529589c28.71464 21.830411 43.07125 50.943873 43.07125 87.340863 0 37.00339-14.56143 64.09299-43.68424 81.27056-15.16131 8.89745-33.55994 14.25597-55.19425 16.07509-6.8808.60638-23.45971.90869-49.73588.90869h-59.40908v108.87378c0 20.61764 1.1634 35.93281 3.48982 45.9441a51.32811 51.323197 0 0 0 12.88432 24.70742 53.281079 53.275981 0 0 0 7.33363 6.3298h219.06749v-383.979892h-98.5057zm-220.75727 20.419027a49.650794 49.646039 0 0 0 -20.01319-18.043397 55.334247 55.328956 0 0 0 -5.73664-2.376053h-38.987647v383.981185h51.054657a53.251111 53.246016 0 0 0 7.33363-6.32981 49.087893 49.083199 0 0 0 12.99502-24.55993c2.22754-9.90063 3.34109-25.26388 3.34109-46.09289v-223.50113a269.16148 269.13573 0 0 0 -2.28355-40.1888 62.108937 62.102992 0 0 0 -7.70292-22.889594z"
                      strokeWidth=".067527"
                    />
                  </svg>
                </button>
              </a>

              <a
                data-tip="semantics archive"
                href="https://semanticsarchive.net/cgi-bin/browse.pl?search=rabern"
                className="btn btn-sm btn-info tooltip hover:btn-secondary"
              >
                <TbLambda className="text-2xl" />
              </a>
              <a
                data-tip="scholar"
                href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en"
                className="btn btn-sm btn-info tooltip hover:bg-blue-700"
              >
                <SiGooglescholar className="text-2xl hover:text-white" />
              </a>
              <a
                data-tip="arxiv"
                href="https://arxiv.org/search/?query=rabern%2C+brian&searchtype=author"
                className="btn btn-sm btn-info tooltip hover:btn-error"
              >
                <SiArxiv className="text-2xl hover:text-white" />
              </a>
              <a
                data-tip="github"
                href="https://github.com/brianrabern/philosophy-papers"
                className="btn btn-sm btn-info tooltip hover:btn-primary"
              >
                <AiFillGithub className="text-2xl" />
              </a>

              <a
                data-tip="bibtex"
                href="https://philpapers.org/asearch.pl?start=0&showCategories=on&ap_c2=&filterMode=keywords&sort=pubYear&proOnly=on&sqc=&search_header=search_header.html&categorizerOn=&format=bib&searchStr=%40author+Brian+Rabern&subtitle=Papers+matching+%27%40author+Brian+Rabern%27&freeOnly=&filterByAreas=&limit=500&newWindow=&langFilter=&ap_c1=&onlineOnly=&publishedOnly=on&hideAbstracts=off&jlist=&ap_c1=&ap_c2="
                className="btn btn-sm btn-info tooltip hover:btn-warning"
              >
                <button>
                  <Icon
                    icon="file-icons:bibtex"
                    className="text-2xl hover:text-white"
                  />
                </button>
              </a>
            </div>
            <div className="mr-4 mb-1 text-right text-blue-700">
              <a
                className="hover:text-warning"
                href="https://mathscinet.ams.org/mathscinet/freetools/collab-dist?source=838572&target=189017"
              >
                <div className="badge badge-outline">erdős</div>
              </a>
            </div>
          </div>
          <img

            src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/mirror.png"
            alt="mirror"
            className="w-48 h-48 rounded-full mx-auto my-4"
          />
          <div className="form-control text-center">
            <label className="label cursor-pointer d-flex align-center justify-center">
              <p className="px-1 text-xl text-gray-600">articles</p>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                onClick={toggleIt}
              />
              <p className="px-1 text-xl  text-gray-600">books</p>
            </label>
          </div>

          {!toggle && (
            <>
              <div className="text-2xl text-primary flex items-center justify-center">
                Articles
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <div className="ml-4 mr-4 flex flex-wrap items-center justify-center"> */}
                {publicationsData.map((publication, index) => (
                  <PublicationCard key={index} publication={publication} />
                ))}
              </div>
            </>
          )}
          {toggle && (
            <>
              <div className="text-2xl text-primary flex items-center justify-center">
                Books and edited volumes
              </div>
              <div>
                {publicationsDataBooks.map((publication, index) => (
                  <PublicationCardBooks key={index} publication={publication} />
                ))}
              </div>{" "}
            </>
          )}
        </div>
        <div className="bg-gray-100">
          <div className="mb-2 px-4 bg-gray-100">
            <div className="ml-4 mr-4 flex flex-wrap items-center justify-center">
              <img
                src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/black_graph.png"
                alt="graph"
                className="ml-1 mr-1 rounded-lg w-32"
              />
              <img
                src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/black_graph.png"
                alt="graph"
                className="ml-1 mr-1 rounded-lg w-32"
              />
              <img
                src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/black_graph.png"
                alt="graph"
                className="ml-1 mr-1 rounded-lg w-32"
              />
            </div>

            <div className="card bg-info">
              <div className="card-body">
                <p className="text-center text-info">
                  "We do not need more tools, we need hands to pick up the
                  tools"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <div className="tooltip" data-tip="to top">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <FaArrowAltCircleUp />
            </button>
          </div>
          <p>© 2023 rabern - brian.rabern@gmail.com</p>
        </div>
      </footer>
    </main>
  );
};

export default Research;
