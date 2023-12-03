const Header = () => {

    let loggedIn=true;

    return (
        <div>
            {
                loggedIn==true? <h1>You are logged in</h1>:<h1>You are not logged in</h1>
            }

        { loggedIn==true?            <ul>
                <li>Homepage</li>
                <li>About us</li>
                <li>Our goals</li>
                <li>Github repository</li>
            </ul> : <h1>Login to see data</h1>
            }
            
        </div>
    );
};

export default Header;