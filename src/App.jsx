import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import ColorList from './ColorList';
import FindColor from './FindColor';
import NewColorForm from './NewColorForm';
// import ColorPage from './ColorPage';

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<ColorList colors={colors}/>}/>
          <Route path='/colors/:name' element={<FindColor colors={colors}/>}/>
          <Route path='/colors/new' element={<NewColorForm addColors={colors}/>}/>
          <Route path='/*' element={<Navigate to='/colors'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
