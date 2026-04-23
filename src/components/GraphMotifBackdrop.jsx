import React from "react";

/**
 * Subtle repeating graph motif (vertices + edges) for Landon pages.
 */
export default function GraphMotifBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="h-full w-full text-primary/[0.07] sm:text-primary/[0.11]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="landon-graph-motif-a"
            width="96"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor" strokeWidth="0.85" opacity="0.85">
              <path d="M 18 52 L 48 22 L 78 48 L 48 78 Z" />
              <path d="M 48 22 L 48 78" />
              <path d="M 18 52 L 78 48" />
            </g>
            <g fill="currentColor">
              <circle cx="18" cy="52" r="2.25" />
              <circle cx="48" cy="22" r="2.25" />
              <circle cx="78" cy="48" r="2.25" />
              <circle cx="48" cy="78" r="2.25" />
            </g>
          </pattern>
          <pattern
            id="landon-graph-motif-b"
            width="96"
            height="96"
            patternTransform="translate(48 48)"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.65">
              <line x1="8" y1="72" x2="40" y2="40" />
              <line x1="40" y1="40" x2="72" y2="64" />
              <line x1="72" y1="64" x2="52" y2="88" />
            </g>
            <g fill="currentColor" opacity="0.9">
              <circle cx="8" cy="72" r="1.85" />
              <circle cx="40" cy="40" r="1.85" />
              <circle cx="72" cy="64" r="1.85" />
              <circle cx="52" cy="88" r="1.85" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#landon-graph-motif-a)" />
        <rect width="100%" height="100%" fill="url(#landon-graph-motif-b)" opacity="0.55" />
      </svg>
    </div>
  );
}
