import React from "react"
import { useState } from "react"
import Store from "../store/Store"
// import { Link } from "react-router-dom"
function BookCard({book}){

    const {favbooks,addFavBook,removeFavBook}=Store()

    const isfav=favbooks.some((fav)=>fav.id===book.id)

    return(
        <>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",flexDirection:"column",border:"5px dotted orange",width:"200px",height:"350px",padding:"8px",background:"yellow",color:"black"}}>
                <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="BookImage" style={{width:"80px",height:"150px",padding:"8px"}} />
                <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Book Name : </span>{book.volumeInfo?.title}</p>
                <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Author Name : </span>{book.volumeInfo?.authors?.join(", ")}</p>
                {/* <Link to={`/books/${book.id}`}>View Details</Link> */}
                <button onClick={()=>{isfav?removeFavBook((book.id)):addFavBook(book)}} style={{fontSize:"20px",textAlign:"center"}}>{isfav?"❌":"✅"}</button>
            </div>
        </>
    )
}
export default BookCard