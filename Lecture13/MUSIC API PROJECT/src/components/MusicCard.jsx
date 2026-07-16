function MusicCard({singleSong, onPlay}){
    console.log(singleSong.previewUrl)
     return(
        <div style={{border: "1px solid #ccc", width:"160px", padding: "10px"}}>
            <img src={singleSong.artworkUrl100} width="160"/>
            <p>{singleSong.collectionName}</p>
            <p>{singleSong.artistName}</p>
            <button onClick={()=>onPlay(singleSong.previewUrl)}  disabled={!singleSong.previewUrl}>Play</button>
        </div>
    )
}
export default MusicCard