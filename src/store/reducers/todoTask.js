
const todoTaskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      var copy = [...state]; 
      copy.push(action.payload); 
      return copy; 
    case "REMOVE_TODO":
   
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoTaskReducer;
