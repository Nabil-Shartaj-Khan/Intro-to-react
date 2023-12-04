import { useRef } from "react";

const testingBtn=(status)=>{
    if (status==true){
        return <button>Status ON button</button>
    }
    else {
        return <button>Status Off button</button>
    }
}


const Contact = () => {

    const formControl=(event)=>{
        
        event.preventDefault();

        alert("Form is submitted!")

}

let newRef=useRef();

const showMessage=()=>{
    newRef.innerHTML="<strong>Form has been submitted!</strong>"
}



    return (
        <div>

            <h3>Contact me now from the following-</h3>
            <ul>
                <li>Number: 01770438440</li>
                <li>Email: shartajnabil@gmail.com</li>
                <li>Facebook: Nabil Shartaz Khan</li>
            </ul>
            <br></br>

            {testingBtn(false)}<br></br><br></br>

            <h2>Send us a message-</h2>
            <form onSubmit={formControl}>
                Name: <input placeholder="Enter your name"></input><br></br>
                Member ID: <input placeholder="Enter your member ID"></input><br></br>
                Message: <br></br>
                <textarea style={{
                    height:'100px', width:'200px'
                }}></textarea> <br></br>
                
                <h4 ref={(h4)=>newRef=h4}></h4>
                <input type="submit" onClick={showMessage}></input>

            </form><br></br>

            
        </div>
    );
};

export default Contact;