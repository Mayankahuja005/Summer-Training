import React from "react"
import { useState,useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import Store from "../store/Store"
import BookCard from "../components/BookCard";

function BookList(){
    const [allbooks,setAllBooks]=useState([])
    const [loading,setLoading]=useState(true)
    const[searchTerm,setSearchTerm]=useState('javascript')
    const DebouncedValue=useDebounce(searchTerm,500)


    useEffect(()=>{
        const fetchBook=async()=>{
            try {
                setLoading(true)
                const response=await fetch(`https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=${DebouncedValue}`)
                const result=await response.json()
                console.log(result.data.data)
                setAllBooks(result.data.data)
            } catch (error) {
                console.error("Error in Fetching Books List",error)
            }finally{
                setLoading(false)
            }
        }
        fetchBook()
    },[DebouncedValue])


     if(loading) return "Loading....."


    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",gap:"20px",padding:"10px"}}>
            <input type="text" placeholder="Enter Book Name" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} style={{background:"beige",width:"220px",padding:"10px",fontSize:"1rem",border:"5px solid red"}}/>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"10px",padding:"20px",flexDirection:"row",width:"90vw"}}>
                {allbooks.map((book)=>{
                    return <BookCard book={book}/>
                })}
            </div>
        </div>
    )
}
export default BookList