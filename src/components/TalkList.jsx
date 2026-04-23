import { useMemo, useState } from "react";

function talkKey(t, i) {
  return `${t.title}|${t.date || ""}|${t.event || ""}|${i}`;
}

function yearFromDateString(s) {
  if (!s) return "";
  const m = String(s).match(/\b(19|20)\d{2}\b/);
  return m ? m[0] : "";
}

export default function TalkList({ talks }) {
  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  const locationOptions = useMemo(() => {
    const set = new Set();
    for (const t of talks) {
      if (t.location && String(t.location).trim())
        set.add(String(t.location).trim());
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [talks]);

  const yearOptions = useMemo(() => {
    const set = new Set();
    for (const t of talks) {
      const y = yearFromDateString(t.date);
      if (y) set.add(y);
    }
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [talks]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return talks
      .map((t, i) => ({ t, i }))
      .filter(({ t }) => {
        if (locationFilter !== "all" && String(t.location).trim() !== locationFilter)
          return false;
        const y = yearFromDateString(t.date);
        if (yearFilter !== "all" && y !== yearFilter) return false;
        if (!q) return true;
        const blob = [t.title, t.event, t.location, t.date]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return blob.includes(q);
      })
      .sort((a, b) => {
        const ya = Number(yearFromDateString(a.t.date)) || 0;
        const yb = Number(yearFromDateString(b.t.date)) || 0;
        if (yb !== ya) return yb - ya;
        return (a.t.title || "").localeCompare(b.t.title || "");
      });
  }, [talks, query, locationFilter, yearFilter]);

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
              placeholder="Title, event, location, date…"
              className="input input-bordered input-sm w-full font-sans bg-base-100 border-base-300 focus:border-primary"
              autoComplete="off"
            />
          </label>
          <label className="form-control w-full lg:min-w-[10rem] lg:max-w-xs">
            <span className="label-text font-mono text-[10px] uppercase tracking-widest text-base-content/45 py-0">
              Location
            </span>
            <select
              className="select select-bordered select-sm font-mono text-xs bg-base-100 border-base-300 max-w-full"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="all">All locations</option>
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full lg:w-32">
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
        </div>
        <p className="font-mono text-[10px] text-base-content/40 m-0">
          Showing {filtered.length} of {talks.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="font-sans text-sm text-base-content/55 text-center py-8">
          No talks match these filters.
        </p>
      ) : (
        <ul className="divide-y divide-base-300 border border-base-300 rounded-md overflow-hidden bg-base-200/40">
          {filtered.map(({ t, i }) => (
            <li
              key={talkKey(t, i)}
              className="bg-base-100/40 hover:bg-base-100/70 transition-colors p-3 sm:p-4"
            >
              <h3 className="font-sans text-base font-medium text-base-content m-0">
                {t.title}
              </h3>
              <p className="text-sm text-info mt-1 mb-0">{t.event}</p>
              <p className="text-xs text-base-content/55 mt-1 font-sans">
                {[t.date, t.location].filter(Boolean).join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
