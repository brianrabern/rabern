import { useMemo } from "react";
import activity from "../data/activity.json";

const KIND_LABEL = {
  paper: "PAPER",
  talk: "TALK",
  code: "CODE",
  other: "NOTE",
};

function parseActivitySortTime(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return 0;
  const trimmed = dateStr.trim();
  if (/^\d{4}-\d{2}$/.test(trimmed)) {
    const [y, m] = trimmed.split("-").map(Number);
    return new Date(y, m - 1, 1).getTime();
  }
  const t = Date.parse(trimmed);
  return Number.isNaN(t) ? 0 : t;
}

function formatActivityDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  const trimmed = dateStr.trim();
  if (/^\d{4}-\d{2}$/.test(trimmed)) {
    const [y, m] = trimmed.split("-").map(Number);
    return new Date(y, m - 1, 1).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
    });
  }
  const t = Date.parse(trimmed);
  if (!Number.isNaN(t)) {
    return new Date(t).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return trimmed;
}

export default function ActivityPanel() {
  const { updatedAt, items: rawItems } = activity;

  const items = useMemo(() => {
    const list = (rawItems || []).filter((x) => x && x.summary);
    return [...list].sort(
      (a, b) => parseActivitySortTime(b.date) - parseActivitySortTime(a.date)
    );
  }, [rawItems]);

  const updated =
    updatedAt &&
    new Date(updatedAt).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <section
      className="console-panel p-4 mt-8 text-left"
      aria-labelledby="activity-heading"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="led led-pulse" aria-hidden="true" />
        <h2
          id="activity-heading"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-base-content/45"
        >
          Recent activity
        </h2>
      </div>
      {items.length === 0 ? (
        <p className="font-sans text-sm text-base-content/50 m-0 leading-relaxed">
          {process.env.NODE_ENV === "development" ? (
            <>
              No entries yet. Add objects to the{" "}
              <code className="font-mono text-xs text-primary/90">items</code>{" "}
              array in{" "}
              <code className="font-mono text-xs text-primary/90">
                src/data/activity.json
              </code>{" "}
              (see{" "}
              <code className="font-mono text-xs text-primary/90">
                activity.example.json
              </code>
              ). Prefer a stable <code className="font-mono text-xs text-primary/90">href</code> on every entry when possible.
            </>
          ) : (
            <>Recent updates will appear here.</>
          )}
        </p>
      ) : (
        <ul className="space-y-2 font-sans text-sm text-base-content/80">
          {items.map((item, i) => {
            const label = KIND_LABEL[item.kind] ?? KIND_LABEL.other;
            const when = formatActivityDate(item.date);
            const key = [item.kind, item.date, item.summary, i].join("|");
            const inner = (
              <>
                <span className="font-mono text-[10px] text-primary mr-2">
                  {label}
                </span>
                {item.summary}
                {when ? (
                  <span className="block font-mono text-[10px] text-base-content/45 mt-0.5">
                    {when}
                  </span>
                ) : null}
              </>
            );
            return (
              <li key={key} className="border-l-2 border-l-success/70 pl-3">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    {inner}
                  </a>
                ) : (
                  <span>{inner}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {updated ? (
        <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/40 mt-4">
          Last updated · {updated}
        </p>
      ) : null}
    </section>
  );
}
