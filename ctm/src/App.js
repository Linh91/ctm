import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getIsProductOneShowing,
  getIsProductTwoShowing,
  getIsProductThreeShowing,
  getIsProductFourShowing,
} from './core/selector';
import {
  openProductOneInfoAction,
  openProductTwoInfoAction,
  openProductThreeInfoAction,
  openProductFourInfoAction
} from './core/actions';
import ProductDropdownBox from './components/productDropdownBox/productDropdownBox';
import HeaderMenu from './components/headerMenu/headerMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.openProductOneInfo = this.openProductOneInfo.bind(this)
    this.openProductTwoInfo = this.openProductTwoInfo.bind(this)
    this.openProductThreeInfo = this.openProductThreeInfo.bind(this)
    this.openProductFourInfo = this.openProductFourInfo.bind(this)
  }

  openProductOneInfo() {
    this.props.openProductOneInfo()
  }

  openProductTwoInfo() {
    this.props.openProductTwoInfo()
  }

  openProductThreeInfo() {
    this.props.openProductThreeInfo()
  }

  openProductFourInfo() {
    this.props.openProductFourInfo()
  }

  render() {
    const { isProductOneShowing, isProductTwoShowing, isProductThreeShowing, isProductFourShowing } = this.props
    let cards = require('./cards.json')
    const cardsSortedByApr = cards.sort((a, b) => a.apr - b.apr)

    const generateProductComponent = (card, buttonAction, showMoreInfo) => {
      return (
        <ProductDropdownBox
          productName={card.name}
          productApr={card.apr}
          productDescription={card.information}
          productCashbackValue={card.cashback}
          imageSrc={card.code}
          buttonAction={buttonAction}
          showMoreInfo={showMoreInfo} />)
}

    const productItem1 = generateProductComponent(cardsSortedByApr[0], this.openProductOneInfo, isProductOneShowing)
    const productItem2 = generateProductComponent(cardsSortedByApr[1], this.openProductTwoInfo, isProductTwoShowing)
    const productItem3 = generateProductComponent(cardsSortedByApr[2], this.openProductThreeInfo, isProductThreeShowing)
    const productItem4 = generateProductComponent(cardsSortedByApr[3], this.openProductFourInfo, isProductFourShowing)

    return (
      <div className="App">
        <div className="LogoContainer">
          <img src={logo} alt='Compare the market logo' className="Logo"/>
        </div>
        <HeaderMenu />
        <div className="ProductsSection">
          {productItem1}
          {productItem2}
          {productItem3}
          {productItem4}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isProductOneShowing: getIsProductOneShowing(state),
    isProductTwoShowing: getIsProductTwoShowing(state),
    isProductThreeShowing: getIsProductThreeShowing(state),
    isProductFourShowing: getIsProductFourShowing(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openProductOneInfo: () => {
      dispatch(
        openProductOneInfoAction()
      )},
    openProductTwoInfo: () => {
      dispatch(
        openProductTwoInfoAction()
    )},
    openProductThreeInfo: () => {
      dispatch(
        openProductThreeInfoAction()
    )},
    openProductFourInfo: () => {
      dispatch(
        openProductFourInfoAction()
    )}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
