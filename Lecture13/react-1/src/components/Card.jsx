import logo from "../assets/hero.png"
function Card(props){
    return(
        <div style={{display:"flex",flexWrap:"wrap",flexDirection:"column",
                    justifyContent:"center",alignItems:"center",
                    border:"2px solid black",padding:"10px",width:"300px",height:"400px",gap:"5px"}}>
                    
            <img src={logo} alt="logoImage"  width="150px" style={{padding:"5px" ,border:"1px solid black",marginBottom:"10px"}}/>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <p>{props.age}</p>
        </div>
    )
}
export default Card