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
import Deck from "./components/Deck";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

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
    </HomeStack.Navigator>
  );
}

const FlashCardsStatusBar = () => {
  return (
    <View
      style={{ backgroundColor: "blue", height: Constants.statusBarHeight }}
    >
      <StatusBar translucent backgroundColor={"blue"} />
    </View>
  );
};

export default function App() {
  return (
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
              <Ionicons name="ios-add-circle-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
