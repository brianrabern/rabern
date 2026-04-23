import { useEffect, useState, useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import { applyDocumentTheme } from "../theme.js";

export default function AppShell() {
  const [highContrast, setHighContrast] = useState(
    () => {
      if (typeof window === "undefined") return true;
      const stored = localStorage.getItem("consoleVariant");
      if (!stored) return true;
      return stored === "high";
    }
  );

  useEffect(() => {
    const legacy = localStorage.getItem("theme");
    if (legacy && !localStorage.getItem("consoleVariant")) {
      localStorage.removeItem("theme");
    }
    if (!localStorage.getItem("consoleVariant")) {
      localStorage.setItem("consoleVariant", "high");
    }
    applyDocumentTheme();
    setHighContrast(localStorage.getItem("consoleVariant") === "high");
  }, []);

  useEffect(() => {
    const sync = () => {
      setHighContrast(localStorage.getItem("consoleVariant") === "high");
      applyDocumentTheme();
    };
    window.addEventListener("storage", sync);
    window.addEventListener("console-variant-change", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("console-variant-change", sync);
    };
  }, []);

  const toggleHighContrast = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev;
      localStorage.setItem("consoleVariant", next ? "high" : "default");
      applyDocumentTheme();
      window.dispatchEvent(new Event("console-variant-change"));
      return next;
    });
  }, []);

  const year = new Date().getFullYear();

  const footerBorder = "border-base-300";
  const footerMuted = "text-base-content/50";
  const footerLink =
    "text-base-content/60 hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded";
  const footerEgg =
    "text-base-content/40 hover:text-base-content/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded";

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <div
        className={`flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 pt-4 pb-16 ${
          highContrast ? "border border-base-300/60 rounded-lg sm:my-3" : ""
        }`}
      >
        <Nav
          highContrast={highContrast}
          onToggleHighContrast={toggleHighContrast}
        />
        <Outlet />
      </div>
      <footer className={`border-t ${footerBorder} mt-auto py-6 px-4`}>
        <div
          className={`max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[10px] uppercase tracking-widest ${footerMuted}`}
        >
          <p>
            © {year} rabern ·{" "}
            <a href="mailto:brian.rabern@gmail.com" className={footerLink}>
              brian.rabern@gmail.com
            </a>
          </p>
          <Link
            to="/landon/memorial"
            className={`${footerEgg} self-start sm:self-auto`}
          >
            LWR 1981–2020
          </Link>
        </div>
      </footer>
    </div>
  );
}
