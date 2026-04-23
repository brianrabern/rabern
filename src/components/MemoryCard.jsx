import React from "react";

const MemoryCard = ({ memory, className = "" }) => {
  return (
    <article
      className={`rounded-2xl border border-base-300 bg-base-200/20 px-5 py-5 sm:px-6 sm:py-6 backdrop-blur-sm transition-colors hover:border-primary/50 ${className}`}
    >
      <p className="text-sm sm:text-[15px] md:text-base text-base-content/88 leading-relaxed m-0 text-pretty">
        &ldquo;{memory.content}&rdquo;
      </p>
      <footer className="mt-4 flex justify-end">
        <cite className="not-italic">
          <code className="text-[11px] sm:text-xs font-mono text-primary/90">
            {memory.author}
          </code>
        </cite>
      </footer>
    </article>
  );
};

export default MemoryCard;
