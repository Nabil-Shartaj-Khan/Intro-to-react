import { useEffect, useState } from "react";

const Apicall = () => {

    let [state,setState]=useState();
    let [asyncstate,setAsyncstate]=useState();


    //fetching by promising data from fake json
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1').then(res=>res.json()).then(json=>setState(json))  //step by step execution by promising

    },[])



    useEffect(()=>{
        
        (async()=>{
            
            let response=await fetch('https://dummyjson.com/products/1');
            let json= await response.json();
            setAsyncstate(json);

        })()

    },[])






    return ( 
        <div>
        
        <h3>Data fetched by calling API using promises</h3>
        {JSON.stringify(state)}
        <hr></hr>
        <h3>Data fetched by async await</h3>
        {JSON.stringify(asyncstate)}

        </div>
    
        
     );
}
 
export default Apicall;