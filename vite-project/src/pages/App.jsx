import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import List from './../component/List';
import About from "../component/About";
import Image from "../component/Image";
import Count from "../component/Count";

const App = () => {

  let loggedIn=true;

  const aboutDetail={
    name:'Nabil Shartaj Khan',
    age:24,
    profession:'Student',
    department:"CSE",
    usertype:"Admin"
  }

  const buttonClick=()=>{
    alert("You clicked the button which is a props item primarily located in App.jsx and propped in About.jsx")
  }


  
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
      <Header title="Welcome Admin" des="You are an Admin"></Header>
       <List/>
      <Image></Image>
      <Count></Count>
      <About detail={aboutDetail} click={buttonClick}></About>
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

