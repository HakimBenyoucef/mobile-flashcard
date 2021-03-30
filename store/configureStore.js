import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import decks from "./reducers/decks";
import admin from "./reducers/admin";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "flashCardStore",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  decks: decks,
  admin: admin,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(/*createLogger()*/)
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
