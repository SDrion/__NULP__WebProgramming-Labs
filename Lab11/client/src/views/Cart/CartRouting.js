import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Cart } from './Cart';
import { Checkout } from '../Checkout/Checkout';
import { Success } from '../Success/Success';

export const CartRouting = () => {
  const match = useRouteMatch();
  return (
    <div className="router_wrapper">
      <Switch>
        <Route path={`${match.path}/checkout`} exact component={Checkout} />
        <Route path={`${match.path}/checkout/success`} exact component={Success} />
        <Route path={`${match.path}`} exact component={Cart}></Route>
      </Switch>
    </div>
  )
}