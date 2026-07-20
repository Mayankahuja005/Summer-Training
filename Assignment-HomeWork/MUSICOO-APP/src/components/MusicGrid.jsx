import React from "react";
import MusicCard from "./MusicCard";

function MusicGrid({ songsArray, onPlay }) {
  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-[repeat(auto-fit,minmax(340px,340px))] justify-center gap-10 px-10 py-12">
      {songsArray.map((song) => (
        <MusicCard
          key={song.trackId}
          singleSong={song}
          onPlay={onPlay}
        />
      ))}
    </div>
  );
}

export default MusicGrid;