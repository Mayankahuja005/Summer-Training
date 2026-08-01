import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import QuoteCard from "../components/QuoteCard"
function Quotelist(){
    const [searchTerm,setSearchTerm]=useState("")
    const [loading,setLoading]=useState(true)
    const [quotes,setQuotes]=useState([])
    const debouncedValue=useDebounce(searchTerm,500)

    useEffect(()=>{
        const fetchQuotes=async ()=>{
            try {
                setLoading(true)
                const response=await fetch(`https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=${debouncedValue}`)
                const results=await response.json()
                console.log(results.data.data)
                setQuotes(results.data.data)
            } catch (error) {
                console.log("Error in Fetching Quotes",error)
            } finally{
                setLoading(false)
            }
        }
        fetchQuotes()
    },[debouncedValue])


    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexDirection:"column",padding:"20px"}}>
            <input type="text" placeholder="Search Quote" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} style={{fontSize:"2rem",borderRadius:"5px",background:"beige"}}/>
            {loading?<h1>Loading...</h1>:
            <div style={{display:"flex",flexDirection:"column",gap:"10px",padding:"20px",width:"75vw",margin:"auto"}}>
                {quotes.map((quote)=>{return <QuoteCard singleQuote={quote}/> })}
            </div>}
        </div>
    )
}
export default Quotelist