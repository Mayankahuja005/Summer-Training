import { create } from "zustand/react"
const Store=create((set)=>({

    favourites:[],

    addFavQuote:(newquote)=>set((state)=>({
        favourites:[...state.favourites,newquote]
    })),
    removeFavQuote:(id)=>set((state)=>({
        favourites:state.favourites.filter((quote)=>quote.id!==id)
    })),

    theme:"light",

    toggleTheme:()=>set((state)=>({
        theme:state.theme==="light"?"dark":"light"
    }))

}))
export default Store