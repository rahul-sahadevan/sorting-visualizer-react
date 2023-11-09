import { createStore } from "redux";
import { actionReducer } from "./reducer/actionReducer";


const store = createStore(actionReducer);
export default store;
