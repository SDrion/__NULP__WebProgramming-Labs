import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './app.css';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';
import { Main } from './views/Main/Main';
import { Catalog } from './views/Catalog/Catalog';
import { Cart } from './views/Cart/Cart';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Main}/>
        <Route path={"/catalog"} exact component={Catalog}/>
        <Route path={"/cart"} exact component={Cart}/>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
