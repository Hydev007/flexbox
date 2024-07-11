import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">      
      <Nav />
      <h1>hola</h1>
      <div className="main">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;