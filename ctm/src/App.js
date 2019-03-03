import React, { Component } from 'react';

import ProductDropdownBox from './components/productDropdownBox/productDropdownBox';
import HeaderMenu from './components/headerMenu/headerMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let cards = require('./cards.json')

    const cardsSortedByApr = cards.sort((a, b) => a.apr - b.apr)
    const productItem = (
      <div className="ProductsSection">
        {cardsSortedByApr.map(eachCard => {
          return (
            <div className="ProductDropdownBoxContainer">
              <ProductDropdownBox
                      key={eachCard.apr}
                      productName={eachCard.name}
                      productApr={eachCard.apr}
                      productDescription={eachCard.information}
                      productCashbackValue={eachCard.cashback}
                      imageSrc={eachCard.code} />

            </div>
          )

        })}
      </div>
    )
    return (
      <div className="App">
      {/* <div> */}
        <div className="LogoContainer">
          <img src={logo} alt='compare the market logo' className="Logo"/>
        </div>
        <HeaderMenu />
        {productItem}
      {/* </div> */}
      </div>
    );
  }
}

export default App;
