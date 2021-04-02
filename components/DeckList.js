import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import DeckHeader from "./DeckHeader";
import { connect } from "react-redux";
import QuizApi from "../api/quiz";
import { updateDecks } from "../store/actions/decks";
import { updateAdmin } from "../store/actions/admin";

class DeckList extends Component {
  state = { quizzes: [], refreshing: false };
  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
  }
  componentDidMount() {
    this.props.updateAdmin(false);
    this.getAllQuizzes();
  }

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#C2C2C2",
        height: 0.5,
      }}
    />
  );

  wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  onRefresh() {
    this.setState({ refreshing: true });
    this.getAllQuizzes();
    this.wait(2000).then(() => this.setState({ refreshing: false }));
  }

  getAllQuizzes() {
    QuizApi.getAllQuizzes().then((quizzes) => {
      this.setState({ quizzes });
      this.props.updateDecks([...quizzes]);
    });
  }

  render() {
    return (
      <SafeAreaView>
        {!this.props.decks || !this.props.decks.length ? (
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              padding: 40,
            }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <View>
              <Text style={{ fontSize: 36, textAlign: "center" }}>
                La liste des Quizzes est vide
              </Text>
            </View>
          </ScrollView>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
            data={this.props.decks ? this.props.decks : []}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Details", { deck: item })
                }
              >
                <DeckHeader deck={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (data) => dispatch(updateDecks(data)),
    updateAdmin: (data) => dispatch(updateAdmin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
