import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './app.css';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';
import { Main } from './views/Main/Main';
import { Catalog } from './views/Catalog/Catalog';
import { CartRouting } from './views/Cart/CartRouting';


function App() {
  return (
    <div className="wrapper">
      <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Main}/>
        <Route path={"/catalog"} component={Catalog} />
        <Route path={"/cart"} component={CartRouting}/>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
