import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Picture from './components/Picture';
import ShowData from './components/ShowData';

 function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Picture/>} />
        <Route path='/showdata/:id' element={<ShowData/>} />
        {/* <Route path='/' element={<Home/>} />
        <Route path='/profile/:id' element={<Profile/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
