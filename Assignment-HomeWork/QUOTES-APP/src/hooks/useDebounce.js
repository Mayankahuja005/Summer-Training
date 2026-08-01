import React from "react"
import { useState } from "react";
import { useEffect } from "react";
const useDebounce=((value,delay)=>{
    const[debounceTerm,setDebounceTerm]=useState(value)
    useEffect(()=>{
        const timerId=setTimeout(()=>{
            setDebounceTerm(value)
        },delay)
        return (()=>{clearTimeout(timerId)})
    },[value,delay])
    return debounceTerm
})
export default useDebounce