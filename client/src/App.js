import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Wall from './Components/Wall/Wall';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Wall></Wall>}></Route>
      </Routes>
    </div>
  );
}

export default App;
