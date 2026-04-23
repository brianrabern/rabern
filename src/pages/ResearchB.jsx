import React from "react";
import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { TbLambda } from "react-icons/tb";
import PublicationArticleList from "../components/PublicationArticleList";
import PublicationCardBooks from "../components/PublicationCardBooks";
import brianPublicationsData from "../components/brianPublicationsData.js";
import brianPublicationsDataBooks from "../components/brianPublicationsDataBooks.js";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiArxiv } from "react-icons/si";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const publicationsData = brianPublicationsData || [];
const publicationsDataBooks = brianPublicationsDataBooks || [];

const CV_URL = "/cv";

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [toggle, setToggle] = useState(false);

  function onToggleBooks(e) {
    setToggle(e.target.checked);
  }

  return (
    <main className="pb-12">
      <header className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <h1 className="font-mono text-2xl uppercase tracking-[0.1em] text-primary m-0">
          Research
        </h1>
        <Link
          to={CV_URL}
          className="font-mono text-[11px] uppercase tracking-wider inline-flex items-center w-fit px-3 py-2 rounded border border-base-300 text-base-content/70 hover:text-primary hover:border-primary/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          title="Curriculum vitae"
        >
          CV
        </Link>
      </header>

      <section className="console-panel p-4 sm:p-6 mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/mirror.png"
              alt=""
              className="w-16 h-16 rounded-full object-cover opacity-90 border border-base-300/60"
            />
            <div className="form-control flex flex-row items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-base-content/50">
                Articles
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={toggle}
                onChange={onToggleBooks}
                aria-label="Toggle books versus articles"
              />
              <span className="font-mono text-xs uppercase tracking-wider text-base-content/50">
                Books
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 justify-start sm:justify-end">
            <a
              aria-label="PhilPeople"
              title="PhilPeople"
              href="https://philpeople.org/profiles/brian-rabern"
              className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/70 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <svg
                height="18"
                viewBox="0 0 512 512"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
                aria-hidden="true"
              >
                <path
                  d="m281.1554 248.03682a68.31745 68.310912 0 0 0 28.96139-16.22382c19.80361-17.99355 29.70388-41.9537 29.70388-71.87698a117.70966 117.69839 0 0 0 -8.65195-45.64664 84.382038 84.373965 0 0 0 -24.70979-33.82228 78.394491 78.386985 0 0 0 -33.56475-16.467103h-67.72504v188.417963h29.70392c20.03854.0128 35.46585-1.44813 46.28279-4.3807zm68.33935-184.017582a104.474 104.464 0 0 1 20.68219 12.529589c28.71464 21.830411 43.07125 50.943873 43.07125 87.340863 0 37.00339-14.56143 64.09299-43.68424 81.27056-15.16131 8.89745-33.55994 14.25597-55.19425 16.07509-6.8808.60638-23.45971.90869-49.73588.90869h-59.40908v108.87378c0 20.61764 1.1634 35.93281 3.48982 45.9441a51.32811 51.323197 0 0 0 12.88432 24.70742 53.281079 53.275981 0 0 0 7.33363 6.3298h219.06749v-383.979892h-98.5057zm-220.75727 20.419027a49.650794 49.646039 0 0 0 -20.01319-18.043397 55.334247 55.328956 0 0 0 -5.73664-2.376053h-38.987647v383.981185h51.054657a53.251111 53.246016 0 0 0 7.33363-6.32981 49.087893 49.083199 0 0 0 12.99502-24.55993c2.22754-9.90063 3.34109-25.26388 3.34109-46.09289v-223.50113a269.16148 269.13573 0 0 0 -2.28355-40.1888 62.108937 62.102992 0 0 0 -7.70292-22.889594z"
                  strokeWidth=".067527"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              aria-label="Semantics Archive"
              title="Semantics Archive"
              href="https://semanticsarchive.net/cgi-bin/browse.pl?search=rabern"
              className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/70 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <TbLambda className="text-[18px]" aria-hidden />
            </a>
            <a
              aria-label="Google Scholar"
              title="Google Scholar"
              href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en"
              className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/70 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <SiGooglescholar className="text-[18px]" aria-hidden />
            </a>
            <a
              aria-label="arXiv"
              title="arXiv"
              href="https://arxiv.org/search/?query=rabern%2C+brian&searchtype=author"
              className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/70 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <SiArxiv className="text-[18px]" aria-hidden />
            </a>
            <a
              aria-label="Philosophy papers on GitHub"
              title="Philosophy papers on GitHub"
              href="https://github.com/brianrabern/philosophy-papers"
              className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/70 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <AiFillGithub className="text-[18px]" aria-hidden />
            </a>
            <a
              aria-label="BibTeX export"
              title="BibTeX export"
              href="https://philpapers.org/asearch.pl?start=0&showCategories=on&ap_c2=&filterMode=keywords&sort=pubYear&proOnly=on&sqc=&search_header=search_header.html&categorizerOn=&format=bib&searchStr=%40author+Brian+Rabern&subtitle=Papers+matching+%27%40author+Brian+Rabern%27&freeOnly=&filterByAreas=&limit=500&newWindow=&langFilter=&ap_c1=&onlineOnly=&publishedOnly=on&hideAbstracts=off&jlist=&ap_c1=&ap_c2="
              className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/70 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <Icon icon="file-icons:bibtex" className="text-[18px]" aria-hidden />
            </a>
            <a
              aria-label="Erdős number"
              title="Erdős number"
              href="https://mathscinet.ams.org/mathscinet/freetools/collab-dist?source=838572&target=189017"
              className="h-9 inline-flex items-center justify-center rounded border border-base-300 px-2.5 font-mono text-[10px] uppercase tracking-widest text-base-content/55 hover:text-warning hover:border-warning/40 hover:bg-warning/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              erdős
            </a>
          </div>
        </div>
      </section>

      {!toggle && (
        <>
          <h2 className="font-mono text-center text-[11px] uppercase tracking-[0.2em] text-base-content/50 mb-4">
            Articles
          </h2>
          <PublicationArticleList publications={publicationsData} />
        </>
      )}
      {toggle && (
        <>
          <h2 className="font-mono text-center text-[11px] uppercase tracking-[0.2em] text-base-content/50 mb-4">
            Books and edited volumes
          </h2>
          <div>
            {publicationsDataBooks.map((publication) => (
              <PublicationCardBooks
                key={publication.ID || publication.title}
                publication={publication}
              />
            ))}
          </div>
        </>
      )}

      <div className="mt-12 pt-8 border-t border-base-300/80">
        <div className="flex flex-wrap justify-center gap-2 mb-6 opacity-80">
          <img
            src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/black_graph.png"
            alt=""
            className="rounded-lg w-28"
          />
          <img
            src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/black_graph.png"
            alt=""
            className="rounded-lg w-28"
          />
          <img
            src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/black_graph.png"
            alt=""
            className="rounded-lg w-28"
          />
        </div>
        <blockquote className="console-panel px-4 py-3 text-center font-sans text-sm text-base-content/60 italic border-l-2 border-l-primary/60">
          We do not need more tools, we need hands to pick up the tools
        </blockquote>
      </div>

      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="text-base-content/45 hover:text-base-content/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-2"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Back to top"
        >
          <FaArrowAltCircleUp className="text-xl" />
        </button>
      </div>
    </main>
  );
};

export default Research;
