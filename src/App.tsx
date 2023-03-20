import React, { useEffect, lazy, Suspense } from 'react';
import { useAppDispatch } from './store/store';
import {Routes, Route} from 'react-router-dom';
import { checkSessionAsync } from './store/user/userThunks';
import Navigation from './routes/Navigation';
import Spinner from './components/Spinner';
import {
  Container
} from './App.styles';

const Home = lazy(() => import('./routes/Home'));
const Authentication = lazy(() => import('./routes/Authentication'));
const Shop = lazy(()=> import('./routes/Shop'));
const Contact = lazy(() => import('./routes/Contact'));
const Checkout = lazy(() => import('./routes/Checkout'));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkSessionAsync())
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Container>
        <Routes>
          <Route path='/' element={<Navigation />}> 
            <Route index element={<Home />} />
            <Route path='shop/*' element={<Shop />} />
            <Route path='sign-in' element={<Authentication />} />
            <Route path='contact' element={<Contact />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
