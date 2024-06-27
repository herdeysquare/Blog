export const ADD_AMOUNT = 'add_amount';
export const REMOVE_AMOUNT = 'remove_amount';
export const ADD_QUANTITY = 'add_quantity';
export const REMOVE_QUANTITY = 'remove_quantity';
 export const ADD_TO_CART = 'add_to_cart';
 export const REMOVE_FROM_CART = 'remove_from_cart';
 export const CLEAR_CART = 'clear_cart';
 export const ADD_TO_WISHLIST = 'add_to_wishlist';
 export const REMOVE_FROM_WISHLIST = 'remove_from_wishlist';

export const addAmount = (amount)=>({type: ADD_AMOUNT, payload:amount});

export const removeAmount = (amount)=>({type: REMOVE_AMOUNT, payload:amount});

export const addQuantity = (quantity)=>({type: ADD_QUANTITY, payload:quantity});

export const removeQuantity = (quantity)=>({type: REMOVE_QUANTITY, payload:quantity});

export const addToCart = (product)=>({type: ADD_TO_CART, payload:product});

export const removeFromCart = (product)=>({type: REMOVE_FROM_CART, payload:product});

export const clearCart = ()=>({type: CLEAR_CART});

export const addToWishlist = (product)=>({type: ADD_TO_WISHLIST, payload:product});

export const removeFromWishlist = (product)=>({type: REMOVE_FROM_WISHLIST, payload:product});
