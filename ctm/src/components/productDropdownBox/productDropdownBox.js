import React, { Component } from 'react';

import { RightArrowButton } from '../../web/icons/index';
import ProductInfo from '../productInfo/productInfo';
import './productDropdownBox.css';

class ProductDropdownBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMoreInfoClicked: false,
      productBoxOpen: '',
      showProductInfo: false
    }
  }

  render() {
    const clickEvent = (i) => {
      console.log(i)
      this.setState({ 
        showMoreInfoClicked: !this.state.showMoreInfoClicked, 
        productBoxOpen: i
      })
    }

    const toggleProductInformationSection = 
      this.state.showMoreInfoClicked ? (
        <ProductInfo
          active={this.state.productBoxOpen === this.props.productName}
          productDescription={this.props.productDescription}
          productCashbackValue={this.props.productCashbackValue}
          productCode={this.props.imageSrc} />
      ) : null

    const boxContainerClasses = this.state.showMoreInfoClicked ? "BoxContainer BoxContainerOpen" : "BoxContainer"
  
    return (
      <div className="ListContainer">
        <div className={boxContainerClasses}>
          <div className="Icon">
            <button onClick={() => clickEvent(this.props.productName)} className="ButtonContainer">
              <RightArrowButton clicked={this.state.showMoreInfoClicked}/>
            </button>
          </div>
          <h3 className="ProductName">{this.props.productName}</h3>
          <div className="RightTextContainer">
            <h3 className="RightText">{this.props.productApr}% APR</h3>
          </div>
        </div>
        {toggleProductInformationSection}
      </div>
    )
  }
};
  
export default ProductDropdownBox;