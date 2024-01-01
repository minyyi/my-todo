import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./index";

const store = createStore(rootReducer);
export default store;
