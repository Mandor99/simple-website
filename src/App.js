import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/contact" component= {Contact}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
