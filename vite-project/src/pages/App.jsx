import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import List from './../component/List';

const App = () => {

  let loggedIn=true;


  
  return (

    
    <div>
      {loggedIn==true ? 
      
      
      <> 
      <h1 style={{
        color:'red',
        fontFamily:'sans-serif'
      }}> 

      Welcome to the React tutorial

      </h1>

      <button>LOGOUT</button>
      <Header></Header>
      <List/>
      <Contact></Contact>
      <Footer></Footer>

    
    </>
    
    :
    
    <>
    <h1>Not logged in. Check App.jsx and make sure loggedIn is set to true</h1>
    <button>LOGIN</button> <br></br>
    Sample login button to simulate the scenario of loggin in when not logged in.
    </>
  }



  </div>

  );
};

export default App;

