import {combineReducers} from "redux";
import ItemReducer from './Reducers/ItemReducer'

const Reducers = combineReducers({
    Item:ItemReducer
});

export default Reducers;