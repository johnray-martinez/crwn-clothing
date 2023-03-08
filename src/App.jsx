import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Checkout from './routes/Checkout';
import { setCurrentUser } from './store/user/userAction';
import { 
  onAuthStateChangedListener, 
  createUserDocumentFromAuth 
} from './utils/firebase/firebase';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
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
