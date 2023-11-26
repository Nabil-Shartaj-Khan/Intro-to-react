import { useState } from "react";
function Home() {

    const [greeting,setGreeting]=useState("Clicked the button?");

    const greet = () => {
        setGreeting('You clicked the button');
    };



    return ( 

        <div className="home p-4">
            <button className="btn btn-primary" onClick={greet}>Click me</button>
            <p className="result">{greeting}</p>
        </div>        
     );
}

export default Home;