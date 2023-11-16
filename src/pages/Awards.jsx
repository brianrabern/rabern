import awardData from "../components/awardData.js";
import { Link } from "react-router-dom";
import { FaArrowAltCircleUp, FaArrowAltCircleLeft } from "react-icons/fa";
import { themeChange } from "theme-change";
import { useEffect } from "react";

const awards = awardData || [];

const Awards = () => {
  useEffect(() => {
    themeChange(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mt-8 mr-4 ml-4 px-10">
      <div className="tooltip" data-tip="back">
        <Link to="/talking/">
          <FaArrowAltCircleLeft />
        </Link>
      </div>
      <br />

      <h1 className="text-2xl font-bold text-center">
        Teaching Award Nominations
      </h1>
      <div className="text-center">
        <span className="badge">
          Awarded: Outstanding Innovation in Digital Teaching, 2020-21,
          University of Edinburgh
        </span>
      </div>
      {awards.map((award, awardIndex) => (
        <>
          <div
            key={awardIndex}
            className={`chat ${
              awardIndex % 2 === 0 ? "chat-start" : "chat-end"
            }`}
          >
            <br />
            <div className="mr-4 ml-4">{award.year}</div>
            <div
              className={`chat-bubble ${
                awardIndex % 2 === 0
                  ? "chat-bubble-warning"
                  : "chat-bubble-info"
              }`}
            >
              <div className="mb-1">
                <span className="badge">{award.category}</span>
              </div>
              {award.text}
            </div>
          </div>
        </>
      ))}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <div className="tooltip" data-tip="to top">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <FaArrowAltCircleUp />
            </button>
          </div>
          <p>© 2023 rabern - brian.rabern@gmail.com</p>
        </div>
      </footer>
    </main>
  );
};

export default Awards;
{
  /* <>
  <div className="chat chat-start">
    <div className="chat-bubble chat-bubble-primary">
      {nomination.text}
      <span className="badge">{nomination.category}</span>
    </div>
  </div>
  <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info">
      {nomination.text}
      <span className="badge">{nomination.category}</span>
    </div>
  </div>
</>; */
}
