import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "../components/AddDeck";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

class TabNavigator extends Component {
  render() {
    return (
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
        {this.props.isAdmin && (
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
        )}
      </Tab.Navigator>
    );
  }
}
const mapStateToProps = (state) => ({
  isAdmin: state.admin.isAdmin,
});

export default connect(mapStateToProps, null)(TabNavigator);
