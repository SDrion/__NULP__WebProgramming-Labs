import React from 'react';

import './app.css';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';
import { Main } from './views/Main/Main';


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
