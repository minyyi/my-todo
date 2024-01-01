import React from "react";
import ReactDOM from "react-dom";
// import { legacy_createStore as createStore } from "redux";
import store from "./RTK/storeRTK";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
// import rootReducer from "./module/index";

//스토어 만들기, redux devtools 적용하기
// const store = createStore(rootReducer, composeWithDevTools());

// 스토어를 사용할 수 있도록 Provider 컴포넌트로 감싸 주기 이때 store를 props로 전달해주어야 한다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
