import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const featured = [
  {
    title: "LogicSkills",
    blurb: "Dataset and benchmark for AI reasoning.",
    tags: ["Python", "benchmark"],
    github: "https://github.com/brianrabern/LogicSkills",
  },
  {
    title: "symbolify_it",
    blurb: "Interactive symbolization exercises (predicate + propositional logic).",
    tags: ["TypeScript", "React", "Z3"],
    live: "https://symbolizations.vercel.app/",
    github: "https://github.com/brianrabern/symbolify_it",
  },
  {
    title: "VennSynSem (notebook)",
    blurb: "Formal syntax + compositional semantics for Venn diagrams.",
    tags: ["Python", "Jupyter"],
    live: "https://brianrabern.github.io/VennSynSem/index.html",
    github: "https://github.com/brianrabern/VennSynSem",
  },
  {
    title: "graph-num",
    blurb: "Graph number playground.",
    tags: ["web"],
    live: "https://graph-num.vercel.app/",
  },
  {
    title: "tractatusSky",
    blurb: "Posts the Tractatus to Bluesky preserving nested structure.",
    tags: ["Python", "Bluesky"],
    live: "https://bsky.app/profile/tractatussky.bsky.social",
    github: "https://github.com/brianrabern/tractatusSky",
  },
  {
    title: "∃Logic",
    blurb: "Web app for teaching first-order logic exercises with autograding.",
    tags: ["TypeScript", "React", "Firebase"],
    live: "https://info.elogic.land/",
    github: "https://github.com/brianrabern/elogic",
  },
  {
    title: "philfacts bot",
    blurb:
      "A Wikidata+LLM bot that posts random philosophy facts to Bluesky (SPARQL → RDF → LLM → atproto).",
    tags: ["Python", "Wikidata", "LLM", "Bluesky"],
    live: "https://bsky.app/profile/philfacts.bsky.social",
    github:
      "https://github.com/brianrabern?tab=repositories&q=philfacts&type=&language=&sort=",
  },
  {
    title: "MU Playground",
    blurb: "Hofstadter’s MU proof system playground.",
    tags: ["React"],
    live: "https://mu-playground.brianrabern.net/",
  },
];

const actionBtn =
  "inline-flex h-8 min-h-8 shrink-0 items-center justify-center gap-1 rounded-lg border px-2.5 font-mono text-[10px] font-medium uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

const Coding = () => {
  return (
    <main className="pb-12">
      <header className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-mono text-2xl uppercase tracking-[0.1em] text-primary">
            Code projects
          </h1>
          <p className="mt-2 font-sans text-sm text-base-content/60 max-w-2xl">
            A few things you can try in the browser. For all public projects,
            see{" "}
            <a
              href="https://github.com/brianrabern"
              className="text-base-content/70 hover:text-primary underline-offset-2 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/brianrabern"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider self-start px-3 py-2 rounded border border-base-300 text-base-content/70 hover:text-primary hover:border-primary/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            title="GitHub profile"
          >
            <FaGithub aria-hidden />
            GitHub
          </a>
          <Link
            to="/resume"
            className="font-mono text-[11px] uppercase tracking-wider self-start px-3 py-2 rounded border border-secondary/40 text-secondary hover:bg-secondary/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Resume
          </Link>
        </div>
      </header>

      <ul className="divide-y divide-base-300 border border-base-300 rounded-md overflow-hidden bg-base-200/40">
        {featured.map((p) => (
          <li
            key={p.title}
            className="bg-base-100/40 hover:bg-base-100/70 transition-colors"
          >
            <div className="flex flex-col gap-2 p-3 sm:p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0 flex-1">
                <p className="font-sans text-base font-medium text-base-content m-0">
                  {p.title}
                </p>
                <p className="font-sans text-sm text-base-content/60 mt-1 mb-0">
                  {p.blurb}
                </p>
                {p.tags?.length ? (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {p.tags.map((t) => (
                      <span
                        key={`${p.title}-${t}`}
                        className="inline-flex items-center rounded border border-base-300 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-base-content/55 bg-base-100/25"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {p.live ? (
                  <a
                    href={p.live}
                    className={`${actionBtn} border-base-300 bg-base-100/25 text-base-content no-underline hover:border-primary/70 hover:bg-base-200/40`}
                    title="Open"
                  >
                    <AiOutlineLink className="text-base opacity-90" aria-hidden />
                    OPEN
                  </a>
                ) : null}
                {p.github ? (
                  <a
                    href={p.github}
                    className={`${actionBtn} border-base-300 bg-base-100/25 text-base-content no-underline hover:border-primary/70 hover:bg-base-200/40`}
                    title="GitHub"
                  >
                    <FaGithub className="text-base opacity-90" aria-hidden />
                    CODE
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Coding;
