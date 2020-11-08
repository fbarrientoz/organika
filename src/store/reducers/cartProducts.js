const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state]; 

      var alreadyThere = false;

    
      for (let i = 0; i < copy.length; i++) {
        var p = copy[i];

        if (action.payload.product.id === p.product.id) {
          p.quantity = action.payload.quantity + p.quantity;
          alreadyThere = true;
        }
      }

    
      if (!alreadyThere) {
        copy.push(action.payload);
      }

    

      return copy; // return copy
    case "REMOVE_PRODUCT":
    
      return state.filter((pc) => pc.product.id !== action.payload.product.id);

    default:
      return state;
  }
};

export default cartProductsReducer;
