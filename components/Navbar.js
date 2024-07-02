"use client";

export default function Navbar() {
  return (
    <header className="navbar flex flex-row flex-nowrap p-2 mb-2 w-full sticky top-0 left-0 items-center bg-primary/75 backdrop-blur-md text-white/90 shadow-md z-50">
      <div className="navbar-start flex px-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn flex btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-15"
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
      <div className="navbar-center block px-2 absolute top-4 left-16">
        <a className="text-2xl font-bold font-sans">
          BMI Checker
        </a>
      </div>
    </header>
  );
}
