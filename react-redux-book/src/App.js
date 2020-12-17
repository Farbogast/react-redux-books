import React from 'react'
import './App.css';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import BookList from './containers/BookList';
import Navbar from './containers/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path={'/'} exact component={BookList}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

export default App;
