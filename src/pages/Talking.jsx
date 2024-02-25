import React from "react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Nav from "../components/Nav.jsx";
import Typewriter from "typewriter-effect";
import TalkCard from "../components/TalkCard.jsx";
import CourseCard from "../components/CourseCard.jsx";
import talkData from "../components/talkData.js";
import teachingData from "../components/teachingData.js";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const talks = talkData || [];
const courses = teachingData || [];

const Talking = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  //   useEffect(() => {
  //     // set default theme on this page
  //     localStorage.setItem("theme", "bumblebee");
  //   }, []);

  const [toggle, setToggle] = useState(true);

  function toggleIt() {
    setToggle(!toggle);
  }
  return (
    <main>
      <section className="px-10">
        <Nav> </Nav>
        <h3 className="text-3xl text-primary font-medium py-2">
          <code className="h-10 flex items-center justify-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("blahblah")

                  .pauseFor(600)
                  .deleteAll()
                  .typeString("Talking")

                  .start();
              }}
            />
          </code>
        </h3>
      </section>

      {!toggle && (
        <img
          src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/me_talking.jpeg"
          alt="me talking"
          className="w-48 h-48 rounded-full mx-auto my-4"
        />
      )}
      {toggle && (
        <img
          src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/jowett.jpeg"
          alt="me talking"
          className="w-48 h-48 rounded-full mx-auto my-"
        />
      )}
      {toggle && (
        <div className="ml-4">
          <Link to="awards/">
            <span className="badge badge-secondary">Teaching Awards</span>
          </Link>
        </div>
      )}
      <div className="form-control text-center mb-4">
        <label className="label cursor-pointer d-flex align-center justify-center">
          <p className="px-1 text-xl text-gray-600">teaching</p>
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            onClick={toggleIt}
            // defaultChecked
          />
          <p className="px-1 text-xl  text-gray-600">presentations</p>
        </label>
      </div>
      {!toggle && (
        <>
          <div className="mb-2 text-2xl text-primary flex items-center justify-center">
            Presentations
          </div>
          <div>
            {talks.map((talk, index) => (
              <TalkCard key={index} talk={talk} />
            ))}
          </div>
        </>
      )}
      {toggle && (
        <>
          <div className="mb-2 text-2xl text-primary flex items-center justify-center">
            Courses
          </div>
          <div className="ml-4 mr-4 flex flex-wrap items-center justify-center">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </>
      )}
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

export default Talking;
