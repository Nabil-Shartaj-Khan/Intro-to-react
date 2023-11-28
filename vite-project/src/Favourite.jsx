import { useState, useEffect} from "react";
import Listshow from "./Listshow";

function Favourite() {

    const [things,setThings]=useState([]);

    // *********************************************
    useEffect(() => {
        fetch("http://localhost:8000/things").then(res => {
            return res.json();
        }). then (data => setThings(data));


    },[]);

   return ( 

        <div className="list p-5 ">

           <Listshow things={things} title="All list items-"/>

        </div>

     );
}

export default Favourite;