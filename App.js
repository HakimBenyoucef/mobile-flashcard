import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import DrawerNavigator from "./navigation/DrawerNavigator";



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerNavigator/>
      </PersistGate>
    </Provider>
  );
}
