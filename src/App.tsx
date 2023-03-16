import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from './store/store';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Checkout from './routes/Checkout';
import { checkSessionAsync } from './store/user/userThunks';
import './App.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkSessionAsync())
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='contact' element={<Contact />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
