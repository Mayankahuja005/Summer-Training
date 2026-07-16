import { useEffect,useState,useRef } from "react"
import MusicGrid from "./components/MusicGrid"
function App(){
  const [songs,setSongs]=useState([]);
  const [loading,setLoading]=useState(true);
  const currentAudioRef=useRef(null);
  const [searchTerm,setSearchTerm]=useState('jack johnson');
  const [debouncedTerm,setDebouncedTerm]=useState(searchTerm);

  function playSong(preview){
    console.log(preview);
    if(currentAudioRef.current){
      currentAudioRef.current.pause();
    }
    const audio=new Audio(preview);
    audio.play();
    currentAudioRef.current=audio;
  }

  useEffect(()=>{
    const timerId=setTimeout(()=>{
      setDebouncedTerm(searchTerm)
    },500);
    return () => clearTimeout(timerId);
    },[searchTerm])



  useEffect(()=>{
  const fetchSongs = async () => {
      
    const response = await fetch(
       `/itunes/search?term==${debouncedTerm}&limit=20&entity=song`
    ); 
      
    const data = await response.json();
    console.log(data.results);
    setSongs(data.results);
    setLoading(false);
  };

  fetchSongs();
  },[debouncedTerm])

  return(
    <>
    <h1>MUSICO</h1>
    <input type="text"
    placeholder="search karo gaana"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}/>
    {loading ? <h1>Loading songs for you...</h1>: <MusicGrid songsArray ={songs} onPlay ={playSong}/>}
    </>
  )
}
export default App