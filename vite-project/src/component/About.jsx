import { useRef } from "react";
const About = (props) => {


    const ApiData=useRef();
    const myPtag=useRef();


    //useRef caching expensive computation
  const fetchData= async()=>{
            
    const response=await fetch ("https://dummyjson.com/products");
    ApiData.current=await response.json();
    }

    const showData=()=>{

        myPtag.current.innerHTML=JSON.stringify(ApiData.current);
    }

    return (

    <div>
           <h1>Your profile details-</h1>
           <p>Note: This is from object props</p>
           <ul>
            <li><b>Name</b>: {props.detail['name']}</li>
            <li><b>Age</b>: {props.detail['age']}</li>
            <li><b>Profession</b>: {props.detail['profession']}</li>
            <li><b>Department</b>: {props.detail['department']}</li>
            <li><b>User type</b>: {props.detail['usertype']}</li>
            </ul> <br></br>
            <button onClick={props.click}>Props Button Click</button><br></br>
            <button onClick={fetchData} className="mt-3 me-4">API calling</button>
            <button onClick={showData} className="mt-3">Show Data</button>
            <p ref={myPtag}>Data will be shown here</p>
        </div>
    );
};

export default About;