import React from "react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
function Home(){

    const [loading,setLoading]=useState(true)
    const [randombook,setRandmoBook]=useState(null)

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
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",flexDirection:"column",border:"2px dotted #ccc",width:"380px",height:"520px",padding:"8px"}}>
                <img src={randombook.volumeInfo?.imageLinks?.thumbnail} alt="BookImage" style={{width:"220px",height:"300px",padding:"8px"}} />
                <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Book Name : </span>{randombook.volumeInfo?.title}</p>
                <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Author Name : </span>{randombook.volumeInfo?.authors?.join(", ")}</p>
                <Link to={`/books/${randombook.id}`} style={{color:"red"}}>View Details</Link>
            </div>}
            <Link to="/books" style={{color:"red"}}>View All Books</Link>
        </div>
    )
}
export default Home