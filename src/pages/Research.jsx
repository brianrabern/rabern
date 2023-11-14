//using the philpaper widget

import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Nav from "../components/Nav.jsx";
import Typewriter from "typewriter-effect";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Research = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <main>
      <section className="px-10">
        <Nav> </Nav>
        <h3 className="text-3xl text-primary font-medium py-2">
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
      <section className="min-h-screen relative">
        <iframe
          title="PhilPeople Widget"
          src="https://brianrabern.github.io/research/rabern-research.html" // Relative path to research.html
          // width="100%"
          // height="100%"
          className="absolute top-0 left-0 w-full h-full border-none overflow-y-auto"
        />
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
