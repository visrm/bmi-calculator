"use client";

export default function Navbar() {
  return (
    <nav className="navbar flex flex-row flex-nowrap p-1 w-full sticky top-0 left-0 items-center bg-purple-600 text-white/90 shadow-md z-50">
      <div className="navbar-start flex px-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn flex btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-purple-700 rounded-box w-52"
          >
            <li className="px-2 py-1 font-semibold text-xl text-slate-300">
              <a>Homepage</a>
            </li>
            <li className="px-2 py-1 font-semibold text-xl text-slate-300">
              <a>Portfolio</a>
            </li>
            <li className="px-2 py-1 font-semibold text-xl text-slate-300">
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex px-2">
        <a className="text-2xl font-bold font-sans">
          BMI Checker
        </a>
      </div>
      <div className="navbar-end flex flex-row flex-nowrap px-2">
        <button className="btn btn-ghost btn-circle flex m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle flex m-2">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
