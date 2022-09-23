import NavBar from "./components/NavBarComponents/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import BodyStuff from "./components/BodyStuff";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';


const routes = [
  {pageName: "home", pageLink: "/"},
  {pageName: "body stuff", pageLink: "/body-stuff"},
  {pageName: "about", pageLink: "/about"},
  {pageName: "fuck", pageLink: "/fuck"}
]

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
    <NavBar routes={routes} />
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
