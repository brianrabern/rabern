import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
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
              I'm a teacher, researcher, and software developer. I like to write
              code and play with technology; I like logic puzzles, paradoxes,
              and formal philosophy. My research centers around natural language
              semantics and logic. And my tech interests include artifical
              intelligence, virtual reality, semantic web, Python, and
              JavaScript/React. I also like to do things outside.
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
              <a href="https://twitter.com/brian_rabern">
                <RiTwitterXFill className="hover:text-info" />
              </a>
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
              I'm a software engineer at Elogic, building an educational web
              application. I'm also a professor at Oregon State
              University-Cascades and the University of Edinburgh. I did my PhD
              at Australian National University, and my BA and MA at University
              of Oregon and UC Boulder, respectively. You can see my academic
              work{" "}
              <Link className="hover:text-info" to="/research/">
                here
              </Link>
              , my software projects{" "}
              <Link className="hover:text-info" to="/coding/">
                here
              </Link>
              , and my talks/teaching{" "}
              <Link className="hover:text-info" to="/talking/">
                here
              </Link>
              . My standard resume is{" "}
              <Link className="hover:text-info" to="/coding/resume/">
                here
              </Link>{" "}
              and my academic CV is{" "}
              <a
                className="hover:text-info"
                href="https://drive.google.com/file/d/1QExH0KvxSVyd9RtFQFXeCJXbVx12dHpH/view?usp=sharing"
              >
                here
              </a>
              .
            </p>
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
