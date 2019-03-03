import React, { Component } from 'react';

import { RightArrowButton } from '../../web/icons/index';
import ProductInfo from '../productInfo/productInfo';
import './productDropdownBox.css';

class ProductDropdownBox extends Component {
  render() {
    const moreProductInformationComponent = (
        <ProductInfo
          productDescription={this.props.productDescription}
          productCashbackValue={this.props.productCashbackValue}
          productCode={this.props.imageSrc} />
      )
    const boxContainerClasses = this.props.showMoreInfo ? "BoxContainer BoxContainerOpen" : "BoxContainer"

    return (
      <div className="ListContainer">
        <div className={boxContainerClasses}>
          <div className="Icon">
            <button onClick={this.props.buttonAction} className="ButtonContainer">
              <RightArrowButton clicked={this.props.showMoreInfo}/>
            </button>
          </div>
          <h3 className="ProductName">{this.props.productName}</h3>
          <div className="RightTextContainer">
            <h3 className="RightDivText">{this.props.productApr}% APR</h3>
          </div>
        </div>
        {this.props.showMoreInfo ? moreProductInformationComponent : null}
      </div>
    )
  }
};
  
export default ProductDropdownBox;