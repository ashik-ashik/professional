import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Globals/Header/Header';
import Home from './Pages/Home/Home';
import SingleBlogs from './Pages/Globals/SingleBlogs/SingleBlogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/read/:title' element={<SingleBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
