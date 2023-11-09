import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Nav from "../components/Nav.jsx";
import Typewriter from "typewriter-effect";

const Coding = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  useEffect(() => {
    // set default theme on this page
    localStorage.setItem("theme", "bumblebee");
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

                  .typeString("def foo():")

                  .pauseFor(600)
                  .deleteAll()
                  .typeString("Coding")

                  .start();
              }}
            />
          </code>
        </h3>
      </section>
      <p>
        under construction...{" "}
        <a href="https://github.com/brianrabern">GitHub</a>
      </p>
    </main>
  );
};

export default Coding;

// import {
//   AiFillGithub,
//   AiFillGitlab,
//   AiFillTwitterCircle,
//   AiFillLinkedin,
// } from "react-icons/ai";
// import { MdSwipe } from "react-icons/md";
// import {
//   SiPython,
//   SiJavascript,
//   SiHtml5,
//   SiGooglescholar,
//   SiMongodb,
//   SiFastapi,
//   SiReact,
//   SiRedux,
//   SiTailwindcss,
//   SiDaisyui,
//   SiSvg,
//   SiBootstrap,
//   SiTypescript,
//   SiFirebase,
//   SiNextdotjs,
// } from "react-icons/si";
// import { FaCss3 } from "react-icons/fa";
// import Typewriter from "typewriter-effect";
// import { Link } from "react-router-dom";
// import bdr2 from "./bdr2.png";
// import { themeChange } from "theme-change";
// import { useEffect } from "react";

// export default function Coding() {
//   useEffect(() => {
//     themeChange(false);
//   }, []);

//   return (
//     <>
//       <main className="px-10">
//         <section>
//           <nav className="py-8 mb-12 flex justify-between items-center">
//             <div className="tooltip" data-tip="mood?">
//               <ul className="justify-end">
//                 <li>
//                   {" "}
//                   <input
//                     data-set-theme="business"
//                     data-act-class="ACTIVECLASS"
//                     type="radio"
//                     name="theme"
//                     className="radio"
//                     id="business-radio"
//                   />
//                   <input
//                     data-set-theme="coffee"
//                     data-act-class="ACTIVECLASS"
//                     type="radio"
//                     name="theme"
//                     className="radio"
//                   />
//                   <input
//                     data-set-theme="dark"
//                     data-act-class="ACTIVECLASS"
//                     type="radio"
//                     name="theme"
//                     className="radio"
//                   />
//                   <input
//                     data-set-theme="black"
//                     data-act-class="ACTIVECLASS"
//                     type="radio"
//                     name="theme"
//                     className="radio"
//                   />
//                   <input
//                     data-set-theme="cyberpunk"
//                     data-act-class="ACTIVECLASS"
//                     type="radio"
//                     name="theme"
//                     className="radio"
//                   />
//                   <input
//                     data-set-theme="bumblebee"
//                     data-act-class="ACTIVECLASS"
//                     type="radio"
//                     name="theme"
//                     className="radio"
//                   />
//                 </li>
//               </ul>{" "}
//             </div>

//             <ul className="menu menu-horizontal bg-base-100 rounded-box">
//               <li>
//                 <div className="tooltip" data-tip="home">
//                   <Link to="/">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                       />
//                     </svg>
//                   </Link>
//                 </div>
//               </li>
//               <li>
//                 <div className="tooltip" data-tip="résumé">
//                   <Link to="/coding/resume/">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </Link>
//                 </div>
//               </li>
//             </ul>
//             {/* <ul className="flex">
//                 <li className="bg-secondary px-4 py-2 rounded-full ml-8 text-sm text-default">
//                   <Link to="/resume">resume</Link>
//                 </li>
//               </ul> */}
//           </nav>
//           <div className="text-center p-10">
//             <h2 className="text-3xl py-2 text-primary font-medium">
//               Brian Rabern
//             </h2>
//             <h3 className="text-2xl py-2">
//               <code className="h-10 flex items-center justify-center text-info">
//                 <Typewriter
//                   onInit={(typewriter) => {
//                     typewriter

//                       .typeString("01110011 01101111")

//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString("software engineer")

