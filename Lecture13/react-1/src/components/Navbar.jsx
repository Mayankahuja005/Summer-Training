import logo from "../assets/hero.png"
function Navbar(){
    return(
        <div id="navbar-container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1px 15px",borderBottom:"2px solid black",height:"15vh"}}>
            <div id="left">
                <img src={logo} alt="logoImage" width="50" />
            </div>
            <div id="right" >
                <ul style={{display:"flex",listStyle:"none",gap:"15px"}}>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar