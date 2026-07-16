import Navbar from "./components/Navbar"
import Card from "./components/Card"
import users from "./item"
function App(){
  return(
    <>
    <Navbar></Navbar>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"10px",padding:"5px"}}>
    {users.map((user,index)=>(
      <Card
        key={index}
        name={user.name}
        desc={user.desc}
        age={user.age}
      />
    ))}
    </div>
    </>
  )
}
export default App