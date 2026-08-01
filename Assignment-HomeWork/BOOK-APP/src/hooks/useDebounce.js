import { useState,useEffect } from "react";

const useDebounce=(term,delay)=>{
    const [debouncedterm,setDebouncedTerm]=useState(term)
    useEffect(()=>{
        const timerid=setTimeout(()=>{
            setDebouncedTerm(term)
        },delay)
        return ()=>{clearInterval(timerid)}
    },[term,delay])

    return debouncedterm
}
export default useDebounce