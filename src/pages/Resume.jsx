import React from "react";
import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaArrowAltCircleUp } from "react-icons/fa";

const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1SCT18ElauYOqbQuIJ9mCTvSd9Ze3HCIl/view?usp=sharing";

const sectionTitle =
  "font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70 mb-4 pb-2 border-b border-base-300/50";

const jobBlock = "mb-10 last:mb-0";

const jobHead =
  "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6";

const jobTitle =
  "font-sans text-base font-semibold text-base-content tracking-tight";

const jobWhen =
  "font-mono text-[11px] text-primary/90 tabular-nums shrink-0";

const bullets =
  "mt-3 list-none space-y-2.5 pl-0 text-sm text-base-content/70 leading-[1.65]";

const bulletItem =
  "relative pl-4 before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2 before:bg-primary/35";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pb-12">
      <div className="console-panel max-w-3xl mx-auto px-6 py-10 sm:px-11 sm:py-12 font-sans text-sm text-base-content/80 leading-relaxed">
        <header className="mb-10 pb-8 border-b border-base-300/40">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <h1 className="font-mono text-2xl uppercase tracking-wide text-primary m-0">
              Brian Rabern
            </h1>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-base-content/45 hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1 py-0.5 shrink-0"
            >
              PDF (Drive)
            </a>
          </div>
          <div className="font-mono text-xs text-base-content/50 space-y-0.5">
            <p className="m-0">
              <a
                href="mailto:brian.rabern@gmail.com"
                className="hover:text-primary hover:underline"
              >
                brian.rabern@gmail.com
              </a>
              <span className="text-base-content/35"> · </span>
              <a
                href="tel:+15415304337"
                className="hover:text-primary hover:underline"
              >
                541-530-4337
              </a>
            </p>
            <p className="m-0">
              <a
                href="https://brianrabern.net/"
                className="hover:text-primary hover:underline"
              >
                brianrabern.net
              </a>
              <span className="text-base-content/35"> · </span>
              Bend, OR
            </p>
          </div>

          <div className="flex gap-4 text-xl mt-6">
            <a
              href="https://linkedin.com/in/brian-rabern"
              className="text-base-content/50 hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/brianrabern"
              className="text-base-content/50 hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
          </div>
        </header>

        <section className="mb-10">
          <h2 className={sectionTitle}>About</h2>
          <p className="m-0 max-w-prose text-base-content/75 leading-[1.7]">
            I offer a unique mix of interpersonal, technical, and analytical
            skills, built through hands-on AI system development and a decade of
            research in philosophy and logic.
          </p>
        </section>

        <section className="mb-10">
          <h2 className={sectionTitle}>Technical skills</h2>
          <p className="m-0 rounded-md border border-base-300/60 bg-base-200/30 px-4 py-3.5 text-sm text-base-content/75 leading-snug">
            Python, TypeScript, SQL, Git, AWS, LLMs (prompt design, evaluation,
            agents)
          </p>
        </section>

        <section className="mb-10">
          <h2 className={sectionTitle}>Professional experience</h2>

          <div className={jobBlock}>
            <div className={jobHead}>
              <h3 className={`${jobTitle} m-0`}>
                Senior Software Engineer, Niche AI
              </h3>
              <p className={`${jobWhen} m-0`}>2025–now</p>
            </div>
            <ul className={bullets}>
              <li className={bulletItem}>
                Owned system prompts and behavioral rules for production Voice
                AI agents, iterating on failures to improve reliability, safety,
                and policy compliance.
              </li>
              <li className={bulletItem}>
                Designed multi-step and meta-prompt workflows, including agent
                handoffs and context injection from business data and live
                services.
              </li>
              <li className={bulletItem}>
                Built backend systems and integrations supporting agent
                workflows, tool use, evaluation, and deployment.
              </li>
            </ul>
          </div>

          <div className={jobBlock}>
            <div className={jobHead}>
              <div>
                <h3 className={`${jobTitle} m-0`}>
                  AI Expert Contributor, Snorkel AI
                </h3>
                <p className="m-0 mt-1 text-xs font-normal text-base-content/50">
                  6-month contract
                </p>
              </div>
              <p className={`${jobWhen} m-0 sm:text-right`}>2025</p>
            </div>
            <ul className={bullets}>
              <li className={bulletItem}>
                Applied expertise in philosophy, logic, and linguistics to
                develop a specialized evaluation benchmark for language models.
              </li>
            </ul>
          </div>

          <div className={jobBlock}>
            <div className={jobHead}>
              <h3 className={`${jobTitle} m-0`}>
                Software Engineer, GraphFM, Inc.
              </h3>
              <p className={`${jobWhen} m-0`}>2023–2025</p>
            </div>
            <ul className={bullets}>
              <li className={bulletItem}>
                Built scalable Python/FastAPI backends with integrations to AWS
                services (Lambda, S3, EC2) and third-party APIs, emphasizing
                reliability, maintainability, and thorough testing.
              </li>
              <li className={bulletItem}>
                Developed LLM-powered pipelines for document ingestion,
                summarization, and knowledge extraction, including prompt design,
                agent orchestration, and output evaluation.
              </li>
            </ul>
          </div>

          <div className={jobBlock}>
            <div className={jobHead}>
              <h3 className={`${jobTitle} m-0`}>
                Software Engineer, Elogic, Ltd.
              </h3>
              <p className={`${jobWhen} m-0`}>2019–2023</p>
            </div>
            <ul className={bullets}>
              <li className={bulletItem}>
                Developed a web application for teaching first-order logic
                employing React, TypeScript, Tailwind, Python, Firebase, and
                Google Cloud.
              </li>
              <li className={bulletItem}>
                Leveraged Z3 API with Python to verify logical equivalence and
                produce models.
              </li>
            </ul>
          </div>

          <div className={jobBlock}>
            <div className={jobHead}>
              <h3 className={`${jobTitle} m-0`}>
                Professor, University of Edinburgh
              </h3>
              <p className={`${jobWhen} m-0`}>2013–2023</p>
            </div>
            <ul className={bullets}>
              <li className={bulletItem}>
                Published 30+ peer-reviewed articles across logic, ethics, and
                linguistics; taught courses from formal semantics to AI ethics.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className={sectionTitle}>Education</h2>
          <div className={jobBlock}>
            <div className={jobHead}>
              <h3 className={`${jobTitle} m-0`}>
                Australian National University, PhD
              </h3>
              <p className={`${jobWhen} m-0`}>2012</p>
            </div>
            <ul className={bullets}>
              <li className={bulletItem}>
                Philosophy with specialization in formal semantics and logic
              </li>
              <li className={bulletItem}>Supervisor: David Chalmers</li>
            </ul>
          </div>
          <p className="m-0 font-sans text-base font-semibold text-base-content">
            University of Colorado Boulder (MA); University of Oregon (BA)
          </p>
        </section>
      </div>

      <div className="flex justify-center mt-8">
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

export default Resume;
