import React from "react";
import PublicationArticleList from "../components/PublicationArticleList.jsx";
import landonPublicationsData from "../components/landonPublicationsData.js";
import graphs_header2 from "./assets/graphs_header2.png";
import lwr_beach from "./assets/lwr_beach.jpg";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiArxiv } from "react-icons/si";
import { Icon } from "@iconify/react";
import LandonSubnav from "../components/LandonSubnav.jsx";
import GraphMotifBackdrop from "../components/GraphMotifBackdrop.jsx";
import {
  landonSurface,
  landonIconBtn,
  landonColumn,
} from "../landon/landonShared.js";

const publicationsData = landonPublicationsData || [];

const LandonResearch = () => {
  return (
    <main
      data-theme="console"
      className="relative min-h-screen overflow-x-hidden bg-base-100 text-base-content antialiased"
    >
      <GraphMotifBackdrop />
      <div className="relative z-[1]">
        <LandonSubnav />
        <div className={`${landonColumn} pb-16 pt-2 sm:pb-20 sm:pt-4`}>
          <header className="mb-8 border-b border-base-300 pb-3 text-center">
            <h1 className="m-0 text-[1.65rem] font-normal leading-tight tracking-tight text-base-content sm:text-[2rem]">
              Landon Rabern Bibliography
            </h1>
          </header>

          <div className={`${landonSurface} mb-8 overflow-hidden`}>
            <div className="p-4 sm:p-6">
              <a
                href="https://landon.github.io/#data"
                className="block overflow-hidden rounded-xl transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <img
                  src={graphs_header2}
                  alt="graphs"
                  className="w-full rounded-xl"
                />
              </a>
            </div>

            <div className="mb-4 flex flex-wrap justify-center gap-3 px-4 pb-4">
              <a
                href="https://arxiv.org/search/?query=rabern&searchtype=author"
                className={landonIconBtn}
                aria-label="arXiv search"
              >
                <SiArxiv className="text-2xl" />
              </a>
              <a
                href="https://github.com/landon"
                className={landonIconBtn}
                aria-label="GitHub"
              >
                <AiFillGithub className="text-2xl" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=aZg5kIEAAAAJ&hl=en"
                className={landonIconBtn}
                aria-label="Google Scholar"
              >
                <SiGooglescholar className="text-2xl" />
              </a>
              <a
                href="/landon-pubs.txt"
                className={`${landonIconBtn} inline-flex items-center justify-center`}
                download
                aria-label="Download BibTeX"
              >
                <Icon icon="file-icons:bibtex" className="text-2xl" />
              </a>
            </div>
          </div>

          <PublicationArticleList publications={publicationsData} />
        </div>

        <div className="border-t border-base-300 bg-base-200/20">
          <div className={`${landonColumn} pt-6 sm:pt-8`}>
            <div className="mb-4">
              <div className={`${landonSurface} p-4 sm:p-6`}>
                <p className="m-0 text-center font-sans text-sm leading-relaxed text-base-content/90 sm:text-base">
                  &ldquo;We do not need more tools, we need hands to pick up the
                  tools&rdquo;
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className={`${landonSurface} bg-base-300/15 p-4 sm:p-6`}>
                <p className="m-0 text-center font-sans text-sm leading-relaxed text-base-content/88 sm:text-base">
                  &ldquo;Formalism. formalism! give us our formalism, for our minds
                  are weak and our vision poor.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${landonColumn} grid grid-cols-1 gap-3 pb-6 sm:grid-cols-2 sm:gap-4 sm:pb-8`}
          >
            <div className={`${landonSurface} font-mono text-xs text-base-content/80`}>
              <div className="p-3 sm:p-4">
                <code className="break-all text-xs">
                  public Delegate Turtle Turtle(Turtle turtle);
                </code>
              </div>
            </div>
            <div className={`${landonSurface} font-mono text-xs text-base-content/80`}>
              <div className="p-3 sm:p-4">
                <code className="break-all text-xs">
                  public Delegate Turtle Turtle(Turtle turtle);
                </code>
              </div>
            </div>
          </div>

          <div
            className={`${landonColumn} max-h-[min(32vh,18rem)] overflow-hidden rounded-t-xl sm:max-h-[min(36vh,20rem)]`}
          >
            <img
              src={lwr_beach}
              alt=""
              className="h-full min-h-[10rem] w-full object-cover object-[center_38%] opacity-95 sm:min-h-[11rem]"
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

export default LandonResearch;
