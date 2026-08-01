import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Store from "../store/Store"
import { Link } from "react-router-dom"
function Home(){
   const [loading,setLoading]=useState(true)
   const [randomQuote,setRandomQuote]=useState(null)
   const { favourites,addFavQuote,removeFavQuote }=Store()
   const isFav=favourites.some((fav)=>fav.id===randomQuote?.id)
   useEffect(()=>{
      const fetchRandomQuote=async ()=>{
         try {
            setLoading(true)
            const response=await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
            const result=await response.json()
            console.log(result.data)
            setRandomQuote(result.data)
         } catch (error) {
            console.log("Error in Fetching a Random Quote",error)
         } finally{
            setLoading(false)
         }
      }
      fetchRandomQuote()
   },[])

   return(
    <div style={{display:"flex",flexDirection:"column",gap:"50px",padding:"20px",justifyContent:"center",alignItems:"center"}}>
      <div style={{fontSize:"3.5rem",fontWeight:"900"}}>Welcome to the Quoteify | A Quote Web customised for you.</div>
      {loading?<h1>Loading...</h1>:
         <div style={{padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px",border:"5px dashed yellow"}}>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}><span style={{fontSize:"2rem",fontWeight:"700"}}>Quote : "</span>{randomQuote.content}<span style={{fontSize:"2rem",fontWeight:"700"}}>"</span></p>
            <button onClick={()=>{isFav?removeFavQuote(randomQuote.id):addFavQuote(randomQuote)}} style={{borderRadius:"5px",background:"pink",fontSize:"1.4rem"}}>{isFav ? "❌" :"✅"}</button>
            <Link to={`/list/${randomQuote.id}`} style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>View Details</Link>

         </div>}
         <Link to="/list" style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>View All Quotes</Link>
    </div>
   )
}
export default Home