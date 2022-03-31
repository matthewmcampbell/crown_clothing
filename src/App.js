import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";

import { useDispatch } from 'react-redux';
import Spinner from './components/spinner/spinner.component';

// Lazy loading by route
import Navigation from "./routes/navigation/navigation.component"
// const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const Home = lazy(() => import("./routes/home/home.component"))
// import Home from "./routes/home/home.component";
const Authentication = lazy(() => import("./routes/authentication/authentication.component"))
const Shop = lazy(() => import("./routes/shop/shop.component"))
const Checkout = lazy(() => import("./routes/checkout/checkout.component"))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
}, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>      
        <Route index element={<Suspense fallback={<Spinner />}><Home /></Suspense>}/>
        <Route path="shop/*" element={<Suspense fallback={<Spinner />}><Shop /></Suspense>}/>
        <Route path="auth" element={<Suspense fallback={<Spinner />}><Authentication /></Suspense>}/>
        <Route path="checkout" element={<Suspense fallback={<Spinner />}><Checkout /></Suspense>}/>
      </Route>
    </Routes>
    
  )
}

export default App;
