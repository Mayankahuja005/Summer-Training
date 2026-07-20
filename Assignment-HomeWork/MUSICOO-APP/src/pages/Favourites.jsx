import MusicCard from "../components/MusicCard";
import Store from "../store/Store";
import { useRef } from "react";

function Favourites() {
  const currentAudioRef = useRef(null);
  const { favsongs } = Store();

  console.log(favsongs);

  function playSong(preview) {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = new Audio(preview);
    currentAudioRef.current.play();
  }

  return (
    <div className="flex flex-col items-center gap-8 px-6 py-10">
      <h1 className="text-4xl font-bold text-rose-500">
        ❤️ Favourite Songs ❤️
      </h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-[repeat(auto-fit,minmax(340px,340px))] justify-center gap-10">
        {favsongs.map((fav) => (
          <MusicCard
            key={fav.trackId}
            singleSong={fav}
            onPlay={playSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;