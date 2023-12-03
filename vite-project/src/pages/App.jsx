import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";

const App = () => {


  
  return (
    <div>

      <h1 style={{
        color:'red',
        fontFamily:'sans-serif'
      }}> 

      Welcome to the React tutorial
      
      </h1>

      <Header></Header>
      <Contact></Contact>
      <Footer></Footer>

    </div>

  );
};

export default App;

