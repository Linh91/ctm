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

    const productItem1 = (
      <ProductDropdownBox
        productName={cardsSortedByApr[0].name}
        productApr={cardsSortedByApr[0].apr}
        productDescription={cardsSortedByApr[0].information}
        productCashbackValue={cardsSortedByApr[0].cashback}
        imageSrc={cardsSortedByApr[0].code}
        buttonAction={this.openProductOneInfo}
        showMoreInfo={isProductOneShowing} />
    )

    const productItem2 = (
      <ProductDropdownBox
        productName={cardsSortedByApr[1].name}
        productApr={cardsSortedByApr[1].apr}
        productDescription={cardsSortedByApr[1].information}
        productCashbackValue={cardsSortedByApr[1].cashback}
        imageSrc={cardsSortedByApr[1].code}
        buttonAction={this.openProductTwoInfo}
        showMoreInfo={isProductTwoShowing} />
    )

    const productItem3 = (
      <ProductDropdownBox
        productName={cardsSortedByApr[2].name}
        productApr={cardsSortedByApr[2].apr}
        productDescription={cardsSortedByApr[2].information}
        productCashbackValue={cardsSortedByApr[2].cashback}
        imageSrc={cardsSortedByApr[2].code}
        buttonAction={this.openProductThreeInfo}
        showMoreInfo={isProductThreeShowing} />
    )

    const productItem4 = (
      <ProductDropdownBox
        productName={cardsSortedByApr[3].name}
        productApr={cardsSortedByApr[3].apr}
        productDescription={cardsSortedByApr[3].information}
        productCashbackValue={cardsSortedByApr[3].cashback}
        imageSrc={cardsSortedByApr[3].code}
        buttonAction={this.openProductFourInfo}
        showMoreInfo={isProductFourShowing} />
    )

    return (
      <div className="App">
        <div className="LogoContainer">
          <img src={logo} alt='compare the market logo' className="Logo"/>
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
