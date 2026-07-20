import React from "react"
import { Route,Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import BookList from "./pages/BookList"
import BookDetails from "./pages/BookDetails"
import Favourites from "./pages/Favourites"
import { useState } from "react"
import Store from "./store/Store"

function App(){
    const {theme}=Store();
    return(
        <>
            <div style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":"white",minHeight:"100vh"}}>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>} />
                    <Route path="/books" element={<BookList/>} />
                    <Route path="/books/:id" element={<BookDetails/>} />
                    <Route path="/favourites" element={<Favourites/>} />
                </Route>
            </Routes>
            </div>

        </>
    )
}
export default App
