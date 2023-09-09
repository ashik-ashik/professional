import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Globals/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
