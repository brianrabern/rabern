import { useMemo, useState, useCallback } from "react";
import { AiOutlineLink } from "react-icons/ai";

function venueOf(p) {
  return p.journal || p.booktitle || "";
}

/** arXiv id from abs or pdf URL, e.g. 2104.04626 or math/0512291 */
function arxivIdFromUrl(url) {
  if (!url || typeof url !== "string") return null;
  const m = url.match(/arxiv\.org\/(?:abs|pdf)\/([^/?#]+)/i);
  if (!m) return null;
  let id = decodeURIComponent(m[1]);
  if (id.toLowerCase().endsWith(".pdf")) id = id.slice(0, -4);
  return id || null;
}

function collectVenues(items) {
  const s = new Set();
  for (const p of items) {
    const v = venueOf(p);
    if (v) s.add(v.trim());
  }
  return Array.from(s);
}

function yearRank(y) {
  const n = Number(String(y).trim());
  if (Number.isFinite(n)) return n;
  // Non-numeric years like "forthcoming" should float to top.
  return 9999;
}

/** Matching pair for BibTeX toggle + publication link (no duplicate “bib” glyph + label) */
const pubActionBtn =
  "inline-flex h-8 min-h-8 shrink-0 items-center justify-center gap-1 rounded-lg border px-2.5 font-mono text-[10px] font-medium uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

export default function PublicationArticleList({ publications }) {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [journalFilter, setJournalFilter] = useState("all");
  const [bibOpenId, setBibOpenId] = useState(null);

  const yearOptions = useMemo(() => {
    const s = new Set();
    for (const p of publications) {
      if (p.year) s.add(String(p.year).trim());
    }
    return Array.from(s).sort((a, b) => yearRank(b) - yearRank(a));
  }, [publications]);

  const venueOptions = useMemo(() => {
    return collectVenues(publications).sort((a, b) => a.localeCompare(b));
  }, [publications]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications
      .filter((p) => {
        if (yearFilter !== "all" && String(p.year) !== yearFilter) return false;
        if (journalFilter !== "all" && venueOf(p) !== journalFilter) return false;
        if (!q) return true;
        const blob = [
          p.title,
          p.author,
          p.journal,
          p.booktitle,
          p.doi,
          p.year,
          p.ENTRYTYPE,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return blob.includes(q);
      })
      .sort(
        (a, b) =>
          yearRank(b.year) - yearRank(a.year) ||
          (a.title || "").localeCompare(b.title || "")
      );
  }, [publications, query, yearFilter, journalFilter]);

  const toggleBib = useCallback((id) => {
    setBibOpenId((cur) => (cur === id ? null : id));
  }, []);

  return (
    <div>
      <div className="console-panel p-3 sm:p-4 mb-4 space-y-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-4">
          <label className="form-control flex-1 min-w-0">
            <span className="label-text font-mono text-[10px] uppercase tracking-widest text-base-content/45 py-0">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Title, author, journal, DOI…"
              className="input input-bordered input-sm w-full font-sans bg-base-100 border-base-300 focus:border-primary"
              autoComplete="off"
            />
          </label>
          <label className="form-control w-full lg:w-36">
            <span className="label-text font-mono text-[10px] uppercase tracking-widest text-base-content/45 py-0">
              Year
            </span>
            <select
              className="select select-bordered select-sm font-mono text-xs bg-base-100 border-base-300"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <option value="all">All</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full lg:min-w-[12rem] lg:max-w-md">
            <span className="label-text font-mono text-[10px] uppercase tracking-widest text-base-content/45 py-0">
              Venue
            </span>
            <select
              className="select select-bordered select-sm font-mono text-xs bg-base-100 border-base-300 max-w-full"
              value={journalFilter}
              onChange={(e) => setJournalFilter(e.target.value)}
            >
              <option value="all">All venues</option>
              {venueOptions.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="font-mono text-[10px] text-base-content/40 m-0">
          Showing {filtered.length} of {publications.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="font-sans text-sm text-base-content/55 text-center py-8">
          No articles match these filters.
        </p>
      ) : (
        <ul className="divide-y divide-base-300 border border-base-300 rounded-md overflow-hidden bg-base-200/40">
          {filtered.map((p) => {
            const id = p.ID || p.title;
            const bits = [];
            if (p.year) bits.push(String(p.year));
            const ax = arxivIdFromUrl(p.url);
            if (ax && venueOf(p) === "arXiv") bits.push(`arXiv:${ax}`);
            if (p.volume)
              bits.push(
                `vol. ${p.volume}${p.number ? ` (${p.number})` : ""}`
              );
            if (p.pages) bits.push(`pp. ${p.pages}`);
            if (p.author) bits.push(p.author);
            const meta = bits.join(" · ");

            return (
              <li key={id} className="bg-base-100/40 hover:bg-base-100/70 transition-colors">
                <div className="flex flex-col gap-2 p-3 sm:p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <a
                      href={p.url}
                      className="font-sans text-base font-medium text-base-content hover:text-primary underline-offset-2 hover:underline"
                    >
                      {p.title}
                    </a>
                    {venueOf(p) ? (
                      <p className="text-sm text-info mt-1">{venueOf(p)}</p>
                    ) : null}
                    {meta ? (
                      <p className="text-xs text-base-content/55 mt-0.5 font-sans">
                        {meta}
                      </p>
                    ) : null}
                    {p.doi ? (
                      <p className="text-xs text-warning/90 font-mono mt-1">
                        DOI: {p.doi}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleBib(id)}
                      className={`${pubActionBtn} ${
                        bibOpenId === id
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-base-300 bg-base-100/25 text-base-content hover:border-primary/70 hover:bg-base-200/40"
                      }`}
                      aria-expanded={bibOpenId === id}
                      title="BibTeX"
                    >
                      BIB
                    </button>
                    <a
                      href={p.url}
                      className={`${pubActionBtn} border-base-300 bg-base-100/25 text-base-content no-underline hover:border-primary/70 hover:bg-base-200/40`}
                      title="Open publication"
                    >
                      <AiOutlineLink className="text-base opacity-90" aria-hidden />
                      LINK
                    </a>
                  </div>
                </div>
                {bibOpenId === id && p.bibtex ? (
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 -mt-1">
                    <textarea
                      readOnly
                      id={id}
                      value={p.bibtex}
                      rows={10}
                      className="textarea textarea-bordered w-full text-xs font-mono leading-snug bg-base-200 border-base-300 focus:outline-none focus:ring-1 focus:ring-primary"
                      spellCheck={false}
                    />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
