import React from 'react';

import './App.css';
import { Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopBar from './components/TopBar';

import Home from './components/Home';
import Register from './components/Register';
import LogIn from './components/SignIn';
import Login from './components/SignIn';
import ShowUser from './components/ShowUser';
import Dashboard from './components/page';
//Redux
import { Provider } from 'react-redux';

import Activity from './components/Activity';

function App() {
  
  return (
  <div>
     <Router>
        <header>
          <h1 className="title">Fitness Tracker</h1>
          <TopBar/>
          <br/>
          <div className="display">
            <Routes>
            
              <Route path="/" element={<Home/>} />
              <Route path="/signUp" element={<Register/>} />
              <Route path="/signIn" element={<LogIn/>} />
              <Route path="/profile" element={<ShowUser />} />
              <Route path="/create" element={<Activity />} />
              <Route path="/test" element={<Dashboard/>}/>
              
            </Routes>
          </div>

        </header>
      </Router>
    </div>
  );
}

export default App;
