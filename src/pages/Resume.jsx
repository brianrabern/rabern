import React from "react";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useEffect } from "react";
import Nav from "../components/Nav.jsx";
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
    navigate("/coding/resume/resumepdf");
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
        <Nav> </Nav>
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
        <div className="container text-gray-800 mx-auto my-8 p-8 bg-gray-100 shadow-lg rounded-md">
          <h1 className="text-3xl font-bold mb-4">Brian Rabern</h1>
          <p>Email: brian.rabern@gmail.com</p>

          <div className="mt-1 text-xl flex space-x-4">
            <a href="https://linkedin.com/in/brian-rabern">
              <AiFillLinkedin className="hover:text-warning" />
            </a>
            <a href="https://github.com/brianrabern">
              {" "}
              <AiFillGithub className="hover:text-warning" />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">About</h2>

            <p className="mt-2">
              As a software developer, I bring a distinctive blend of
              interpersonal, technical, and problem-solving skills, honed
              through my background as a philosophy and logic professor.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
			<p className="mb-1 font-medium">
			Full Stack Engineer, GraphFm, Inc. (2023-now)
            </p>
            <ul className="list-disc list-inside">
              <li>
			  Crafted SQL queries and developed bespoke Python and SQL interfaces for optimized data processing.
              </li>
              <li>
			  Engineered data migration scripts facilitating smooth transition from graph databases to relational databases.
              </li>
            </ul>
            <p className="mb-1 font-medium">
              Software Engineer, Elogic, Ltd. (2019-2023)
            </p>
            <ul className="list-disc list-inside">
              <li>
                Developed a web application for teaching first-order logic
                employing React, TypeScript, Tailwind, Python, and Google Cloud.
              </li>
              <li>
                Leveraged Z3 API with Python to verify logical equivalence and
                produce models.
              </li>
            </ul>
            {/* <p className="mt-2 mb-1 font-medium">
              Associated Faculty in Computer Science, Oregon State University -
              Cascades (2023-now)
            </p>
            <ul className="list-disc list-inside">
              <li>
                Designed and delivered a class on technology and ethical issues
                related to artificial intelligence.
              </li>
              <li>
                Made educational content on multi-tier web applications using,
                e.g., Python, React.
              </li>
            </ul> */}

            <p className="mt-2 mb-1 font-medium">
              Associate Professor in PPLS, University of Edinburgh (2013-now)
            </p>
            <ul className="list-disc list-inside">
              <li>
                Published 30+ articles in top-tier peer reviewed journals.
              </li>
              <li>
                Managed large teaching team for Symbolic Logic with 400+
                students.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Education</h2>

            <p className="mt-2 mb-1 font-semibold">
              Australian National University, PhD (2012)
            </p>
            <ul className="list-disc list-inside">
              <li>Area of specialization: Natural language and logic</li>
              <li>
                Dissertation title: The semantics of contextual shifting and
                sensitivity
              </li>
            </ul>

            <p className="mt-2 mb-1 font-semibold">
              University of Colorado, Boulder, MA in Philosophy (2004)
            </p>
            <p className="mb-1 font-semibold">
              University of Oregon, BA in Philosophy (2002)
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Certifications </h2>
            <p className="mb-1 font-semibold">
              Advanced Software Engineering Certificate, Hack Reactor
            </p>
            <ul className="list-disc list-inside">
              <li>
                Constructed full-stack architectures with microservices and
                RESTful APIs.
              </li>
              <li>
                Demonstrated expertise in building dynamic user interfaces with
                React.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
            <ul className="list-disc list-inside">
              <li>React, TypeScript, JavaScript, HTML, CSS, Tailwind</li>
              <li>Python, Django, FastAPI, SQL, MongoDB, Docker, Git</li>
            </ul>
          </div>
        </div>
      </main>
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
    </>
  );
};

export default Resume;
