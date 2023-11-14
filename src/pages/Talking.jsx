import React from "react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Nav from "../components/Nav.jsx";
import Typewriter from "typewriter-effect";
import TalkCard from "../components/TalkCard.jsx";
import talkData from "../components/talkData.js";
import { FaArrowAltCircleUp } from "react-icons/fa";

const talks = talkData || [];

const Talking = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  //   useEffect(() => {
  //     // set default theme on this page
  //     localStorage.setItem("theme", "bumblebee");
  //   }, []);

  const [toggle, setToggle] = useState(false);

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
      <div className="form-control text-center">
        <label className="label cursor-pointer d-flex align-center justify-center">
          <p className="px-1 text-xl text-gray-600">teaching</p>
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            onClick={toggleIt}
            defaultChecked
          />
          <p className="px-1 text-xl  text-gray-600">presentations</p>
        </label>
      </div>
      {!toggle && (
        <div>
          {talks.map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
        </div>
      )}
      {toggle && <p className="text-center">...under construction..</p>}

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
