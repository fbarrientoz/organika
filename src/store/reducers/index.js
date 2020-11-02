import { combineReducers } from = "redux";
import cartCounterReducer from './cartCounter';
import cartProductReducer from './cartProducts';

const rootReducer = combineReducers({
    count: cartCounterReducer,
    cart: cartProductReducer,
    
});

export default rootReducer;