import React, { Component } from "react";
import { View, Text,  } from "react-native";

export default class QuesitonView extends Component {
  render() {
    return (
      <View
        style={{
          borderColor: "#A2A2A2",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          height: 200,
          marginBottom: 20,
          backgroundColor: "#FFF",
          shadowRadius: 2, shadowOpacity: 1, shadowColor: "#C2C2C2"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginBottom: 30,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {this.props.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 40,
            fontSize: 25,
            color: this.props.color
          }}
        >
          {this.props.content}
        </Text>
      </View>
    );
  }
}
