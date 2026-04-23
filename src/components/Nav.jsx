import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const tabs = [
  { to: "/", end: true, label: "home" },
  { to: "/research", label: "research" },
  { to: "/coding", label: "coding" },
  { to: "/talking", label: "talking" },
];

/** Matches primary nav sections (nested routes use the parent tab). */
function lambdaParamFromPath(pathname) {
  if (!pathname || pathname === "/") return "home";
  if (pathname.startsWith("/research")) return "research";
  if (pathname.startsWith("/coding")) return "coding";
  if (pathname.startsWith("/talking")) return "talking";
  return "home";
}

export default function Nav({ highContrast, onToggleHighContrast }) {
  const { pathname } = useLocation();
  const param = lambdaParamFromPath(pathname);
  const tabBar = highContrast
    ? "bg-base-200/70"
    : "bg-base-200/55";

  const tabBase =
    "font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-t-md border border-transparent border-b-0 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:ring-offset-base-200";

  const navLinkClass = ({ isActive }) => {
    if (isActive) {
      return `${tabBase} bg-base-100 text-primary border-base-300 border-b-base-100 -mb-px z-[1]`;
    }
    return `${tabBase} text-base-content/50 hover:text-base-content/85 hover:bg-base-100/35`;
  };

  const headerBorder = highContrast
    ? "border-b border-base-300"
    : "border-b border-base-300/90";
  const iconBtn = highContrast
    ? "self-start sm:self-auto h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/90 hover:bg-base-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0"
    : "self-start sm:self-auto h-9 w-9 inline-flex items-center justify-center rounded border border-base-300 text-base-content/55 hover:text-base-content hover:border-primary/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0";

  return (
    <header className={`mb-8 sm:mb-10 pb-0 ${headerBorder}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between pb-3">
        <div className="min-w-0 flex-1">
          <p
            className="font-mono text-[13px] sm:text-sm leading-relaxed select-none m-0"
            aria-label={
              param === "home"
                ? "lambda x: brianrabern(x)"
                : `lambda x: brianrabern(x). Current section: ${param}`
            }
          >
            <span className="text-secondary">lambda</span>{" "}
            <span className="text-info">x</span>
            <span className="text-base-content/80">:</span>{" "}
            <Link
              to="/"
              className="text-accent hover:text-accent/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              title="Home"
            >
              brianrabern
            </Link>
            <span className="text-base-content/80">(</span>
            <span className="text-info">x</span>
            <span className="text-base-content/80">)</span>
            {param !== "home" ? (
              <>
                {" "}
                <span
                  className={
                    highContrast
                      ? "text-base-content/70"
                      : "text-base-content/45"
                  }
                  aria-hidden="true"
                >
                  # {param}
                </span>
              </>
            ) : null}
          </p>
        </div>
        <button
          type="button"
          onClick={onToggleHighContrast}
          className={iconBtn}
          aria-pressed={highContrast}
          aria-label={highContrast ? "Switch to light mode" : "Switch to dark mode"}
          title={highContrast ? "Light mode" : "Dark mode"}
        >
          {highContrast ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
        </button>
      </div>

      <nav
        className={`flex flex-wrap items-end gap-0 rounded-t-lg ${tabBar}`}
        aria-label="Primary"
      >
        {tabs.map(({ to, end, label }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={navLinkClass}
            title={`${label.charAt(0).toUpperCase()}${label.slice(1)}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
