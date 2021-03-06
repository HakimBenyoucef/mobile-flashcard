import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Quiz from "../components/Quiz";
import DeckList from "../components/DeckList";
import Deck from "../components/Deck";
import AddCard from "../components/AddCard";

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
          name="List of decks"
          component={DeckList}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
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
          name="New Card"
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
