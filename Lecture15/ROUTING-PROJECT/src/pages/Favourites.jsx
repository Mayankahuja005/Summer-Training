import React from "react"
import BookCard from "../components/BookCard"
import Store from "../store/Store"

function Favourites(){
   const {favbooks}=Store()
   console.log(favbooks)
   return(
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"80vh",padding:"50px"}}>
      <div style={{color:"pink",fontSize:"2.5rem",fontWeight:"600"}}>Favourites ❤️❤️</div>
      <div style={{display:"flex",justifyContent:"start",width:"100%",gap:"20px",padding:"20px"}}>{favbooks.map((fav)=>{
         return <BookCard book={fav}/>
      })}</div>
    </div>
   )
}
export default Favourites