const testingBtn=(status)=>{
    if (status==true){
        return <button>Status ON button</button>
    }
    else {
        return <button>Status Off button</button>
    }
}


const Contact = () => {


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

            
        </div>
    );
};

export default Contact;