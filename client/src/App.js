import NavBar from "./components/NavBarComponents/NavBar";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Organs from "./components/OrgansComponent";
import Comment from "./components/CommentComponent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';


const routes = [
  {pageName: "Home", pageLink: "/"},
  {pageName: "Organs", pageLink: "/organs"},
  {pageName: "About", pageLink: "/about"},
  {pageName: "Comment", pageLink: "/comment"}
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
        <Route path="/organs" element={< Organs />}/>
        <Route path="/about" element={< About />}/>
        <Route path="/comment" element={< Comment />}/>
      </Routes>

    </Router>
    </div>
      
  );
}

export default App;
