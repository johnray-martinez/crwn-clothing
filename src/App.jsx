import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Checkout from './routes/Checkout';
import './App.css';

const App = () => (
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

export default App;
