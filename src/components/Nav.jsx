import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="py-8 mb-12 flex justify-between items-center">
      <div className="tooltip" data-tip="mood?">
        <ul className="menu justify-end">
          <li>
            {" "}
            <input
              data-set-theme="business"
              data-act-class="ACTIVECLASS"
              type="radio"
              name="theme"
              className="radio"
              id="business-radio"
            />
            {/* <input
              data-set-theme="coffee"
              data-act-class="ACTIVECLASS"
              type="radio"
              name="theme"
              className="radio"
            /> */}
            <input
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              type="radio"
              name="theme"
              className="radio"
            />
            {/* <input
              data-set-theme="black"
              data-act-class="ACTIVECLASS"
              type="radio"
              name="theme"
              className="radio"
            /> */}
            <input
              data-set-theme="cyberpunk"
              data-act-class="ACTIVECLASS"
              type="radio"
              name="theme"
              className="radio"
            />
            <input
              data-set-theme="bumblebee"
              data-act-class="ACTIVECLASS"
              type="radio"
              name="theme"
              className="radio"
            />
          </li>
        </ul>{" "}
      </div>

      <ul className="menu menu-horizontal bg-base-100 rounded-box">
        <li>
          <div className="tooltip" data-tip="home">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </div>
        </li>
        <li>
          <div className="tooltip" data-tip="writing">
            <Link to="/research/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </Link>
          </div>
        </li>
        <li>
          <div className="tooltip" data-tip="coding">
            <Link to="/coding/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </Link>
          </div>
        </li>
        <li>
          <div className="tooltip" data-tip="talking">
            <Link to="/talking/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
