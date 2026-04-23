import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaExternalLinkAlt } from "react-icons/fa";

function DocFrame({ title, src, backTo, backLabel }) {
  return (
    <main className="pb-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
        <div className="min-w-0">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-base-content/50 hover:text-base-content/80 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          >
            <FaArrowAltCircleLeft aria-hidden />
            {backLabel}
          </Link>
          <h1 className="mt-3 font-mono text-2xl uppercase tracking-[0.1em] text-primary m-0">
            {title}
          </h1>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider self-start px-3 py-2 rounded border border-base-300 text-base-content/70 hover:text-primary hover:border-primary/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          title="Open standalone"
        >
          <FaExternalLinkAlt aria-hidden className="text-[11px]" />
          Open
        </a>
      </div>

      <div className="console-panel overflow-hidden border border-base-300/70">
        <iframe
          title={title}
          src={src}
          className="w-full h-[min(84vh,64rem)] bg-base-100"
        />
      </div>
    </main>
  );
}

export function AcademicCv() {
  return (
    <DocFrame
      title="CV"
      src="/docs/brian_academic.html"
      backTo="/research"
      backLabel="Back to research"
    />
  );
}

export function TechResume() {
  return (
    <DocFrame
      title="Resume"
      src="/docs/brian_tech.html"
      backTo="/coding"
      backLabel="Back to coding"
    />
  );
}

