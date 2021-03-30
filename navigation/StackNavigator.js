import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Quiz from "../components/Quiz";
import DeckList from "../components/DeckList";
import Deck from "../components/Deck";
import AddCard from "../components/AddCard";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();
HomeStack.navigationOptions = {
  headerForceInset: { top: "never", bottom: "never" },
  header: null,
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default class StackNavigator extends Component {
  render() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Liste des Quizzes"
          component={DeckList}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}
                style={{ width: "150%", marginLeft: 10 }}
              >
                <Ionicons name="menu-outline"  size={35} />
              </TouchableOpacity>
            ),
          }}
        />
        <HomeStack.Screen
          name="Details"
          component={Deck}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <HomeStack.Screen
          name="Nouvelle carte"
          component={AddCard}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <HomeStack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </HomeStack.Navigator>
    );
  }
}
