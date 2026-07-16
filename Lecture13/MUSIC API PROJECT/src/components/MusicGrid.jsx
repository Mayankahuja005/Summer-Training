import MusicCard from "./MusicCard"
function MusicGrid({songsArray,onPlay}){
    return(
    <div style={{display: "flex", flexWrap:"wrap", gap:"20px", padding:"10px", justifyContent:"center"}}>
            {songsArray.map((song)=>{
               return <MusicCard   key={song.trackId} singleSong = {song} onPlay={onPlay}/>
            })}

        </div>)
}
export default MusicGrid