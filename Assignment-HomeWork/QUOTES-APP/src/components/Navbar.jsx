import React from "react"
import { Link } from "react-router-dom"
import Store from "../store/Store"
function Navbar(){
    const {theme,toggleTheme}=Store()
    return(
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"25px",padding:"20px"}}>
                <Link to="/" style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>Home</Link>
                <Link to="/list" style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>QuoteList</Link>
                <Link to="/favourites" style={{color:"red",fontSize:"1.4rem",textDecoration:"none"}}>Favourites</Link>
           </div>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",padding:"10px"}}>
                <button style={{fontSize:"1.5rem",padding:"5px",borderRadius:"5px",background:"beige",borderRadius:"50px"}} onClick={toggleTheme}>{theme=="light"? "🌙 Dark" : "☀️ Light"}</button>
           </div>
        </div>
    )
}
export default Navbar