import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component() {
  render() {
    return (
      <>
        <header className>
          <Header />
        </header>
        <main className="app">
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
