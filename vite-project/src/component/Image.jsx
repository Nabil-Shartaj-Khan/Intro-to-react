import React, { useRef } from "react";

const Image = () => {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const MoNumber = useRef(null);
    const Country = useRef(null);
    const para = useRef(null);
    const newRef = useRef();

    const changeImage = () => {
        if (newRef.current) {
            newRef.current.src = 'https://placehold.co/600x400?text=Hello+World';
            newRef.current.setAttribute('height', '300px');
            newRef.current.setAttribute('width', '300px');
            newRef.current.setAttribute('title', 'Changed sized Image');
        }
    }; 

    const changeForm = (event) => {
        event.preventDefault(); 
        const fname = firstName.current.value;
        const lname = lastName.current.value;
        const mob = MoNumber.current.value;
        const count = Country.current.value;

        para.current.innerHTML = `<b>Your information:</b><br />First Name: ${fname}<br />Last Name: ${lname}<br />Mobile Number: ${mob}<br />Country: ${count}`;
    };

    return (
        <div>
            <img ref={newRef} src="https://placehold.co/600x400/png" alt="Placeholder" /><br />
            <button onClick={changeImage}>Change image</button><br /><br></br>
            <form onSubmit={changeForm}>
                <input type="text" ref={firstName} placeholder="Your First Name" required />
                <input type="text" ref={lastName} placeholder="Your Last Name" required />
                <input type="text" ref={MoNumber} placeholder="Your Mobile Number" required />
                <input type="text" ref={Country} placeholder="Your Country" required />
                <button type="submit">Submit form data</button><br></br>
            </form>
            <p ref={para}>Your information will be displayed here-</p>
        </div>
    );
};

export default Image;