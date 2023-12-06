import React, { useRef } from "react";

const Image = () => {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const MoNumber = useRef(null);
    const Country = useRef(null);
    const para = useRef(null);
    const newRef = useRef(null);
    const text=useRef(null);


    //changing attributes by useref
    const changeImage = () => {
        if (newRef.current) {
            newRef.current.src = 'https://placehold.co/600x400?text=Hello+World';
            newRef.current.setAttribute('height', '300px');
            newRef.current.setAttribute('width', '300px');
            newRef.current.setAttribute('title', 'Changed sized Image');
        }
    }; 

    //changing css by useref
    const ChangeColor = () => {
        text.current.classList.remove('text-primary');
        text.current.classList.add('text-success');
        text.current.classList.add('display-4');
        text.current.innerHTML = "Text was changed successfully to display-4 success.";
    }

    //retrieving form info by useref
    const changeForm = (event) => {
        event.preventDefault(); 
        const fname = firstName.current.value;
        const lname = lastName.current.value;
        const mob = MoNumber.current.value;
        const count = Country.current.value;

        para.current.innerHTML = `<br><h4>Showing using UseRef-<br></h4><b>Your information:</b><br />First Name: ${fname}<br />Last Name: ${lname}<br />Mobile Number: ${mob}<br />Country: ${count}`;
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
            <p ref={para}>Your information will be displayed here-</p><br></br>
            <h3 className="display-2 text-primary" ref={text}>This Text will be changed by clicking the button below</h3><br></br>
            <button onClick={ChangeColor} type="submit">Change the color</button>
        </div>
    );
};

export default Image;