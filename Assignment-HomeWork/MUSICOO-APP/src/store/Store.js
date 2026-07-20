import { create } from "zustand/react"
const Store=create((set)=>({

    favsongs:[],

    addFavSong:(newsong)=>set((state)=>({
        favsongs:[...state.favsongs,newsong]
    })),

    removeFavSong:(trackId)=>set((state)=>({
        favsongs:state.favsongs.filter((song)=>song.trackId!==trackId)
    })),

    theme:"light",

    toggleTheme:()=>set((state)=>({
        theme:state.theme==="light"?"dark":"light"
    })),

}))
export default Store