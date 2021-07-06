import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const TheHome = React.lazy(() => import('../../../pages/home/index'));
const TheCart = React.lazy(() => import('../../../pages/cart/index'));
const TheContent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback>
        <Switch>
          <Route exact path="/" component={TheHome} />
          <Route exact path="/cart" component={TheCart} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default TheContent;
