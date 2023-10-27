import React from "react";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiGooglescholar,
  SiMongodb,
  SiFastapi,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiSvg,
  SiBootstrap,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiDjango,
  SiGooglecloud,
  SiTypescript,
} from "react-icons/si";
import { FaCss3, FaGlobe } from "react-icons/fa";
import { BsCaretDownSquareFill, BsCaretUpSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  useEffect(() => {
    themeChange(false);
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [isExpandedTech, setIsExpandedTech] = useState(false);
  const [isExpandedLinks, setIsExpandedLinks] = useState(false);

  function togglePdf() {
    navigate("/resumepdf");
  }
  const handleClick = () => {
    setIsExpandedTech(!isExpandedTech);
  };
  const handleClickLinks = () => {
    setIsExpandedLinks(!isExpandedLinks);
  };

  return (
    <>
      <main className="px-10">
        <nav className="py-8 mb-12 flex justify-between items-center">
          <ul className="justify-end">
            <li>
              <input
                data-set-theme="business"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio tooltip"
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
              className="toggle toggle-secondary"
              onClick={togglePdf}
            />
            <p className="px-1 text-sm  text-gray-600 justify-right">pdf</p>
          </label>
        </div>

        <div>
          <h2 className="text-3xl py-2 text-default font-medium">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Brian Rabern")

                  .start();
              }}
            />
          </h2>
          <div className="shadow-lg p-5 rounded-xl my-5 bg-accent flex-1">
            <p className="text-sm text-base-100 mb-1">Contact</p>
            <code className="px-5 text-base-100">brian.rabern@gmail.com</code>
            <br />
            <code className="px-5  text-base-100">
              <a href="https://portfolio.brianrabern.net">brianrabern.net</a>
            </code>
            <p className="px-5 mt-2 text-base-100">541-530-4337</p>

            <p className="px-5 text-base-100">Bend, OR</p>
          </div>

          <div>
            <div className="text-2xl shadow-lg px-4 rounded-xl my-5 bg-base-200">
              <p className="text-sm text-default py-5">Technical Skills</p>
              <div className="text-lg text-default px-5 py-3">
                JavaScript, Typescript, React, Redux, Tailwind, CSS, HTML, SVG,
                Python, FastAPI, Django, Postgres, MongoDB, SQL, Google Cloud,
                Docker, Git
              </div>
              <button className="justify-end mt-5" onClick={handleClick}>
                {isExpandedTech ? (
                  <BsCaretUpSquareFill className="text-default bg-base-200 text-sm" />
                ) : (
                  <BsCaretDownSquareFill className="text-default bg-base-200 text-sm" />
                )}
              </button>

              {isExpandedTech && (
                <>
                  <div className="flex space-x-4 py-3 px-5 text-default">
                    <SiJavascript />
                    <SiTypescript />
                    <SiReact />
                    <SiRedux />
                    <SiTailwindcss />
                    <FaCss3 />
                    <SiHtml5 />
                    <SiSvg />
                    <SiDocker />
                  </div>
                  <div className="flex space-x-4 py-3 px-5 text-default">
                    <SiPython />
                    <SiFastapi />
                    <SiDjango />
                    <SiMongodb />
                    <SiPostgresql />
                    <SiGooglecloud />
                    <SiBootstrap />

                    <SiGit />
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="text-2xl shadow-lg px-4 rounded-xl my-5 bg-accent">
              <p className="text-sm text-base-300 py-5">
                Socials and Repositories
              </p>
              <div className="flex space-x-4 py-3 px-5 text-base-100">
                <a href="https://linkedin.com/in/brian-rabern">
                  <AiFillLinkedin className="hover:text-accent-focus" />
                </a>
                <a href="https://github.com/brianrabern">
                  {" "}
                  <AiFillGithub className="hover:text-warning" />
                </a>
                <a href="https://gitlab.com/brianrabern">
                  <AiFillGitlab className="hover:text-error" />
                </a>
                <a href="https://twitter.com/brian_rabern">
                  <AiFillTwitterCircle className="hover:text-info" />
                </a>

                <a href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en">
                  <SiGooglescholar className="hover:text-blue-300" />
                </a>
              </div>

              <button className="justify-end mt-5" onClick={handleClickLinks}>
                {isExpandedLinks ? (
                  <BsCaretUpSquareFill className="text-base-100 bg-acccent text-sm" />
                ) : (
                  <BsCaretDownSquareFill className="text-base-100 bg-accent text-sm" />
                )}
              </button>

              {isExpandedLinks && (
                <div className="text-lg text-base-100 px-5 py-3">
                  <ul>
                    <li>
                      <a href="https://linkedin.com/in/brian-rabern">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/brianrabern">GitHub</a>
                    </li>

                    <li>
                      {" "}
                      <a href="https://gitlab.com/brianrabern">GitLab</a>
                    </li>

                    <li>
                      {" "}
                      <a href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en">
                        GoogleScholar
                      </a>
                    </li>

                    <li>
                      {" "}
                      <a href="https://philpeople.org/profiles/brian-rabern">
                        PhilPapers
                      </a>
                    </li>

                    <li>
                      <a href="https://twitter.com/brian_rabern">Twitter</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="py-5" />
        <section>
          <h2 className="text-xl font-medium text-accent ">
            Professional Experience
          </h2>

          {/* exper1 */}

          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default">Software Engineer</p>
              <p className=" text-gray-600">Elogic, Ltd.</p>
              <p className="text-gray-600">2020-present</p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                Developed a web application for teaching the syntax and
                semantics of first-order logic, with multiple exercise
                environments including a symbolisation interface, a model
                evaluator, and an interface for constructing proofs.
              </li>
              <li>
                Deployed on Google Cloud Platform interfacing with the Z3
                theorem prover.
              </li>
              <li>
                Licensed for use at major universities including Yale,
                Edinburgh, and Vassar.
              </li>
            </ul>
          </div>

          {/* exper2 */}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default">Professor</p>
              <p className=" text-gray-600">University of Edinburgh</p>
              <p className="text-gray-600">2013-present</p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                Published 30+ articles in top-tier peer reviewed journals.
              </li>
              <li>
                Managed large teaching team for Symbolic Logic with 400+
                students.
              </li>
              <li>
                Received award for Outstanding Innovation in Digital Teaching
                (2020).
              </li>
            </ul>
          </div>
        </section>
        {/* education */}
        <section>
          <h2 className="text-xl text-accent font-medium mt-5">Education</h2>

          {/* edu1 */}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default">
                Advanced Software Engineering Certificate.
              </p>
              <p className=" text-gray-600">Hack Reactor</p>
              <p className="text-gray-600">2023</p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                Mastered domain-driven web development with JavaScript and
                Python.
              </li>{" "}
              <li>
                Constructed full-stack architectures with microservices and
                RESTful APIs.
              </li>
            </ul>
          </div>

          {/* edu2 */}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default">PhD, Philosophy</p>
              <p className=" text-gray-600">
                Australian National University, 2012
              </p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li> Research: Philosophy of language and logic. </li>
              <li>
                Dissertation:{" "}
                <a href="https://philpapers.org/rec/BRIMAC-3">
                  The semantics of contextual shifting and sensitivity.
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default">MA, Philosophy</p>
              <p className=" text-gray-600">University of Colorado, Boulder</p>
            </div>
            <div className="py-3 px-5">
              <p className="font-medium text-default">BA, Philosophy</p>
              <p className=" text-gray-600">University of Oregon</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-accent font-medium mt-5">
            Recent Development Experience
          </h2>
          {/* app1*/}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default flex gap-3 items-center">
                MunroGo{" "}
                <a href="https://gitlab.com/elijahram/munro-go">
                  <AiFillGitlab className="hover:text-error" />
                </a>
                <a href="https://elijahram.gitlab.io/munro-go">
                  <FaGlobe className="hover:text-info" />
                </a>
              </p>
              <p className="text-gray-600">
                A comprehensive guide to Scotland's 282 Munros that tracks
                climbs and statistics. Leveraged OpenWeather, Wikipedia, and
                GoogleMaps APIs for real-time weather conditions, images, and
                maps.
              </p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                Python, JavaScript, FastAPI, React, Redux, MongoDB, Tailwind
              </li>
            </ul>
          </div>
          {/* app1.5*/}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default flex gap-3 items-center">
                symbolify_it{" "}
                <a href="https://github.com/brianrabern/symbolizations">
                  <AiFillGithub className="hover:text-warning" />
                </a>
                <a href="https://symbolizations.vercel.app/">
                  <FaGlobe className="hover:text-info" />
                </a>
              </p>
              <p className="text-gray-600">
                Enables users to practice their logic symbolization skills by
                translating English sentences into the corresponding formal
                language representations.
              </p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>
                {" "}
                React, Next.js, Typescript, Python, Nearely.js, Z3, Tailwind
              </li>
            </ul>
          </div>
          {/* app2*/}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default flex gap-3 items-center">
                vennPlayground{" "}
                <a href="https://github.com/brianrabern/vennPlayground">
                  <AiFillGithub className="hover:text-warning" />
                </a>
                <a href="https://vennplayground.brianrabern.net/">
                  <FaGlobe className="hover:text-info" />
                </a>
              </p>
              <p className="text-gray-600">
                An interface for generating and semantically evaluating Venn
                Diagrams with a proof-checker. Designed an intuitive and dynamic
                interface employing React components and SVG technology.
              </p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>JavaScript, React, SVG, HTML5, CSS3, Bootstrap</li>
            </ul>
          </div>
          {/* app3*/}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default flex gap-3 items-center">
                MuPlayground
                <a href="https://mu-playground.brianrabern.net/">
                  <FaGlobe className="hover:text-info" />
                </a>
              </p>
              <p className="text-gray-600">
                A user-friendly interface implementing the logic for
                Hofstadter's proof system employing React components. Developed
                a gamified version of Hofstadter's MIU-system as a single-page
                React application.
              </p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>JavaScript, React, HTML5, CSS3</li>
            </ul>
          </div>
          {/* app4*/}
          <div>
            <div className="py-3 px-5">
              <p className="font-medium text-default flex gap-3 items-center">
                PhilSoc Library
                <a href="https://gitlab.com/brianrabern/library">
                  <AiFillGitlab className="hover:text-error" />
                </a>
              </p>
              <p className="text-gray-600">
                A full-stack web application using Django, CSS and HTML with
                searchable SQL database. Includes a librarian interface, a
                self-checkout system, and integrates with the Google Books API.
              </p>
            </div>

            <ul className="px-10 list-disc text-gray-600">
              <li>Django, SQL, HTML5, CSS3</li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-xl text-accent font-medium mt-5">
              Publication Highlights
            </h2>
            {/* app1*/}

            <div>
              <div className="py-3 px-5">
                <p className="font-medium text-default flex gap-3 items-center">
                  <a
                    className="hover:text-info"
                    href="https://brianrabern.net/sshlpe.pdf"
                  >
                    A simple solution to the hardest logic puzzle ever
                  </a>{" "}
                </p>
                <p className="text-gray-600 italic">
                  Analysis, (2008), 68(298): 105-112 (w/ L. Rabern).
                </p>
              </div>
              <div className="py-3 px-5">
                <p className="font-medium text-default flex gap-3 items-center">
                  <a
                    className="hover:text-info"
                    href="https://doi.org/10.3765/sp.15.12"
                  >
                    Scorekeeping in a chess game
                  </a>{" "}
                </p>
                <p className="text-gray-600 italic">
                  Semantics and Pragmatics, (2022), 15:12, (w/ B. Pickel).
                </p>
              </div>
              <div className="py-3 px-5">
                <p className="font-medium text-default flex gap-3 items-center">
                  <a
                    className="hover:text-info"
                    href="https://doi.org/10.1007/s10992-022-09675-3"
                  >
                    Pure quotation in linguistic context
                  </a>{" "}
                </p>
                <p className="text-gray-600 italic">
                  Journal of Philosophical Logic, (2023), 52: 393-413
                </p>
              </div>
              <div className="py-3 px-5">
                <p className="font-medium text-default flex gap-3 items-center">
                  <a
                    className="hover:text-info"
                    href="http://philpapers.org/rec/PICTAO-7"
                  >
                    The antinomy of the variable: A Tarskian resolution
                  </a>{" "}
                </p>
                <p className="text-gray-600 italic">
                  Journal of Philosophy, (2016), 113(3): 137-170. (w/ B. Pickel)
                </p>
              </div>
              <div className="py-3 px-5">
                <p className="font-medium text-default flex gap-3 items-center">
                  <a
                    className="hover:text-info"
                    href="https://doi.org/10.1080/0020174X.2018.1470568"
                  >
                    Binding bound variables in epistemic contexts
                  </a>{" "}
                </p>
                <p className="text-gray-600 italic">
                  Inquiry, (2021), 64 (5-6): 533-563
                </p>
              </div>
              <div className="py-3 px-5">
                <p className="font-medium text-default flex gap-3 items-center">
                  <a
                    className="hover:text-info"
                    href="http://dx.doi.org/10.1093/analys/anu032"
                  >
                    Two-dimensional semantics and the nesting problem
                  </a>{" "}
                </p>
                <p className="text-gray-600 italic">
                  Analysis, (2014), 74(2): 210-224 (w/ D.{" "}
                  <a className="hover:text-info" href="https://consc.net/">
                    Chalmers
                  </a>{" "}
                  )
                </p>
              </div>

              <div className="flex justify-between">
                <div className="py-3 px-5">
                  <p className="text-gray-600 flex gap-3 items-center">
                    <a
                      className="text-gray-600 hover:text-info"
                      href="https://philpeople.org/profiles/brian-rabern"
                    >
                      All publications
                    </a>
                  </p>
                </div>

                <div>
                  <a href="https://brianrabern.net/science-of-meaning.html">
                    {" "}
                    <img
                      src="https://brianrabern.net/som-cover.png"
                      height="300"
                      width="200"
                      alt="science of meaning"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2023 rabern - brian.rabern@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default Resume;
