import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// logger: action dispatch前のstoreの状態とdispatch実行後の状態を見るのに便利
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middlewares: reducer実行前
const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  thunk
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
