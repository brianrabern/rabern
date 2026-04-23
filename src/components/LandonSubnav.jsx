import { NavLink, Link } from "react-router-dom";

const linkCls = ({ isActive }) =>
  `font-mono text-xs uppercase tracking-wider ${
    isActive
      ? "text-primary font-semibold"
      : "text-base-content/50 hover:text-primary"
  }`;

export default function LandonSubnav() {
  return (
    <header className="bg-base-200/95 border-b border-base-300 px-4 py-3 sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <nav className="flex flex-wrap gap-6" aria-label="Landon section">
          <NavLink to="/landon/memorial" className={linkCls}>
            Memorial
          </NavLink>
          <NavLink to="/landon/research" className={linkCls}>
            Bibliography
          </NavLink>
        </nav>
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-widest text-base-content/40 hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
        >
          ← brianrabern.net
        </Link>
      </div>
    </header>
  );
}
