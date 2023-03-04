import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import './App.css';

const App = () => (
  <Routes>
    <Route path='/' element={<Navigation />}> 
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

export default App;
