import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import List from './../component/List';
import About from "../component/About";
import Image from "../component/Image";
import Count from "../component/Count";
import Todo from "../component/Todo";
import Form from "../component/Form";
import Apicall from "../component/Apicall";   
import NotFound from "../component/NotFound";
import Navlink from "../component/Navlink";


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
      <Header title="Welcome Admin" des="You are an Admin"></Header>
      
      {/* <BrowserRouter>
      <Navlink></Navlink>
      <Routes>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/image' element={<Image></Image>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/count' element={<Count></Count>}></Route>
        <Route path='/api' element={<Apicall></Apicall>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About detail={aboutDetail} click={buttonClick}></About>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
      </BrowserRouter> */}


      <HashRouter>
      <Navlink></Navlink>
      <Routes>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/image' element={<Image></Image>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/count' element={<Count></Count>}></Route>
        <Route path='/api' element={<Apicall></Apicall>}></Route>
        <Route path='/contact/:id/:name' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About detail={aboutDetail} click={buttonClick}></About>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>

      </HashRouter>
      <button>LOGOUT</button>

    
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

