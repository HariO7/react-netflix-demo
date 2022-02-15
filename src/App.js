
import React , {useState,useEffect} from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals_url,action_url} from './Components/urls';

function App() {
  const [state,setState] = useState([])
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title = 'Netflix Originals' url={originals_url}/>
      <RowPost title = 'action' isSmall url={action_url} />
    </div> 
  )
}

export default App;
