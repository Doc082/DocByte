import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./features/component/Header";
import Body from "./features/component/Body";
import Chisono from "./features/component/Chisono";
import Preventivo from "./features/component/Preventivo";

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Header/>
        <div className="row d-flex justify-content-center">
            <Routes>
                <Route path="/" element={<Body/>} />
                <Route path="/chi_sono" element={<Chisono/>} />
                <Route path="/richiedi_preventivo" element={<Preventivo/>} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
