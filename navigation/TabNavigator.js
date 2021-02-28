import React, { Component } from "react";
import {View, StatusBar} from 'react-native'
import { NavigationContainer,} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "../components/AddDeck";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const FlashCardsStatusBar = () => {
  return (
    <View
      style={{ backgroundColor: "#0088CE", height: Constants.statusBarHeight }}
    >
      <StatusBar translucent backgroundColor={"#0088CE"} />
    </View>
  );
};

export default class TabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <FlashCardsStatusBar />
        <Tab.Navigator>
          <Tab.Screen
            name="Decks"
            component={StackNavigator}
            options={{
              tabBarLabel: "Quizzes",
              tabBarIcon: ({ color }) => (
                <Ionicons name="ios-folder" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Add Deck"
            component={AddDeck}
            options={{
              tabBarLabel: "Ajouter un Quiz",
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
    );
  }
}
