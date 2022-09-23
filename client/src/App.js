import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import BodyStuff from "./components/BodyStuff";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';


const Test = function(){
  return (
    <h1>Testing</h1>
  )
};
const Test1 = function(){
  return (
    <h3>Testing</h3>
  )
};


function App() {
  return (

    <div className="App">
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/body-stuff" element={< BodyStuff />}/>
        <Route path="/about" element={< About />}/>
      </Routes>

    </Router>
    </div>
      
  );
}

export default App;
