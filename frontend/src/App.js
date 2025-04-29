import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home';

import { useSelector } from 'react-redux';

import Cart from './components/Cart';
import History from './components/History';



function App() {
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/cart' element={<Cart items={cartItems} />} ></Route>
        <Route path='/history' element={<History />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/logout' element={<Logout />} ></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Home />} ></Route>
      </Routes>
    </>
  );
}

export default App;
