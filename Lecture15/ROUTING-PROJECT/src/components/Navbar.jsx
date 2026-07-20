import React from "react"
import { Link } from "react-router-dom"
import Store from "../store/Store"
function Navbar(){
    const {theme, ToggleTheme}=Store()
    return(
        <>
            <nav style={{display:"flex",justifyContent:"space-between", alignItems:"center",gap:"15px",padding:"8px",borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",gap:"15px",justifyContent:"center",alignItems:"center"}}>
                    <Link to="/" style={{color:"red"}}>Home</Link>
                    <Link to="/books" style={{color:"red"}}>All Books</Link>
                    <Link to="/favourites" style={{color:"red"}}>Favourites</Link>
                </div>
                <button onClick={ToggleTheme}  style={{background:"#FFFFE0",color:"black",fontSize:"1.5rem",padding:"8px"}}>{theme=="light"? "🌙 Dark" : "☀️ Light"}</button>

            </nav>
        </>
    )
}
export default Navbar