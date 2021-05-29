import React from 'react'
import "./App.css"
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar.js'
import RowPost from './Components/rowPost/RowPost'
import {action,originals,romance,horror} from "./Components/urls"
function App() {
  
  return (
    <div>
      <NavBar></NavBar>
    <Banner/>
    <RowPost url={originals} title="Netflix Orgiginals"/>
    <RowPost url={action} isSmall title="Action"/>
    <RowPost url={romance} isSmall title="Romance"/>
    <RowPost url={horror} isSmall title="Horror"/>
    </div>
  )
}

export default App
