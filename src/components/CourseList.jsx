import { useMemo, useState } from "react";

export default function CourseList({ courses, rightAction }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses
      .filter((c) => {
        if (!q) return true;
        const blob = [
          c.title,
          c.university,
          c.year,
          c.level,
          c.students,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return blob.includes(q);
      })
      .sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", undefined, {
          sensitivity: "base",
        })
      );
  }, [courses, query]);

  return (
    <div>
      <div className="console-panel p-3 sm:p-4 mb-4 space-y-3">
        <div className="form-control w-full min-w-0">
          <span className="label-text font-mono text-[10px] uppercase tracking-widest text-base-content/45 py-0">
            Search
          </span>
          <div className="flex items-stretch gap-2">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, university, level, dates…"
              className="input input-bordered input-sm w-full font-sans bg-base-100 border-base-300 focus:border-primary"
              autoComplete="off"
            />
            {rightAction ? <div className="shrink-0">{rightAction}</div> : null}
          </div>
        </div>
        <p className="font-mono text-[10px] text-base-content/40 m-0">
          Showing {filtered.length} of {courses.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="font-sans text-sm text-base-content/55 text-center py-8">
          No courses match your search.
        </p>
      ) : (
        <ul className="divide-y divide-base-300 border border-base-300 rounded-md overflow-hidden bg-base-200/40">
          {filtered.map((c) => (
            <li
              key={`${c.title}|${c.university}|${c.year}`}
              className="bg-base-100/40 hover:bg-base-100/70 transition-colors p-3 sm:p-4"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-sans text-base font-medium text-base-content m-0">
                    {c.title}
                  </h3>
                  <p className="text-sm text-info mt-1 mb-0">{c.university}</p>
                  <p className="text-xs text-base-content/55 mt-1 font-sans">
                    {[c.year, c.level].filter(Boolean).join(" · ")}
                    {c.students != null && c.students !== ""
                      ? ` · Students: ${c.students}`
                      : ""}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
