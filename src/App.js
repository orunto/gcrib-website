import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Landing, Blog, StarterPack, ErrorPage} from './pages'; 

import './App.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/starterpack' element={<StarterPack />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
