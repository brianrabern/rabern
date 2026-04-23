import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { Link } from "react-router-dom";
import bdr21a from "./bdr21a.jpeg";
import ActivityPanel from "../components/ActivityPanel.jsx";

export default function Home() {
  return (
    <main className="pb-12" lang="en">
      <div className="text-left pt-2 pb-6">
        <h1 className="font-mono text-2xl uppercase tracking-[0.1em] mb-0 text-primary">
          Brian Rabern
        </h1>
      </div>

      <div className="console-panel overflow-hidden max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[11rem_minmax(0,1fr)]">
          <aside className="flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-base-300 bg-base-200/25 shrink-0">
            <img
              src={bdr21a}
              alt="Brian Rabern"
              className="h-44 w-44 shrink-0 object-cover object-top md:h-auto md:w-full md:aspect-square"
            />
            <div className="flex flex-1 flex-row flex-wrap items-center justify-center gap-5 border-l border-base-300 px-4 py-3 text-2xl text-base-content/55 md:border-l-0 md:border-t md:px-3 md:py-3">
              <a
                href="https://github.com/brianrabern"
                className="hover:text-secondary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://linkedin.com/in/brian-rabern"
                className="hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en"
                className="hover:text-success focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                aria-label="Google Scholar"
              >
                <SiGooglescholar />
              </a>
            </div>
          </aside>
          <div className="min-w-0 p-4 sm:p-6">
            <p className="font-sans text-sm sm:text-base leading-relaxed text-base-content/65 m-0 text-justify hyphens-auto">
              I'm a software engineer specializing in LLM integrations and AI
              systems. Before moving into tech I spent a decade as a professor
              at the University of Edinburgh — officially a{" "}
              <a
                className="text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                href="https://en.wikipedia.org/wiki/Reader_(academic_rank)"
              >
                Reader
              </a>
              — where I published on logic, formal semantics, and philosophy.
              When time permits I still do research at the intersection of
              logic, philosophy, and AI, and am slowly working on a book about
              my favorite puzzles and paradoxes. I did my PhD at Australian
              National University and my BA and MA at University of Oregon and
              UC Boulder, respectively. When not in front of a computer, I enjoy
              yoga, hiking, camping, kayaking, and generally getting out into
              the mountains, rivers, and lakes of Oregon.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-left">
              <Link
                to="/cv"
                aria-label="CV"
                className="font-mono text-[11px] normal-case tracking-normal px-3 py-2 rounded border border-base-300 text-base-content/80 hover:border-primary/50 hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                cv
              </Link>
              <Link
                to="/resume"
                aria-label="Resume"
                className="font-mono text-[11px] normal-case tracking-normal px-3 py-2 rounded border border-base-300 text-base-content/80 hover:border-secondary/50 hover:text-secondary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                resume
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-7xl">
        <ActivityPanel />
      </div>
    </main>
  );
}