//                       .start();
//                   }}
//                 />
//               </code>
//             </h3>
//             <p className="text-lg leading-8 text-accent">
//               As a software developer, I bring a distinctive blend of
//               interpersonal, technical, and problem-solving skills, honed
//               through my background as a philosophy and logic professor.
//               {/* As a software engineer with an enthusiasm for advanced
//               technologies, I offer a distinctive combination of skills derived
//               from my background as a philosophy and logic professor. Combining
//               analytical rigor with an innovative mindset, I fearlessly tackle
//               engineering challenges, exploring alternative possibilities to
//               develop products that transcend mere functionality, deeply
//               resonating with users. */}
//             </p>
//           </div>

//           <div className="flex relative bg-base-300 rounded-full w-62 h-40 overflow-hidden">
//             <img src={bdr2} alt="Brian Rabern" />{" "}
//             <div className="px-10 text-4xl flex flex-wrap justify-center items-center gap-4 py-3 text-accent">
//               <a href="https://github.com/brianrabern">
//                 <AiFillGithub className="hover:text-purple-500" />
//               </a>
//               <a href="https://gitlab.com/brianrabern">
//                 <AiFillGitlab className="hover:text-warning" />
//               </a>
//               <a href="https://linkedin.com/in/brian-rabern">
//                 {" "}
//                 <AiFillLinkedin className="hover:text-blue-500" />
//               </a>
//               <a href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en">
//                 <SiGooglescholar className="hover:text-green-500" />
//               </a>
//               <a href="https://twitter.com/brian_rabern">
//                 <AiFillTwitterCircle className="hover:text-info" />
//               </a>
//             </div>
//           </div>
//         </section>

//         <section className="mt-8">
//           <div>
//             <h3 className="text-2xl py-2">
//               <code className="h-10 flex items-center justify-center text-info">
//                 <Typewriter
//                   onInit={(typewriter) => {
//                     typewriter

//                       .pauseFor(5000)
//                       .deleteAll()
//                       .typeString("projects")

//                       .start();
//                   }}
//                 />
//               </code>
//             </h3>

//             <p className="flex items-center justify-center py-2 text-lg leading-8 text-accent mb-3">
//               Below are some of the projects I've worked on recently.
//             </p>
//           </div>

//           <div className="flex items-center justify-center">
//             <MdSwipe
//               style={{ transform: "rotate(180deg)" }}
//               className=" text-3xl text-accent"
//             />
//           </div>
//           {/* <div className="tooltip" data-tip="swipe left/right"> */}
//           <div className="carousel w-full">
//             <div id="item1" className="carousel-item w-full h-full">
//               <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10 bg-primary flex-1">
//                 <div className="tooltip" data-tip="swipe left/right">
//                   <h3 className="text-default text-2xl font-medium pb-2">
//                     MunroGo
//                   </h3>
//                 </div>
//                 <div className="mb-2 text-default">
//                   [<a href="https://gitlab.com/elijahram/munro-go">code</a>] [
//                   <a href="https://elijahram.gitlab.io/munro-go">live</a>]
//                 </div>
//                 <iframe
//                   src="https://www.youtube.com/embed/WH_QtAKQunQ"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   title="munro-go"
//                   allowFullScreen
//                   className="w-full h-80 lg:h-[42rem]"
//                 ></iframe>

//                 <p className="py-2 text-default mt-3">
//                   A mountain-climbing app that allows users to log and track
//                   climbs and statistics using FastAPI and React.
//                 </p>
//                 <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
//                   <SiPython />
//                   <SiJavascript />
//                   <SiMongodb />
//                   <SiFastapi />
//                   <SiReact />
//                   <SiRedux />
//                   <SiTailwindcss />
//                   <SiDaisyui />
//                 </div>
//               </div>
//             </div>
//             <div id="item1.5" className="carousel-item w-full h-full">
//               <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10 bg-primary flex-1">
//                 <div className="tooltip" data-tip="swipe left/right">
//                   <h3 className="text-default text-2xl font-medium pb-2">
//                     symbolify_it
//                   </h3>
//                 </div>
//                 <div className="mb-2 text-default">
//                   [
//                   <a href="https://github.com/brianrabern/symbolizations">
//                     code
//                   </a>
//                   ] [<a href="https://symbolizations.vercel.app/">live</a>]
//                 </div>
//                 <iframe
//                   src="https://youtube.com/embed/H7TNHlLP9AQ"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   title="symbolify_it"
//                   allowFullScreen
//                   className="w-full h-80 lg:h-[42rem]"
//                 ></iframe>

