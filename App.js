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
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants  from "expo-constants";

const Tab = createBottomTabNavigator();

const FlashCardsStatusBar = () => {
  return (
    <View style={{ backgroundColor: "red", height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={"blue"} />
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FlashCardsStatusBar />
        <Tab.Navigator>
          <Tab.Screen name="Decks" component={DeckList} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
