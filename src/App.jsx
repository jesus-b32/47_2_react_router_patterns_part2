import React, {useState, useEffect} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import ColorPage from './ColorPage';

import './App.css'

function App() {
  const [colors, setColors] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem("colorsList")){
      const colorsObj = JSON.parse(localStorage.getItem("colorsList"));
      setColors(colors => colorsObj);
    }
  },[])

  return (
    <div>
        <Routes>
          <Route path='/colors' element={<ColorList colors={colors}/>}/>
          <Route path='/colors/:name' element={<ColorPage colors={colors}/>}/>
          <Route path='/colors/new' element={<NewColorForm addColor={setColors}/>}/>
          <Route path='/*' element={<Navigate to='/colors'/>}/>
        </Routes>
    </div>
  )
}

export default App
