import React from "react";
import Store from "../store/Store";

function MusicCard({ singleSong, onPlay }) {
  const { favsongs, addFavSong, removeFavSong } = Store();

  const isfav = favsongs.some((fav) => fav.trackId === singleSong.trackId);

  return (
    <div className="group flex h-\[520px\] w-\[340px\] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
      
      <img
        src={singleSong.artworkUrl100}
        alt="Song-Image"
        className="mx-auto h-56 w-56 rounded-2xl object-cover shadow-xl transition duration-300 group-hover:scale-105"
      />

      <div className="mt-5 flex flex-1 flex-col items-center">
        <h2 className="h-14 w-full overflow-hidden text-center text-xl font-bold text-slate-900 line-clamp-2 dark:text-white">
          {singleSong.collectionName}
        </h2>

        <p className="mt-2 h-6 w-full truncate text-center text-base text-slate-500 dark:text-slate-300">
          {singleSong.artistName}
        </p>

        <div className="mt-auto flex w-full gap-4">
          <button
            onClick={() => onPlay(singleSong.previewUrl)}
            className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700"
          >
            ▶ Play
          </button>

          <button
            onClick={() => {
              isfav
                ? removeFavSong(singleSong.trackId)
                : addFavSong(singleSong);
            }}
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl shadow-md transition-all duration-300 ${
              isfav
                ? "bg-rose-500 text-white hover:bg-rose-600"
                : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
            }`}
          >
            {isfav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;