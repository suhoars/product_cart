import './assets/stylesheet/style.scss'
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getCategoriesList } from './pages/category/stores/actions';

const TheLayout = React.lazy(() => import('./shared/components/layout/TheLayout'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesList())
  });
  return (
    <BrowserRouter>
      <Suspense fallback>
        <Switch>
          <Route path="/" component={TheLayout} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

