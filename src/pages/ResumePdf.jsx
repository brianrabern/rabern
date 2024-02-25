import React from "react";
import { useEffect } from "react";
import BrianRabernResume from "./BrianRabernResume.png";
import Nav from "../components/Nav.jsx";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { themeChange } from "theme-change";
import { useNavigate } from "react-router-dom";

const ResumePdf = () => {
  const navigate = useNavigate();
  useEffect(() => {
    themeChange(false);
  }, []);

  function togglePdf() {
    navigate("/coding/resume");
  }

  return (
    <>
      <main className="px-10">
        <Nav></Nav>
        <div className="form-control">
          <label className="label cursor-pointer justify-end">
            <p className="px-1 text-sm text-gray-600 justify-right">html</p>
            <input
              type="checkbox"
              className="toggle"
              onClick={togglePdf}
              defaultChecked
            />
            <p className="px-1 text-sm  text-gray-600 justify-right">pdf</p>
          </label>
        </div>

        <a href="https://drive.google.com/file/d/1SCT18ElauYOqbQuIJ9mCTvSd9Ze3HCIl/view?usp=sharing">
          <button className="btn btn-block">open pdf</button>
        </a>
        <div className="py-10 flex justify-center w-full h-full">
          <div className="overflow-scroll">
            <img src={BrianRabernResume} alt="resume" />
          </div>
        </div>
      </main>
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
    </>
  );
};

export default ResumePdf;
