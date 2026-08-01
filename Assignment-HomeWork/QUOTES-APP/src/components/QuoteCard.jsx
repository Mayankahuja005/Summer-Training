import React from "react"
import Store from "../store/Store"
import { Link } from "react-router-dom"
function QuoteCard({singleQuote}){
    const { favourites,addFavQuote,removeFavQuote }=Store()

    const isFav=favourites.some((fav)=>fav.id===singleQuote.id)

    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",padding:"20px",border:"5px solid yellow",borderRadius:"5px"}}>
            <p><span style={{fontSize:"2rem",fontWeight:"700"}}>Quote : "</span>{singleQuote.content}<span style={{fontSize:"2rem",fontWeight:"700"}}>"</span></p>
            <Link to={`/list/${singleQuote.id}`} style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>View Details</Link>
            <button onClick={()=>{isFav?removeFavQuote(singleQuote.id):addFavQuote(singleQuote)}} style={{borderRadius:"5px",background:"pink",fontSize:"1.4rem"}}>{isFav ? "❌" :"✅"}</button>
        </div>
    )
}
export default QuoteCard