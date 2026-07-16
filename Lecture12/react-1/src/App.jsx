import { useState } from "react";
function App(){
  const[count, setCount]=useState(0)

  const increaseCount=()=>{
    setCount(prev=>prev+1)
  }

  const decreaseCount=()=>{
    setCount(prev=>{
      if(prev<=0){
        return 0;
      }
      return prev-1;
    })
  }

  return(
    <>
    <h1 style={{fontSize:"50px"}}>{count}</h1>

    {/* {count > 0 && count % 10 === 0 && <h2>{count} PUSHUPS HOGYE💪</h2>}  */}

    {count > 0 && count%10===0 ? <h3>{count} pushups hogye 💪</h3> : <h4>Chal {10-count} aur kar...</h4>} 

    <button onClick={increaseCount} style={{padding:"20px", margin:"10px"}}>Increase</button>

    <button onClick={decreaseCount} style={{padding:"20px",margin:"10px"}}>Decrease</button>
    </>
  )
}
export default App;