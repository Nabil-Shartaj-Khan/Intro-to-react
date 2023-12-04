const About = (props) => {
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
            <button onClick={props.click}>Props Button Click</button>
        </div>
    );
};

export default About;