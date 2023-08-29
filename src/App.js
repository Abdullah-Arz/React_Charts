import React from 'react';
import MainScreen from './screens/MainScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Analytics from './screens/Analytics';
import Sales from './screens/Sales';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainScreen />} /> */}
        <Route path="/" element={<Analytics />} />
        {/* <Route path="/sales" element={<Sales />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
