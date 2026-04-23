import React, { useState, useCallback } from "react";
import { AiOutlineLink } from "react-icons/ai";

/** Matching pair for BibTeX toggle + publication link (consistent with articles list). */
const pubActionBtn =
  "inline-flex h-8 min-h-8 shrink-0 items-center justify-center gap-1 rounded-lg border px-2.5 font-mono text-[10px] font-medium uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

const PublicationCardBooks = ({ publication }) => {
  const [bibtexVisible, setBibtexVisible] = useState(false);
  const toggleBibtex = useCallback(() => {
    setBibtexVisible((v) => !v);
  }, []);

  return (
    <article className="border border-base-300 rounded-md overflow-hidden bg-base-200/40 hover:bg-base-200/55 transition-colors">
      <div className="flex flex-col sm:flex-row">
        {publication.cover ? (
          <div className="sm:w-48 sm:shrink-0 border-b sm:border-b-0 sm:border-r border-base-300 bg-base-100/40 flex items-center justify-center">
            <img
              className="w-full max-w-[14rem] sm:max-w-none h-44 sm:h-full object-cover"
              src={publication.cover}
              alt=""
            />
          </div>
        ) : null}

        <div className="p-3 sm:p-4 flex flex-col gap-2 min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0 flex-1">
              <a
                href={publication.url}
                className="font-sans text-base font-medium text-base-content hover:text-primary underline-offset-2 hover:underline"
              >
                {publication.title}
              </a>

              {publication.publisher ? (
                <p className="text-sm text-info mt-1">{publication.publisher}</p>
              ) : null}

              <p className="text-xs text-base-content/55 mt-0.5 font-sans">
                {publication.editor ? publication.editor : null}
                {publication.editor && publication.author ? " · " : null}
                {publication.author ? publication.author : null}
                {(publication.editor || publication.author) &&
                (publication.year || publication.volume)
                  ? " · "
                  : null}
                {publication.year ? `(${publication.year})` : null}
                {publication.volume ? `, ${publication.volume}` : null}
              </p>

              {publication.doi ? (
                <p className="text-xs text-warning/90 font-mono mt-1">
                  DOI: {publication.doi}
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {publication.bibtex ? (
                <button
                  type="button"
                  onClick={toggleBibtex}
                  className={`${pubActionBtn} ${
                    bibtexVisible
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-base-300 bg-base-100/25 text-base-content hover:border-primary/70 hover:bg-base-200/40"
                  }`}
                  aria-expanded={bibtexVisible}
                  title="BibTeX"
                >
                  BIB
                </button>
              ) : null}
              {publication.url ? (
                <a
                  href={publication.url}
                  className={`${pubActionBtn} border-base-300 bg-base-100/25 text-base-content no-underline hover:border-primary/70 hover:bg-base-200/40`}
                  title="Open publication"
                >
                  <AiOutlineLink className="text-base opacity-90" aria-hidden />
                  LINK
                </a>
              ) : null}
            </div>
          </div>

          {bibtexVisible && publication.bibtex ? (
            <div className="-mt-1">
              <textarea
                readOnly
                id={publication.ID || publication.title}
                value={publication.bibtex}
                rows={10}
                className="textarea textarea-bordered w-full text-xs font-mono leading-snug bg-base-200 border-base-300 focus:outline-none focus:ring-1 focus:ring-primary"
                spellCheck={false}
              />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default PublicationCardBooks;
