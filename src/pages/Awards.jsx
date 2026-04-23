import awardData from "../components/awardData.js";
import { Link } from "react-router-dom";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";

const awards = awardData || [];

const Awards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [idx, setIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const total = awards.length;

  const current = useMemo(() => {
    if (!total) return null;
    const safe = Math.min(Math.max(idx, 0), total - 1);
    return awards[safe];
  }, [idx, total]);

  useEffect(() => {
    if (!total) return;
    setIdx((i) => Math.min(Math.max(i, 0), total - 1));
  }, [total]);

  const goPrev = () => setIdx((i) => (total ? (i - 1 + total) % total : 0));
  const goNext = () => setIdx((i) => (total ? (i + 1) % total : 0));

  return (
    <main className="pb-12 mt-2">
      <Link
        to="/talking"
        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-base-content/50 hover:text-base-content/80 mb-8 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
      >
        <FaArrowAltCircleLeft aria-hidden />
        Back to talking
      </Link>

      <h1 className="font-mono text-2xl uppercase tracking-[0.1em] text-center text-primary mb-2">
        Teaching award nominations
      </h1>
      <p className="text-center font-sans text-sm text-base-content/50 mb-8 max-w-3xl mx-auto">
        <span className="badge badge-outline badge-sm font-mono text-[10px]">
          Awarded: Outstanding Innovation in Digital Teaching, 2020–21,
          University of Edinburgh
        </span>
      </p>

      <section className="console-panel p-4 sm:p-5 mb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/45 m-0">
              Nominations
            </p>
            <p className="font-mono text-[10px] text-base-content/40 mt-1 mb-0">
              {total ? `${idx + 1} / ${total}` : "—"}
            </p>
          </div>
          <button
            type="button"
            className="font-mono text-[10px] uppercase tracking-widest self-start sm:self-auto px-2.5 py-1.5 rounded border border-base-300 text-base-content/55 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0"
            onClick={() => setShowAll((v) => !v)}
            aria-pressed={showAll}
          >
            {showAll ? "Hide all" : "View all"}
          </button>
        </div>

        {!showAll ? (
          <div
            className="mt-4"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") goPrev();
              if (e.key === "ArrowRight") goNext();
            }}
            aria-label="Award nomination carousel. Use left and right arrow keys."
          >
            {current ? (
              <article className="border border-base-300 rounded-md overflow-hidden bg-base-100/30">
                <div className="flex items-center justify-between gap-3 p-3 border-b border-base-300 bg-base-200/30">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/45 m-0">
                      {current.year}
                    </p>
                    <p className="font-mono text-[10px] text-base-content/55 mt-1 mb-0">
                      <span className="inline-flex items-center rounded border border-base-300 px-2 py-0.5 bg-base-100/25">
                        {current.category}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/60 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      aria-label="Previous nomination"
                      title="Previous"
                    >
                      <FaChevronLeft aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/60 hover:text-base-content hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      aria-label="Next nomination"
                      title="Next"
                    >
                      <FaChevronRight aria-hidden />
                    </button>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-sans text-sm text-base-content/80 leading-relaxed m-0 whitespace-pre-wrap">
                    {current.text}
                  </p>
                </div>
              </article>
            ) : (
              <p className="font-sans text-sm text-base-content/55 text-center py-10 m-0">
                No nominations yet.
              </p>
            )}

            {total ? (
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {awards.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    type="button"
                    onClick={() => setIdx(i)}
                    className={`h-2.5 w-2.5 rounded-full border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                      i === idx
                        ? "bg-primary border-primary"
                        : "bg-base-100/30 border-base-300 hover:border-primary/60"
                    }`}
                    aria-label={`Go to nomination ${i + 1}`}
                    title={`#${i + 1}`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <ul className="mt-4 space-y-3">
            {awards.map((award, awardIndex) => (
              <li
                key={award.year + award.category + awardIndex}
                className="border border-base-300 rounded-md bg-base-100/30 overflow-hidden"
              >
                <div className="p-3 border-b border-base-300 bg-base-200/30 flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/45 m-0">
                    {award.year}
                  </p>
                  <span className="inline-flex items-center rounded border border-base-300 px-2 py-0.5 bg-base-100/25 font-mono text-[10px] uppercase tracking-widest text-base-content/60">
                    {award.category}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-sans text-sm text-base-content/80 leading-relaxed m-0 whitespace-pre-wrap">
                    {award.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

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

export default Awards;
