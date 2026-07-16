import MusicCard from "./MusicCard"
function MusicGrid({songsArray}){
    return(
        <>
        {songsArray.map((song)=>{
            return <MusicCard singleSong={song}></MusicCard>
        })}
        </>
    )
}
export default MusicGrid
