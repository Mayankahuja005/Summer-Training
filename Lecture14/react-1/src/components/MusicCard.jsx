function MusicCard({singleSong}){
    function onPlay(){
        const audio=new Audio(singleSong.previewUrl);
        audio.play();
    }
    return(
        <>
        <img src={singleSong.artworkUrl100} alt="" />
        <p>{singleSong.collectionName}</p>
        <p>{singleSong.artistName}</p>
        <button onClick={onPlay}>Play</button>
        </>
    )
}
export default MusicCard