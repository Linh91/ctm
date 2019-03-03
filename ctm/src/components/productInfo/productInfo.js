import React from 'react';

import card_274 from '../../assets/card_274.png';
import card_822 from '../../assets/card_822.png';
import card_315 from '../../assets/card_315.png';
import card_539 from '../../assets/card_539.png';
import './productInfo.css';

export const ProductInfo = ({ 
  productDescription, 
  productCashbackValue, 
  productCode
}) => {

  const imageByProductType = (productCode) => {
    if (productCode === 'CARD_274') {
      return <img src={(productCode)} alt={productCode}/>
    } else if (productCode === 'CARD_822') {
        return <img src={card_822} alt={productCode}/>
    } else if (productCode === 'CARD_315') {
        return <img src={card_315} alt={productCode}/>
    } else if (productCode === 'CARD_539') {
        return <img src={card_539} alt={productCode}/>
    }
  }

  const imageForProduct = imageByProductType(productCode)

  return (
    <div className="ProductInformationContainer">
      <div className="ImageContainer">
        {imageForProduct}
      </div>
      <div className="ProductDescriptionContainer">
        <p className="ProductDescription">{productDescription}</p>
      </div>
      <div className="VerticalBorder"></div>
      <div className="CashbackContainer">
        <h3 className="CashbackHeader">Carshback</h3>
        <h1 className="CashbackValue">£{productCashbackValue.toFixed(2)}</h1>
      </div>
    </div>
  )
}

export default ProductInfo;