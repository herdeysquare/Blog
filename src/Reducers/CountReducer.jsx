import {
  ADD_AMOUNT,
  ADD_QUANTITY,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_AMOUNT,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  REMOVE_QUANTITY,
  CLEAR_CART,
} from "./Actions";


const initialState = {
  amount:0,
  quantity:0,
  cart: [],
  wishlist: [],
};

const amountQuantityReducer  = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_AMOUNT:
            
            return{
                ...state,
                amount:state.amount + action.payload
            };
            case ADD_QUANTITY:
                return{
                    ...state,
                    quantity:state.quantity + action.payload
                };
    
        default:
            return state;
    }
};

export default amountQuantityReducer;