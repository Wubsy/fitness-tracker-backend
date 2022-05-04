import React from 'react';

import './App.css';
import { Routes } from 'react-router-dom';




import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopBar from './components/TopBar';

import Home from './components/Home';
import CreateUser from './components/CreateUser';





import Activity from './components/Activity';


function App() {
  
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Fitness Tracker</h1>
          <TopBar/>
          <br/>
          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Activity />} />
              <Route path="/log" element={<CreateUser/>} />
            </Routes>
          </div>

        </header>
      </Router>
    </div>
  );
}

export default App;
