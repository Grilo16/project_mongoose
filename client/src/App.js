import logo from './logo.svg';
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
    {/* <NavBar/> */}
    <Router>
      <Routes>
        <Route element={<Test/>} path="/home"/>
        <Route element={<Test1/>} path="/home1"/>
      </Routes>

    </Router>
    </div>
      
  );
}

export default App;
