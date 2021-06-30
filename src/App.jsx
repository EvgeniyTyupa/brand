import React from 'react'
import './App.css';
import Main from './Pages/Main/Main';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return(
    <BrowserRouter>
      <div className="main">
       <Navbar/>
        <Switch>
          <Route exact path="/" render={()=><Main/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
