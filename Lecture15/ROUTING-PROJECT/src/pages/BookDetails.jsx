import React from "react"
import { useState,useEffect } from "react"
import { Link,useParams } from "react-router-dom"
import Store from "../store/Store"
function BookDetails(){
    const {addBooks}=Store()
    const[loading,setLoading]=useState(true)
    const[book,setBook]=useState(null)
    const{id}=useParams()

    useEffect(()=>{
        const fetchBookDetails= async()=>{
            try {
                setLoading(true)
                const response= await fetch(`https://api.freeapi.app/api/v1/public/books/${id}`)
                const result= await response.json()
                console.log(result.data)
                setBook(result.data)
            } catch (error) {
                console.error("Error in Fetching Details of Book",error)
            } finally{
                setLoading(false)
            }

        }
        fetchBookDetails()
    },[id])

    if(loading) return "Loading....."

    console.log(id);


    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",width:"92vw",height:"100vh",gap:"15px",padding:"50px"}}>
            <div style={{color:"violet",fontSize:"2rem"}}>Book Details:</div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",flexDirection:"row",width:"95vw",height:"500px",padding:"15px",gap:"30px",border:"2px dotted #ccc"}}>
                <div >
                    <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="BookImage" style={{width:"350px",height:"430px",padding:"10px"}} />
                </div>
                <div style={{width:"60vw"}}>
                    <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Book Name : </span>{book.volumeInfo?.title}</p>
                    <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Author Name : </span>{book.volumeInfo?.authors?.join(", ")}</p>
                    <p style={{fontSize:"20px",textAlign:"center"}}><span style={{fontWeight:"600"}}>Desc : </span>{book.volumeInfo?.description}</p>
                </div>
            </div>
            <Link to="/books" style={{color:"aqua"}}>View All Books</Link>
        </div>
    )
}
export default BookDetails