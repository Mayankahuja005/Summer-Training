import React from "react";
import MusicGrid from "../components/MusicGrid";
import { useState, useEffect, useRef } from "react";
import useDebounce from "../hook/useDebounce";
import { Link } from "react-router-dom";

function StartListening() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);
  const DebouncedValue = useDebounce(searchTerm, 500);
  const currentAudioRef = useRef(null);

  function playSong(preview) {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = new Audio(preview);
    currentAudioRef.current.play();
  }

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/itunes/search?term=${DebouncedValue}&limit=20&entity=song`
        );
        const data = await response.json();
        console.log(data.results);
        setSongs(data.results);
      } catch (error) {
        console.error("Error in Fetching Songs...", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [DebouncedValue]);

  return (
    <div className="flex flex-col items-center gap-8 px-6 py-8">
      <input
        type="text"
        placeholder="🎵 Search Songs..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-full max-w-2xl rounded-full border-2 border-slate-300 bg-white px-6 py-4 text-xl text-slate-800 shadow-lg outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
      />

      {loading ? (
        <h1 className="text-3xl font-semibold text-slate-600 animate-pulse">
          🎧 Loading Songs for you...
        </h1>
      ) : (
        <MusicGrid songsArray={songs} onPlay={playSong} />
      )}

      <Link
        to="/favourites"
        className="rounded-full bg-linear-to-r from-red-500 via-pink-500 to-rose-500 px-8 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        ❤️ Favourite Songs
      </Link>
    </div>
  );
}

export default StartListening;