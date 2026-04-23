import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import landonMemorialData from "../components/landonMemorialData.js";
import graphs_header2 from "./assets/graphs_header2.png";
import lwr_beach from "./assets/lwr_beach.jpg";
import MemoryCard from "../components/MemoryCard.jsx";
import LandonSubnav from "../components/LandonSubnav.jsx";
import GraphMotifBackdrop from "../components/GraphMotifBackdrop.jsx";
import {
  landonSurface as surface,
  landonSurfaceNoBorder as surfaceNoBorder,
  landonIconBtn as iconBtn,
  landonLink as linkCls,
  landonColumn,
} from "../landon/landonShared.js";

const memories = landonMemorialData || [];
const PHOTOBOXSIZE = 27;
const memorialPhotos = [];

for (let i = 1; i <= PHOTOBOXSIZE; i++) {
  memorialPhotos.push(require(`./assets/memorialPhotos/photo${i}.jpeg`));
}

const carouselChrome =
  "rounded-2xl border border-base-300 bg-base-200/25 backdrop-blur-sm p-3 sm:p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary/45";

/** Inside a striped `surface` card — no outer border (parent provides frame) */
const carouselChromeEmbedded =
  "rounded-xl bg-base-200/20 p-3 sm:p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary/45";

function LandonCarouselShell({
  ariaLabel,
  prevAria,
  nextAria,
  index,
  n,
  prev,
  next,
  children,
  className = "",
  embedded = false,
}) {
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  if (n === 0) return null;

  const chrome = embedded ? carouselChromeEmbedded : carouselChrome;

  return (
    <div className={className}>
      <div
        className={chrome}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
      >
        {children}
        <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            className={iconBtn}
            aria-label={prevAria}
            onClick={prev}
          >
            <IoChevronBack className="text-lg" aria-hidden />
          </button>
          <p
            className="font-mono text-xs sm:text-sm text-base-content/70 m-0 min-w-[5.5rem] text-center tabular-nums"
            aria-live="polite"
          >
            {index + 1} / {n}
          </p>
          <button
            type="button"
            className={iconBtn}
            aria-label={nextAria}
            onClick={next}
          >
            <IoChevronForward className="text-lg" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

function LandonPhotoCarousel({ photos, className = "", embedded = false }) {
  const [index, setIndex] = useState(0);
  const n = photos.length;
  const prev = useCallback(
    () => setIndex((x) => (x - 1 + n) % n),
    [n]
  );
  const next = useCallback(() => setIndex((x) => (x + 1) % n), [n]);

  return (
    <LandonCarouselShell
      className={className}
      embedded={embedded}
      ariaLabel="Memorial photographs"
      prevAria="Previous photograph"
      nextAria="Next photograph"
      index={index}
      n={n}
      prev={prev}
      next={next}
    >
        <div className="aspect-[4/3] max-h-[min(52vh,22rem)] sm:max-h-[min(60vh,26rem)] mx-auto rounded-xl overflow-hidden bg-base-300/30 border border-base-300">
        <img
          src={photos[index]}
          alt={`Memorial photograph ${index + 1} of ${n}`}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </LandonCarouselShell>
  );
}

function LandonMemoryCarousel({ items, className = "", embedded = false }) {
  const [index, setIndex] = useState(0);
  const n = items.length;
  const prev = useCallback(
    () => setIndex((x) => (x - 1 + n) % n),
    [n]
  );
  const next = useCallback(() => setIndex((x) => (x + 1) % n), [n]);

  return (
    <LandonCarouselShell
      className={className}
      embedded={embedded}
      ariaLabel="Memories from friends and colleagues"
      prevAria="Previous memory"
      nextAria="Next memory"
      index={index}
      n={n}
      prev={prev}
      next={next}
    >
      <div className="max-h-[min(70vh,32rem)] overflow-y-auto overscroll-y-contain rounded-xl border border-base-300 bg-base-300/25 px-4 py-4 sm:px-6 sm:py-5">
        <MemoryCard
          memory={items[index]}
          className="border-0 bg-transparent shadow-none backdrop-blur-none px-0 py-0 hover:border-transparent"
        />
      </div>
    </LandonCarouselShell>
  );
}

const eyebrow =
  "font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary/75 mb-3";

const eyebrowSecondary =
  "font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-secondary mb-3";

const eyebrowInfo =
  "font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-info mb-3";

const LandonMemorial = () => {
  return (
    <main
      data-theme="console"
      className="relative min-h-screen overflow-x-hidden bg-base-100 text-base-content antialiased"
    >
      <GraphMotifBackdrop />
      <div className="relative z-[1]">
        <LandonSubnav />

        <div className={`${landonColumn} pb-20 pt-2`}>
        {/* Article title (Wikipedia-style masthead) */}
        <header className="mb-8 border-b border-base-300 pb-3">
          <h1 className="text-[1.65rem] sm:text-[2rem] font-normal text-base-content m-0 leading-tight tracking-tight">
            Landon Rabern
          </h1>
          <p className="text-sm text-base-content/65 m-0 mt-2">
            (May 7, 1981 – October 19, 2020)
          </p>
        </header>

        {/* Biography — graph strip + lead with thumbnail (Wikipedia-style) */}
        <section
          className={`${surfaceNoBorder} overflow-hidden pt-5 sm:pt-6 mb-12`}
          lang="en"
          aria-label="Biography"
        >
          <a
            href="https://landon.github.io/#data"
            className="block bg-base-200/35 transition-colors hover:bg-base-200/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/45"
            aria-label="Graph diagrams on Landon Rabern's website (opens external site)"
          >
            <img
              src={graphs_header2}
              alt=""
              className="block h-auto w-full rounded-xl opacity-95"
            />
          </a>
          <div className="flow-root px-5 sm:px-8 py-5 sm:py-8 text-[15px] sm:text-base text-base-content/88 leading-[1.65] text-justify">
            <figure className="float-none sm:float-right clear-right mx-auto sm:mx-0 mb-4 sm:mb-2 sm:ml-4 w-full max-w-[200px] sm:max-w-[220px] shrink-0 bg-base-200/50 p-2 rounded-lg">
              <img
                src={require("./assets/LWR.jpeg")}
                alt="Landon Rabern"
                className="block w-full h-auto object-cover aspect-[4/5] rounded-md"
              />
            </figure>
            <p className="m-0 mb-5 text-pretty">
              Landon Rabern (May 07, 1981 - October 19, 2020) was a
              mathematician and software engineer. He was most well-known for
              his work on the Borodin-Kostochka conjecture and related topics in
              graph theory.
            </p>
            <p className="m-0 mb-5 text-pretty">
              Landon was born and raised in Roseburg, Oregon. As a child he
              developed a deep interest in computers, machine intelligence, and
              science fiction. Starting in the 1980s with a Commodore 64, and
              making simple programs in BASIC, then Pascal, C, and so on, he
              taught himself how to code. In high school he programmed a chess
              AI (codenamed &ldquo;Betsy&rdquo;) and experimented with using neural
              networks. This program has been credited as the first published
              chess engine able to play Fischer Random Chess (see{" "}
              <a
                href="https://www.chessprogramming.org/Landon_Rabern"
                className={linkCls}
              >
                here
              </a>
              ). He went on to study mathematics and computer science at
              Washington University in St. Louis, spending a year abroad in the
              Netherlands, and then earning a Masters degree in Mathematics at
              UC Santa Barbara. After a few years working as a software
              engineer, and while working on graph theory &ldquo;on the side&rdquo; he
              proved a conjecture of some prominent mathematicians. He went to
              Arizona State to work with one of them (
              <a
                href="https://landon.github.io/content/hal/5minutes.html"
                className={linkCls}
              >
                Hal Kierstead
              </a>
              ) and finish his PhD (see{" "}
              <a
                href="https://drive.google.com/file/d/1864HooDOyEpQaEGlmZXMxLLOP3Jx_xcw/view?usp=sharing"
                className={linkCls}
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
              called &ldquo;thinking&rdquo; the latter &ldquo;making things&rdquo;). He taught math as a
              university professor, and published numerous articles on topics in
              discrete mathematics and combinatorics (see his{" "}
              <Link to="/landon/research" className={linkCls}>
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
                className={linkCls}
              >
                {" "}
                the preface{" "}
              </a>
              for a special issue of the journal Discrete Mathematics in honor
              of Landon, and{" "}
              <a
                href="https://philpapers.org/archive/RABSII.pdf"
                className={linkCls}
              >
                an introduction to that special issue (PDF)
              </a>
              . And a notice from the American Mathematical Society
              here.) A short biography of his life and work appears on{" "}
              <a
                href="https://en.wikipedia.org/wiki/Landon_Rabern"
                className={linkCls}
              >
                Wikipedia
              </a>
              .
            </p>
          </div>
        </section>

        {/* Memories — carousel; secondary stripe (graph-coloring theme) */}
        <section
          className={`${surface} p-5 sm:p-7 mb-10 border-l-2 border-l-secondary`}
          aria-label="Memories from friends and colleagues"
        >
          <p className={eyebrowSecondary}>Memories</p>
          <LandonMemoryCarousel items={memories} embedded />
        </section>

        {/* Photographs — carousel; info stripe */}
        <section
          className={`${surface} p-5 sm:p-7 mb-10 border-l-2 border-l-info`}
          aria-label="Photograph gallery"
        >
          <p className={eyebrowInfo}>Photographs</p>
          <LandonPhotoCarousel photos={memorialPhotos} embedded />
        </section>

        {/* Meditation */}
        <section className={`${surface} p-5 sm:p-7 mb-10 border-l-2 border-l-primary`}>
          <p className={eyebrow}>Meditation</p>
          <h2 className="text-base sm:text-lg font-semibold text-base-content m-0 mb-4 tracking-tight">
            Landon&apos;s basic template for effective meditation
          </h2>
          <ol className="text-sm sm:text-[15px] text-base-content/88 list-decimal pl-5 sm:pl-6 space-y-2.5 m-0 marker:text-primary/80">
            <li>focus on the breath</li>
            <li>smile and bring back focus when it strays</li>
            <li>smile at your self-loathing for failing to focus</li>
            <li>
              smile at your self-congratulation for succeeding to focus
            </li>
            <li>
              smile at your self-loathing/self-congratulation for
              failing/succeeding to smile at your failure/succeeding to smile
              at your self-congratulation/self-loathing
            </li>
            <li>
              continue to meta-smile until you forget what you were smiling
              about
            </li>
            <li>go back to the breath</li>
          </ol>
        </section>

        {/* Publications + Borodin–Kostochka (primer in expander) */}
        <section
          className={`${surface} p-5 sm:p-7 mb-10 border-l-2 border-l-warning`}
          aria-label="Publications and mathematical background"
        >
          <p className={eyebrow}>Research</p>
          <h2 className="text-base sm:text-lg font-semibold text-base-content/90 m-0 mb-4 tracking-tight">
            A few of his most important articles in mathematics are the
            following:
          </h2>
          <ul className="text-sm sm:text-[15px] text-base-content/88 list-disc pl-5 sm:pl-6 space-y-2.5 m-0 mb-6">
            <li>
              <a
                href="https://drive.google.com/file/d/1RUEwQBWq8M0FBAdJxTEN_oBs3rjRoiSM/view?usp=drive_link"
                className={`${linkCls} text-info`}
              >
                &ldquo;∆-Critical graphs with small high vertex cliques&rdquo;
              </a>
              , Journal of Combinatorial Theory, 2012.
            </li>
            <li>
              &ldquo;Planar graphs are 9/2-colorable&rdquo;, Journal of Combinatorial
              Theory (2018) (with D. Cranston)
            </li>
            <li>
              &ldquo;Improved lower bounds on the number of edges in list critical
              and online list critical graphs&rdquo;, Journal of Combinatorial
              Theory, 2020. (with H. Kierstead)
            </li>
          </ul>
          <h3 className="text-sm sm:text-base font-semibold text-base-content m-0 mb-3">
            He also published work in philosophical logic including these:
          </h3>
          <ul className="text-sm sm:text-[15px] text-base-content/88 list-disc pl-5 sm:pl-6 space-y-2.5 m-0 mb-8">
            <li>
              &ldquo;A simple solution to the hardest logic puzzle ever&rdquo;, Analysis,
              2008.
            </li>
            <li>
              &ldquo;Dangerous reference graphs and semantic paradoxes&rdquo;, Journal of
              Philosophical Logic, 2012.
            </li>
          </ul>

          <div className="border-t border-base-300 pt-6">
            <h3 className="text-sm sm:text-base font-semibold text-base-content m-0 mb-2 tracking-tight">
              Borodin–Kostochka conjecture
            </h3>
            <p className="text-sm sm:text-[15px] text-base-content/88 leading-[1.65] m-0 text-pretty mb-3">
              The mathematical problem that occupied him for many years was the
              Borodin-Kostochka conjecture, on which he wrote his PhD
              dissertation.
            </p>
            <details className="group rounded-xl border border-base-300 bg-base-300/20 open:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
              <summary className="cursor-pointer list-none px-4 py-3 font-mono text-xs sm:text-sm text-primary hover:text-primary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl [&::-webkit-details-marker]:hidden flex items-center gap-2">
                <span
                  className="inline-block transition-transform group-open:rotate-90 text-primary/80"
                  aria-hidden
                >
                  ▸
                </span>
                <span>
                  Expand: primer on graph coloring &amp; the conjecture
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0 border-t border-base-300">
                <div className="pt-4 flex flex-col gap-8">
                  <p className="text-sm sm:text-[15px] text-base-content/88 leading-[1.65] m-0 text-pretty">
                    A &ldquo;graph&rdquo; is a collection of nodes, some of which are
                    connected by edges. Graph coloring assigns a color to each
                    node of a network so that any two nodes linked by an edge get
                    different colors. It is easy to find a graph coloring:
                    simply give each node its own color. Things get interesting
                    when we ask how few different colors we can use. If D denotes
                    the maximum number of nodes adjacent to any node in the
                    graph, then it is simple to find a coloring that uses at most
                    D+1 colors. The clique number of a graph is the largest size
                    of a set of nodes that are pairwise linked by edges. Each
                    coloring must use at least as many colors as the clique
                    number, since all nodes in a clique must get distinct colors.
                    In 1941, Brooks showed that every graph has a coloring with
                    at most D colors, provided that D is at least 3, and that the
                    clique number of G is at most D. In 1977,{" "}
                    <a
                      href="http://www.openproblemgarden.org/op/the_borodin_kostochka_conjecture"
                      className={linkCls}
                    >
                      Borodin and Kostochka conjectured
                    </a>{" "}
                    that this upper bound could be improved: If G has maximum
                    degree D at least 9, and has clique number at most D-1, then
                    G has a coloring with at most D-1 colors. Landon helped prove
                    various partial results toward the conjecture.
                  </p>
                  <figure className="m-0 flex justify-center border-t border-base-300 pt-8">
                    <img
                      src={require("./assets/graph.png")}
                      alt="Graph diagram: four nodes with distinct colors and connecting edges"
                      className="rounded-xl max-w-[260px] w-full border border-base-300 bg-base-300/20"
                    />
                  </figure>
                </div>
              </div>
            </details>
          </div>
        </section>
        </div>

        {/* Quote (camouflaged) + beach */}
        <div className="border-t border-base-300 bg-base-200/20">
        <div className={`${landonColumn} pt-10 pb-6 sm:pt-12 sm:pb-8`}>
          <p className="landon-memorial-dream-quote text-center font-sans text-sm sm:text-[15px] leading-relaxed m-0 italic">
            &ldquo;We are dissociated identities of mind-at-large in a shared
            dream. When I die, I will rejoin the stream of Mind. My death is
            just the dissolution of the dissociated complex of Mind that is
            me. At least, that&apos;s the current idea I am playing with. I find
            it useful to take on an idea for real, live it, and see how it
            goes -- a kind of &lsquo;sandboxing&rsquo;.&rdquo;
          </p>
        </div>
        <div
          className={`${landonColumn} max-h-[min(32vh,18rem)] sm:max-h-[min(36vh,20rem)] overflow-hidden rounded-t-xl`}
        >
          <img
            src={lwr_beach}
            alt=""
            className="w-full h-full min-h-[10rem] sm:min-h-[11rem] object-cover object-[center_38%] opacity-95"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
        </div>
      </div>
    </main>
  );
};

export default LandonMemorial;
