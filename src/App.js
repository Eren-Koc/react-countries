import './App.css';

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import All from './pages/All';
import Asia from './pages/Asia';
import Africa from './pages/Africa';
import Australia from './pages/Australia';
import Europe from './pages/Europe';
import NorthAmerica from './pages/NorthAmerica';
import SouthAmerica from './pages/SouthAmerica';

function App() {

  

  return (
    
    <div className="App w-full min-h-screen h-fit">
      <BrowserRouter>
      <Routes>
        <Route index element={<All/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/asia' element={<Asia/>}/>
        <Route path='/africa' element={<Africa/>}/>
        <Route path='/australia' element={<Australia/>}/>
        <Route path='/europe' element={<Europe/>}/>
        <Route path='/north-america' element={<NorthAmerica/>}/>
        <Route path='/south-america' element={<SouthAmerica/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
