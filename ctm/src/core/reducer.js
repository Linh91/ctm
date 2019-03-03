import {
  OPEN_PRODUCT_ONE_INFO_ACTION,
  OPEN_PRODUCT_TWO_INFO_ACTION,
  OPEN_PRODUCT_THREE_INFO_ACTION,
  OPEN_PRODUCT_FOUR_INFO_ACTION
} from './actions';

export const ctmState = {
  productOneInfoShow: false,
  productTwoInfoShow: false,
  productThreeInfoShow: false,
  productFourInfoShow: false,
}

export function reducer(state = ctmState, action) {
  switch(action.type) {
    case OPEN_PRODUCT_ONE_INFO_ACTION:
      return {
        ...state,
        productOneInfoShow: !state.productOneInfoShow,
        productTwoInfoShow: false,
        productThreeInfoShow: false,
        productFourInfoShow: false,
      }
    case OPEN_PRODUCT_TWO_INFO_ACTION:
      return {
        ...state,
        productOneInfoShow: false,
        productTwoInfoShow: !state.productTwoInfoShow,
        productThreeInfoShow: false,
        productFourInfoShow: false,
      }
    case OPEN_PRODUCT_THREE_INFO_ACTION:
      return {
        ...state,
        productOneInfoShow: false,
        productTwoInfoShow: false,
        productThreeInfoShow: !state.productThreeInfoShow,
        productFourInfoShow: false,
      }
    case OPEN_PRODUCT_FOUR_INFO_ACTION:
      return {
        ...state,
        productOneInfoShow: false,
        productTwoInfoShow: false,
        productThreeInfoShow: false,
        productFourInfoShow: !state.productFourInfoShow,
      }
    default:
      return state;
  }
}
