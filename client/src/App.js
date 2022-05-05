import React from 'react';

import './App.css';
import { Routes } from 'react-router-dom';




import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopBar from './components/TopBar';

import Home from './components/Home';
import SignUp from './components/CreateUser';
import Login from './components/SignIn';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import Activity from './components/Activity';


function App() {
  
  return (
    <Provider store={store}>
     <Router>
        <header>
          <h1 className="title">Fitness Tracker</h1>
          <TopBar/>
          <br/>
          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signUp" element={<SignUp/>} />
              <Route path="/signIn" element={<Login/>} />
              
            </Routes>
          </div>

        </header>
      </Router>
     </Provider> 
  );
}

export default App;
