import React from "react";
import { useState } from "react";
import TalkList from "../components/TalkList.jsx";
import CourseList from "../components/CourseList.jsx";
import talkData from "../components/talkData.js";
import teachingData from "../components/teachingData.js";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const talks = talkData || [];
const courses = teachingData || [];

const Talking = () => {
  const [teachingMode, setTeachingMode] = useState(false);

  return (
    <main className="pb-12">
      <header className="mb-8">
        <h1 className="font-mono text-2xl uppercase tracking-[0.1em] text-primary">
          Teaching & presentations
        </h1>
      </header>

      <section className="console-panel p-4 sm:p-5 mb-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          {!teachingMode ? (
            <img
              src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/jowett.jpeg"
              alt=""
              className="w-28 h-28 sm:w-24 sm:h-24 rounded-xl object-cover border border-base-300/60"
            />
          ) : (
            <img
              src="https://raw.githubusercontent.com/brianrabern/rabern/main/src/pages/assets/me_talking.jpeg"
              alt=""
              className="w-28 h-28 sm:w-24 sm:h-24 rounded-xl object-cover border border-base-300/60"
            />
          )}

          <div className="form-control flex flex-row items-center justify-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-base-content/50">
              Teaching
            </span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={!teachingMode}
              onChange={(e) => setTeachingMode(!e.target.checked)}
              aria-label="Switch between teaching and presentations"
            />
            <span className="font-mono text-xs uppercase tracking-wider text-base-content/50">
              Presentations
            </span>
          </div>
        </div>
      </section>

      {!teachingMode ? (
        <>
          <h2 className="font-mono text-center text-[11px] uppercase tracking-[0.2em] text-base-content/50 mb-4">
            Presentations
          </h2>
          <TalkList talks={talks} />
        </>
      ) : (
        <>
          <h2 className="font-mono text-center text-[11px] uppercase tracking-[0.2em] text-base-content/50 mb-4">
            Courses
          </h2>
          <CourseList
            courses={courses}
            rightAction={
              <Link
                to="/talking/awards"
                className="inline-flex items-center rounded border border-base-300 bg-base-100/25 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-base-content/55 no-underline hover:text-primary hover:border-primary/40 hover:bg-base-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                title="Teaching awards"
              >
                awards
              </Link>
            }
          />
        </>
      )}

      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="text-base-content/45 hover:text-base-content/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-2"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Back to top"
        >
          <FaArrowAltCircleUp className="text-xl" />
        </button>
      </div>
    </main>
  );
};

export default Talking;
