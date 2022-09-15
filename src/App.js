import './App.css';
import View from './View';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './List';
import Grid from './Grid';
import Details from './Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <View />
        <Routes>
          <Route path="/employees?type=list" element={<List />}></Route>
          <Route path="/employees?type=grid" element={<Grid />}></Route>
          <Route path="/employee" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
