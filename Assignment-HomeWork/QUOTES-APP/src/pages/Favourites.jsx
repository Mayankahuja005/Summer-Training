import React from "react"
import QuoteCard from "../components/QuoteCard"
import Store from "../store/Store"

function Favourites(){
    const {favourites}=Store()
    console.log(favourites)

    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexDirection:"column"}}>
            <div style={{fontSize:"3.5rem",fontWeight:"900",color:"pink"}}>Favourites</div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",padding:"10px",width:"70vw",margin:"auto"}}>
                {favourites.map((quote)=>{return <QuoteCard singleQuote={quote}/> })}
            </div>
        </div>
    )
}
export default Favourites