import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';

function App () {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route from='/' element={<Navigate to="/home"/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
