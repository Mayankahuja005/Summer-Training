import { create } from "zustand"
const Store=create((set)=>({
    favbooks:[],

    addFavBook: (newbook)=>set((state)=>({
        favbooks:[...state.favbooks,newbook]
    })),

    removeFavBook:(id)=>set((state)=>({
        favbooks:state.favbooks.filter((book)=>book.id!==id)
    })),

    theme:"light",

    ToggleTheme:()=>set((state)=>({
        theme:state.theme==="light"?"dark":"light"
    }))


}))
export default Store
