import React, { useState } from "react";

const Count = () => {
    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    const resetNumber = () => {
        setNumber(0);
    };

    return (
        <div>
            <h1 className="display-4 text-center">Current Number: {number}</h1>
            <button onClick={increaseNumber}>Increment</button>
            <button onClick={resetNumber}>Reset</button>
        </div>
    );
};

export default Count;