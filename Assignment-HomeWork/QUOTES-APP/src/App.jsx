import React from "react"
import{ Route,Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Quotedetails from "./pages/Quotedetails"
import QuoteList from "./pages/Quotelist"
import Favourites from "./pages/Favourites"
import Store from "./store/Store"
function App(){
    const {theme}=Store()
    return(
        <div style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":"white",minHeight:"100vh"}}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/list" element={<QuoteList/>} />
                    <Route path="/list/:id" element={<Quotedetails/>} />
                    <Route path="/favourites" element={<Favourites/>} />
                </Route>
            </Routes>
        </div>
    )
}
export default App