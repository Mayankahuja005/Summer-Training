import React from "react";
import { Outlet } from "react-router-dom";
import Store from "../store/Store";

function Layout() {
  const { theme, toggleTheme } = Store();

  return (
    <div>
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex justify-center text-5xl font-extrabold tracking-wide text-violet-400">
            WELCOME TO THE WORLD OF MUSICOO 🎶🎶🔊
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-full bg-amber-100 px-6 py-3 text-xl font-semibold text-slate-800 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
          {theme == "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;