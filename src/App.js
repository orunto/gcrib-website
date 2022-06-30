import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Landing, StarterPack, ErrorPage} from './pages'; 
import { Reads, Casual, Friday, Outfit, Sneakers, Versatile } from './pages/blog'; 

import './App.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/blog' element={<Reads />}/>
          <Route path='/blog/casual' element={<Casual />}/>
          <Route path='/blog/friday' element={<Friday />}/>
          <Route path='/blog/outfit' element={<Outfit />}/>
          <Route path='/blog/sneakers' element={<Sneakers />}/>
          <Route path='/blog/versatile' element={<Versatile />}/>
          <Route path='/starterpack' element={<StarterPack />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
