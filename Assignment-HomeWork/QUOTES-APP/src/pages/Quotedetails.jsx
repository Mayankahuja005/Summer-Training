import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Store from "../store/Store"
function Quotedetails(){
    const [loading,setLoading]=useState(true)
    const [quote,setQuote]=useState(null)
    const { id }=useParams()
    const { favourites,addFavQuote,removeFavQuote }=Store()
    const isFav=favourites.some((fav)=>fav.id===quote?.id)

    useEffect(()=>{
        const fetchQuoteDetails=async ()=>{
            try {
                setLoading(true)
                const response=await fetch(`https://api.freeapi.app/api/v1/public/quotes/${id}`)
                const result=await response.json()
                console.log(result.data)
                setQuote(result.data)
            } catch (error) {
                console.log("Error in Fetching Details of Quote",error)
            } finally{
                setLoading(false)
            }
        }
        fetchQuoteDetails()
    },[id])

    if(loading) return "Loading..."
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",padding:"10px",border:"5px solid yellow",width:"60vw",margin:"auto"}}>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}><span style={{fontSize:"2rem",fontWeight:"700"}}>Quote : "</span>{quote.content}<span style={{fontSize:"2rem",fontWeight:"700"}}>"</span></p>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}><span style={{fontSize:"2rem",fontWeight:"700"}}>Author : </span>{quote.author}</p>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}><span style={{fontSize:"2rem",fontWeight:"700"}}>Id : </span>{quote.id}</p>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}><span style={{fontSize:"2rem",fontWeight:"700"}}>Date  : </span>{quote.dateAdded}</p>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}><span style={{fontSize:"2rem",fontWeight:"700"}}>Length : </span>{quote.length}</p>
            <button onClick={()=>{isFav?removeFavQuote(quote.id):addFavQuote(quote)}}  style={{borderRadius:"5px",background:"pink",fontSize:"1.4rem"}}>{isFav ? "❌" :"✅"}</button>
            <Link to="/list" style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>Go to QuoteList</Link>
        </div>
    )
}
export default Quotedetails