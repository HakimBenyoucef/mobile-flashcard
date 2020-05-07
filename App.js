import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import TabNavigator from "./navigation/TabNavigator";



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TabNavigator/>
      </PersistGate>
    </Provider>
  );
}
