import React, { useState } from "react";

const Count = () => {
    const [number, setNumber] = useState(0);
    const [obj, setObj] = useState({
        name:"Lionel Messi",
        age:35,
        prof:"Footballer"
    });

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    const resetNumber = () => {
        setNumber(0);
    };

    const change = () => {
        setObj(prevOBJ => ({
          ...prevOBJ,
          name: "Cristiano Ronaldo",
          age: 38
        }));
      };

    return (
        <div>
            <h1 className="display-4 text-center">Current Number: {number}</h1>
            <button onClick={increaseNumber} className="me-4">Increment</button>
            <button onClick={resetNumber}>Reset</button><br></br>
            <h2>Details-</h2><br></br>
            <p>Name:{obj.name}</p><br></br>
            <p>Age:{obj.age}</p><br></br>
            <p>Profession:{obj.prof}</p><br></br>
            <button onClick={change}>Change the Data</button>
        </div>
    );
};

export default Count;