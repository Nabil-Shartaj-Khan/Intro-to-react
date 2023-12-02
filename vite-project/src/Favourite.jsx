import { useState, useEffect} from "react";
import Listshow from "./Listshow";
import useFetch from "./useFetch";

function Favourite() {
    
    const {things,isLoading,error}=useFetch("http://localhost:8000/things");


      return (
        <div className="list p-5 ">
          {isLoading && <div>Loading data....</div>}
          {error && <div className="error">{error}</div>}
          <Listshow things={things} title="All list items from JSON file-" />
        </div>
      );
}

export default Favourite;