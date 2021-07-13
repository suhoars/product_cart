import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const TheHome = React.lazy(() => import('../../../pages/home/index'));
const TheCart = React.lazy(() => import('../../../pages/cart/index'));
const TheContent = () => {
  return (
      <Suspense fallback>
        <Switch>
          <Route exact path="/cart" component={TheCart} />
          <Route exact path="/" component={TheHome} />
        </Switch>
      </Suspense>
  );
};
export default TheContent;
