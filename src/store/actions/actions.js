export const incrementCartCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};


export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};


export const removeProductInCart = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};


export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};


export const removeTodo = (todo) => {
  return {
    type: "REMOVE_TODO",
    payload: todo,
  };
};
