import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import bdr21a from "./bdr21a.jpeg";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import Nav from "../components/Nav.jsx";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);
  // useEffect(() => {
  //   // set default theme on this page
  //   localStorage.setItem("theme", "bumblebee");
  // }, []);
  return (
    <>
      <main className="px-10">
        <section>
          <Nav> </Nav>
          <div className="text-center p-10">
            <h3 className="text-3xl text-secondary font-medium py-2">
              <code className="h-10 flex items-center justify-center">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("01100010")
                      .pauseFor(600)
                      .deleteAll()
                      .typeString("Brian Rabern")
                      .start();
                  }}
                />
              </code>
            </h3>
            <p className="mt-2 text-lg leading-8 text-accent">
              I’m a software developer who enjoys logic puzzles, paradoxes,
              problem-solving, and formal philosophy. In my spare time, I do
              some writing and research. My tech interests include AI, virtual
              reality, the semantic web, Python, and JavaScript/React. I also
              like to do things outside.
            </p>
          </div>

          <div className="flex relative bg-base-300 rounded-full w-62 h-40 overflow-hidden">
            <img src={bdr21a} alt="Brian Rabern" />{" "}
            <div className="px-10 text-3xl flex flex-wrap justify-center items-center gap-4 py-3 text-accent">
              <a href="https://github.com/brianrabern">
                <AiFillGithub className="hover:text-purple-500" />
              </a>

              <a href="https://linkedin.com/in/brian-rabern">
                {" "}
                <AiFillLinkedin className="hover:text-blue-500" />
              </a>

              {/* <a href="https://bsky.app/profile/rabern.bsky.social">
                <SiBluesky className="hover:text-info" />
              </a> */}
              <a
                href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en"
                className="hidden sm:block"
              >
                <SiGooglescholar className="hover:text-green-500" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center p-10">
            <p className="mt-2 leading-8 text-accent">
              Formerly, I was a professor at the University of Edinburgh -- or,
              officially a
              <a
                className="hover:text-secondary"
                href="https://en.wikipedia.org/wiki/Reader_(academic_rank)"
              >
                {" "}
                Reader
              </a>
              . I did my PhD at Australian National University, and my BA and MA
              at University of Oregon and UC Boulder, respectively. You can see
              my academic work{" "}
              <Link className="hover:text-secondary" to="/research/">
                here
              </Link>
              , my software projects{" "}
              <Link className="hover:text-secondary" to="/coding/">
                here
              </Link>
              , and my talks/teaching{" "}
              <Link className="hover:text-secondary" to="/talking/">
                here
              </Link>
              . My software resume is{" "}
              <Link className="hover:text-info" to="/coding/resume/">
                here
              </Link>{" "}
              and my academic CV is{" "}
              <a
                className="hover:text-info"
                href="https://drive.google.com/file/d/1mXvjire6pXGe270VLhglVQ-Pk3gVr77u/view?usp=sharing"
              >
                here
              </a>
              .
            </p>
            <br />
            <div className="mr-4 mb-1 text-center text-secondary">
              <a
                className=" hover:text-primary"
                href="https://drive.google.com/file/d/1mXvjire6pXGe270VLhglVQ-Pk3gVr77u/view?usp=sharing"
              >
                <div className="badge hover:badge-secondary hover:text-black ">
                  curriculum vitae
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2023 rabern - brian.rabern@gmail.com</p>
          <p className="text-gray-600">
            <Link to="/landon/memorial/">
              {" "}
              In Memoriam: Landon Rabern (1981-2020)
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