//                 <p className="py-2 text-default mt-3">
//                   Enables users to practice their logic symbolization skills by
//                   translating English sentences into the corresponding formal
//                   language representations.
//                 </p>
//                 <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
//                   <SiNextdotjs />
//                   <SiReact />
//                   <SiTypescript />
//                   <SiPython />
//                   <SiTailwindcss />
//                 </div>
//               </div>
//             </div>
//             <div id="item2" className="carousel-item w-full h-full">
//               <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-primary flex-1">
//                 <h3 className="text-default text-2xl font-medium pb-2">
//                   vennPlayground
//                 </h3>
//                 <div className="mb-2 text-default">
//                   [
//                   <a href="https://github.com/brianrabern/vennPlayground">
//                     code
//                   </a>
//                   ] [
//                   <a href="https://brianrabern.github.io/vennPlayground/">
//                     live
//                   </a>
//                   ]
//                 </div>
//                 <iframe
//                   src="https://youtube.com/embed/WQIxw2IvQTI"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   title="vennPlayground"
//                   allowFullScreen
//                   className="w-full h-80 lg:h-[42rem]"
//                 ></iframe>

//                 <p className="py-2 text-default mt-3">
//                   An interface for generating and semantically evaluating Venn
//                   Diagrams utilizing React components and SVG technology.
//                 </p>
//                 <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
//                   <SiSvg />
//                   <SiJavascript />
//                   <SiHtml5 />
//                   <FaCss3 />
//                   <SiBootstrap />
//                   <SiReact />
//                 </div>
//               </div>
//             </div>
//             <div id="item3" className="carousel-item w-full h-full">
//               <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-primary flex-1">
//                 <h3 className="text-default text-2xl font-medium pb-2">
//                   Hofstadter's MU Playground
//                 </h3>
//                 <div className="mb-2 text-default">
//                   [<a href="https://mu-playground.brianrabern.net/">live</a>]
//                 </div>
//                 <iframe
//                   src="https://youtube.com/embed/bu6oVyBziM0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   title="mu"
//                   allowFullScreen
//                   className="w-full h-80 lg:h-[42rem]"
//                 ></iframe>

//                 <p className="py-2 text-default mt-3">
//                   A user-friendly interface implementing the logic for
//                   Hofstadter's proof system employing React components.
//                 </p>
//                 <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
//                   <SiReact />
//                   <SiJavascript />
//                   <SiHtml5 />
//                   <FaCss3 />
//                 </div>
//               </div>
//             </div>
//             <div id="item4" className="carousel-item w-full h-full">
//               <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-primary flex-1">
//                 <h3 className="text-default text-2xl font-medium pb-2">
//                   Elogic
//                 </h3>
//                 <div className="mb-2 text-default">
//                   [<a href="https://info.elogic.land/">license info</a>]
//                 </div>
//                 <iframe
//                   src="https://youtube.com/embed/vuYXTmYnnaw"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   title="elogic"
//                   allowFullScreen
//                   className="w-full h-80 lg:h-[42rem]"
//                 ></iframe>

//                 <p className="py-2 text-default mt-3">
//                   A web-based application for teaching the syntax and semantics
//                   of first-order logic with multiple exersices and automatic
//                   grading.
//                 </p>
//                 <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
//                   <SiTypescript />
//                   <SiReact />
//                   <SiTailwindcss />
//                   <SiFirebase />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* </div> */}
//         </section>
//         <div className="flex items-center justify-center mb-12">
//           <Link to="/resume">
//             <button className="btn btn-wide rounded bg-primary text-black hover:bg-secondary border-0">
//               résumé
//             </button>
//           </Link>
//         </div>
//       </main>
//       <footer className="footer footer-center p-4 bg-base-300 text-base-content">
//         <div>
//           <p>© 2023 rabern - brian.rabern@gmail.com</p>
//         </div>
//       </footer>
//     </>
//   );
// }
