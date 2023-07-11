import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Base from '../components/Base';
import Purchase from '../pages/Purchase';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import NoProduct from '../pages/NoProduct';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="" element={<BaseRoutes />} >
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="purchase" element={<Purchase />} />
              <Route path="noproduct" element={<NoProduct />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

const BaseRoutes: React.FC<any> = ({ children }) => {

  return (
    <Base>
      <Outlet />
    </Base>
  )
}

export default AppRoutes;
