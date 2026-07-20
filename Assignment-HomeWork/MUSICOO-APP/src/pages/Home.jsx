import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center px-4">
      <Link
        to="/listen"
        className="rounded-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-5 text-4xl font-bold text-yellow-300 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-400/50 hover:text-white"
      >
        🎵 Start Listening 🕺💃
      </Link>
    </div>
  );
}

export default Home;