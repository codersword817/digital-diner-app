import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/logout' element={<Logout />} ></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Home />} ></Route>
      </Routes>
    </>
  );
}

export default App;
