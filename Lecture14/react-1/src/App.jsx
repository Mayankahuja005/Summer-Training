import { useState } from "react";
import { useEffect } from "react"
import MusicGrid from "./components/MusicGrid";
function App(){

  const[loading,setLoading]=useState(true);
  const[songs,setSongs]=useState([]);



  useEffect(()=>{
    const fetchSongs=async()=>{
      try{
      const response=await fetch("https://itunes.apple.com/search?term=daler+mahandi&limit=25");
      const data=await response.json();
      setSongs(data.results);
      console.log(data.results);
      }
      catch(err)
      {
        console.log("Error hai",err);
      }
      finally
      {
        setLoading(false);
      }
      };

      fetchSongs();
  },[])
  
  return(
    <>
    <h1>Musico</h1>
    {loading ? <h1>Loading songs for you...</h1>: <MusicGrid songsArray ={songs}/>}
    </>

  )
}
export default App