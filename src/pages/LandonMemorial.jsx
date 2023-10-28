import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import landonMemorialData from "../components/landonMemorialData.js";
import graphs_header2 from "./assets/graphs_header2.png";
import lwr_beach from "./assets/lwr_beach.jpg";
import { themeChange } from "theme-change";
import MemoryCard from "../components/MemoryCard.jsx";

const memories = landonMemorialData || [];
const PHOTOBOXSIZE = 27;
const photos = [];

for (let i = 1; i <= PHOTOBOXSIZE; i++) {
  photos.push({
    type: "photo",
    src: require(`./assets/memorialPhotos/photo${i}.jpeg`),
  });
}

// const photos = [
//   { type: "photo", src: require("./assets/memorialPhotos/photo1.jpeg") },
//   { type: "photo", src: require("./assets/memorialPhotos/photo2.jpeg") },
//   { type: "photo", src: require("./assets/memorialPhotos/photo3.jpeg") },
//   { type: "photo", src: require("./assets/memorialPhotos/photo4.png") },

//   // Add more photos as needed
// ];

// Create an interleaved array
const interleavedArray = [];
for (let i = 0; i < Math.max(photos.length, memories.length); i++) {
  if (i < memories.length) {
    interleavedArray.push(memories[i]);
  }
  if (i < photos.length) {
    interleavedArray.push(photos[i]);
  }
}
console.log(interleavedArray);
const LandonMemorial = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  useEffect(() => {
    // set default theme on this page
    localStorage.setItem("theme", "dark");
  }, []);

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
          Landon Rabern (1981-2020)
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
        </div>

        <div className="card bg-gray-300 m-4">
          <div className="card-body">
            <p className="text-md ml-4 text-justify text-base-300">
              Landon Rabern (May 07, 1981 - October 19, 2020) was a
              mathematician and software engineer. He was most well-known for
              his work on the Borodin-Kostochka conjecture and related topics in
              graph theory.
            </p>
            <img
              src={require("./assets/LWR.jpeg")}
              alt="graph"
              className="rounded-lg max-w-xs" // Set the image to float left and add some margin
            />
            <p className="text-sm ml-4 text-justify text-base-300">
              Landon was born and raised in Roseburg, Oregon. As a child he
              developed a deep interest in computers, machine intelligence, and
              science fiction. Starting in the 1980s with a Commodore 64, and
              making simple programs in BASIC, then Pascal, C, and so on, he
              taught himself how to code. In high school he programmed a chess
              AI (codenamed "Betsy") and experimented with using neural
              networks. This program has been credited as the first published
              chess engine able to play Fischer Random Chess (see{" "}
              <a
                href="https://www.chessprogramming.org/Landon_Rabern"
                className="text-blue-500 hover:underline"
              >
                here
              </a>
              ). He went on to study mathematics and computer science at
              Washington University in St. Louis, spending a year abroad in the
              Netherlands, and then earning a Masters degree in Mathematics at
              UC Santa Barbara. After a few years working as a software
              engineer, and while working on graph theory "on the side" he
              proved a conjecture of some prominent mathematicians. He went to
              Arizona State to work with one of them (
              <a
                href="https://landon.github.io/content/hal/5minutes.html"
                className="text-blue-500 hover:underline"
              >
                Hal Kierstead
              </a>
              ) and finish his PhD (see{" "}
              <a
                href=" https://drive.google.com/file/d/1864HooDOyEpQaEGlmZXMxLLOP3Jx_xcw/view?usp=sharing"
                className="text-blue-500 hover:underline"
              >
                dissertation
              </a>
              ). Landon always set his own paths in life, and ignored common
              societal conventions. He sought ways of expanding and sharpening
              his mind. He read extensively, including from cognitive science,
              machine learning, literature on meditation, existentialist,
              analytic, and eastern philosophy, and of course high-level
              mathematics. He practiced meditation and went on long Vipassanā
              retreats. He looked up to scientists that were intellectually
              daring and determined, such as Nicola Tesla and Paul Erdős, and
              would often quote Taoist and Existenialist philosophers such as
              Zhuangzi and Nietzsche. While he was often content to be left
              alone with his computers and thoughts, he also enjoyed discussion
              and debate, hanging out with good friends, and getting outdoors,
              for example, to the beaches or forests of Oregon. Most
              importantly, he loved his sons, Atticus and Alfred. Landon tended
              to have one foot in academia and one in industry (the former he
              called "thinking" the latter "making things"). He taught math as a
              university professor, and published numerous articles on topics in
              discrete mathematics and combinatorics (see his{" "}
              <Link
                to="/landon/research"
                className="text-blue-500 hover:underline"
              >
                bibliography
              </Link>
              ). But he also co-founded a successful software company, worked as
              a software engineer, and data scientist—this included jobs at
              artificial intelligence and social media companies. Landon was
              always searching for answers. He was relentless in the pursuit of
              truth and knowledge. He spent the last few years of his life
              trying to better understand himself, his mind, and his place in
              the world. A few months before his death he started a second PhD,
              in Cognitive Science, at UC Boulder working on issues at the
              intersection of psychology and machine learning and returned to
              his childhood interest in chess programming. This page is to
              remember, and to pay tribute to his life and work. See also
              <a
                href="https://drive.google.com/file/d/1xblOZ9AsBylGa9GxF9s45rV20Fgba9JC/view?usp=sharing"
                className="text-blue-500 hover:underline"
              >
                {" "}
                the preface{" "}
              </a>
              for a special issue of the journal Discrete Mathematics in honor
              of Landon. And a notice from the American Mathematical Society
              here.)
            </p>
          </div>
        </div>

        <div>
          {interleavedArray.map((item, index) =>
            item.type === "photo" ? (
              <div className="card bg-base-300  hover:bg-black m-4">
                <div className="card-body">
                  <img
                    key={index}
                    src={item.src}
                    alt={index + 1}
                    className="rounded-lg max-w-lg"
                  />
                </div>
              </div>
            ) : (
              <MemoryCard key={index} memory={item} />
            )
          )}
        </div>
        {/* <div>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="rounded-md"
            />
          ))}
        </div>
        <div>
          {memoryData.map((memory, index) => (
            <MemoryCard key={index} memory={memory} />
          ))}
        </div> */}

        <div className="card bg-info m-4">
          <div className="card-body">
            <p className="text-xl ml-4 font-bold text-black">
              Landon's basic template for effective meditation
            </p>
            <ol className="text-lg ml-4 text-base-300">
              <li> 1: focus on the breath</li>
              <li> 2: smile and bring back focus when it strays </li>
              <li> 3: smile at your self-loathing for failing to focus</li>
              <li>
                4: smile at your self-congratulation for succeeding to focus
              </li>
              <li>
                5: smile at your self-loathing/self-congratulation for
                failing/succeeding to smile at your failure/succeeding to smile
                at your self-congratulation/self-loathing{" "}
              </li>
              <li>
                6: continue to meta-smile until you forget what you were smiling
                about{" "}
              </li>
              <li> 7: go back to the breath</li>
            </ol>
          </div>
        </div>
        <div className="card bg-warning m-4">
          <div className="card-body">
            <p className="text-xl ml-4 font-bold text-black">
              A few of his most important articles in mathematics are the
              following:
            </p>
            <ul className="text-lg ml-4 text-base-300 list-disc">
              <li className="ml-4">
                <a
                  href="https://drive.google.com/file/d/1RUEwQBWq8M0FBAdJxTEN_oBs3rjRoiSM/view?usp=drive_link"
                  className="hover:text-gray-600"
                >
                  “∆-Critical graphs with small high vertex cliques”
                </a>
                , Journal of Combinatorial Theory, 2012.
              </li>
              <li className="ml-4">
                “Planar graphs are 9/2-colorable”, Journal of Combinatorial
                Theory (2018) (with D. Cranston)
              </li>
              <li className="ml-4">
                “Improved lower bounds on the number of edges in list critical
                and online list critical graphs”, Journal of Combinatorial
                Theory, 2020. (with H. Kierstead)
              </li>
            </ul>
            <p className="text-lg ml-4 text-black font-bold">
              He also published work in philosophical logic including these:
            </p>
            <ul className="text-lg ml-4 text-base-300 list-disc">
              <li className="ml-4">
                “A simple solution to the hardest logic puzzle ever”, Analysis,
                2008.
              </li>
              <li className="ml-4">
                "Dangerous reference graphs and semantic paradoxes", Journal of
                Philosophical Logic, 2012.
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-gray-300 m-4">
          <div className="card-body">
            <p className="text-lg ml-4 text-base-300">
              {" "}
              The mathematical problem that occupied him for many years was the
              Borodin-Kostochka conjecture, on which he wrote his PhD
              dissertation. A "graph" is a collection of nodes, some of which
              are connected by edges. Graph coloring assigns a color to each
              node of a network so that any two nodes linked by an edge get
              different colors. It is easy to find a graph coloring: simply give
              each node its own color. Things get interesting when we ask how
              few different colors we can use. If D denotes the maximum number
              of nodes adjacent to any node in the graph, then it is simple to
              find a coloring that uses at most D+1 colors. The clique number of
              a graph is the largest size of a set of nodes that are pairwise
              linked by edges. Each coloring must use at least as many colors as
              the clique number, since all nodes in a clique must get distinct
              colors. In 1941, Brooks showed that every graph has a coloring
              with at most D colors, provided that D is at least 3, and that the
              clique number of G is at most D. In 1977,{" "}
              <a href="http://www.openproblemgarden.org/op/the_borodin_kostochka_conjecture">
                {" "}
                Borodin and Kostochka conjectured{" "}
              </a>{" "}
              that this upper bound could be improved: If G has maximum degree D
              at least 9, and has clique number at most D-1, then G has a
              coloring with at most D-1 colors. Landon helped prove various
              partial results toward the conjecture.
            </p>
          </div>

          <img
            src={require("./assets/graph.png")}
            alt="graph"
            className="rounded-lg max-w-sm"
          />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mb-2 px-4 bg-gray-100">
          <div className="card bg-gray-300">
            <div className="card-body">
              <p className="text-center text-black"></p>
            </div>
          </div>
        </div>
        <div className="mb-2 px-4 bg-gray-100">
          <div className="card bg-gray-300">
            <div className="card-body">
              <p className="text-center text-gray-300">
                "We are dissociated identities of mind-at-large in a shared
                dream. When I die, I will rejoin the stream of Mind. My death is
                just the dissolution of the dissociated complex of Mind that is
                me. At least, that's the current idea I am playing with. I find
                it useful to take on an idea for real, live it, and see how it
                goes -- a kind of 'sandboxing'."{" "}
              </p>
            </div>
          </div>
        </div>

        <img src={lwr_beach} alt="lwr_beach" className=" bg-gray-100 w-full" />
      </div>
    </main>
  );
};

export default LandonMemorial;
