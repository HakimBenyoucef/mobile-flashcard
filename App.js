import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Deck from "./components/Deck";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store, persistor } from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
HomeStack.navigationOptions = {
  headerForceInset: { top: "never", bottom: "never" },
  header: null,
};
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="List of decks" component={DeckList} />
      <HomeStack.Screen name="Details" component={Deck} />
      <HomeStack.Screen name="New Card" component={AddCard} />
    </HomeStack.Navigator>
  );
}

const FlashCardsStatusBar = () => {
  return (
    <View
      style={{ backgroundColor: "#0088CE", height: Constants.statusBarHeight }}
    >
      <StatusBar translucent backgroundColor={"#0088CE"} />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <FlashCardsStatusBar />
          <Tab.Navigator>
            <Tab.Screen
              name="Decks"
              component={HomeStackScreen}
              options={{
                tabBarLabel: "Decks",
                tabBarIcon: ({ color }) => (
                  <Ionicons name="ios-folder" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Add Deck"
              component={AddDeck}
              options={{
                tabBarLabel: "New Deck",
                tabBarIcon: ({ color }) => (
                  <Ionicons
                    name="ios-add-circle-outline"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const stylesƒ = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C2C2C2",
    alignItems: "center",
    justifyContent: "center",
  },
});
