import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home';
import Categ from './components/Scateg/categ';
import Single from './pages/single/single';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:id' element={<Single/>}/>
      </Routes>
    </div>
  );
}

export default App;
