import React from "react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Store from "../store/Store"
function Home(){

    const [loading,setLoading]=useState(true)
    const [randombook,setRandmoBook]=useState(null)
    const { favbooks,addFavBook,removeFavBook }=Store()
    const isfav=favbooks.some((fav)=>fav.id===randombook.id)

    useEffect(()=>{
        const fetchRandomBooks = async()=>{
            try {
                setLoading(true);
                const response= await fetch("https://api.freeapi.app/api/v1/public/books/book/random")
                const result= await response.json()
                console.log(result.data)
                setRandmoBook(result.data)
            } catch (error) {
                console.log("Error in Fetching Random Book",error)
            } finally{
                setLoading(false)
            }
        }
        fetchRandomBooks()
    },[])


    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"25px",padding:"15px"}}>
            <div style={{fontSize:"40px"}}>Welcome to the Bookify!!. A book store 📖  customized for you  </div>
            {loading?"loading....":
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",flexDirection:"column",border:"2px dotted #ccc",width:"380px",height:"560px",padding:"10px",gap:"15px"}}>
                <img src={randombook.volumeInfo?.imageLinks?.thumbnail} alt="BookImage" style={{width:"220px",height:"300px",padding:"8px"}} />
                <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Book Name : </span>{randombook.volumeInfo?.title}</p>
                <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Author Name : </span>{randombook.volumeInfo?.authors?.join(", ")}</p>
                <button onClick={()=>{isfav?removeFavBook((randombook.id)):addFavBook(randombook)}} style={{fontSize:"20px",textAlign:"center"}}>{isfav?"❌":"✅"}</button>
                <Link to={`/books/${randombook.id}`} style={{color:"red",textDecoration:"none"}}>View Details</Link>
            </div>}
            <Link to="/books" style={{color:"red",textDecoration:"none"}}>View All Books</Link>
        </div>
    )
}
export default Home