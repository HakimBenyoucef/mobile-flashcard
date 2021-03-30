import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {View, StatusBar} from 'react-native'

import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

import Constants from "expo-constants";
import Connexion from "../components/Connexion";

const Drawer = createDrawerNavigator();
const FlashCardsStatusBar = () => {
    return (
      <View
        style={{ backgroundColor: "#0088CE", height: Constants.statusBarHeight }}
      >
        <StatusBar translucent backgroundColor={"#0088CE"} />
      </View>
    );
  };

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <FlashCardsStatusBar />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Admin" component={Connexion} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
