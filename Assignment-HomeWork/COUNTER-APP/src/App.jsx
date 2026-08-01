import React from "react"
import { useState } from "react"
function App(){

  const [count,setCount]=useState(0)
  const[theme,setTheme]=useState("light")

  function increment(){
    setCount((prev)=>(prev+1))
  }
  function decrement(){
    if(count>0){
      setCount((prev)=>(prev-1))
    }
  }
  function reset(){
     setCount(0)
  }
  function ToggleTheme(){
    setTheme(()=>(
      theme==="light"?"dark":"light"
    ))
  }
  return(
    <div style={{display:"flex",gap:"20px",padding:"20px",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",
                background:theme==="light"?"white":"black",
                color:theme==="light"?"black":"white"}}>
      <button style={{padding:"10px",fontSize:"2rem",borderRadius:"18px"}} onClick={ToggleTheme}>{theme==="light"?"light 🌞":"dark 🌚"}</button>
      <div style={{fontSize:"4rem"}}>Counter App:</div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90vw",gap:"50px"}}>
        <button onClick={increment} style={{padding:"25px",fontSize:"8rem"}}>➕</button>
        <div  style={{padding:"25px",fontSize:"13rem",display:"flex",justifyContent:"center",alignItems:"center"}}><span style={{fontSize:"10rem"}}>Count: </span>{count}</div>
        <button onClick={decrement}  style={{padding:"25px",fontSize:"8rem"}}>➖</button>
      </div>
      <div>
        <button onClick={reset} style={{padding:"25px",fontSize:"7rem",borderRadius:"18px"}}>Reset</button>
      </div>
    </div>
  )
}
export default App