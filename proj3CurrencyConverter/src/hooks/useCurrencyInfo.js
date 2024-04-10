import { useEffect, useState } from "react";

function useCurrencyInfo (currency){
    const [data,useData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> useData(res[currency]))

        

    },[currency])

    return data

}

export default useCurrencyInfo;