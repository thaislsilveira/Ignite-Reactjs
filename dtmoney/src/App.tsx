import React from 'react';
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export default App;
