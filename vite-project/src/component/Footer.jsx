
const Footer = () => {



    
    return (
        <div>   
        
        <button onClick={()=> alert("You just clicked me!!!")
}>Dont click me</button>

        <p>Tutorial created by Nabil Shartaj Khan
        &copy; All rights reserved.
        </p>
        Accessed website time {new Date().toLocaleString()};
            
        </div>
    );
};

export default Footer;