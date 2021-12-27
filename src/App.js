import React, { Component } from 'react';
import './App.css';
import Header from './Page/Header';
import Footer from './Page/Footer';
import ListMenuUtama from './ListData/ListMenuUtama';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListMenuUtama />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}


export default App;
