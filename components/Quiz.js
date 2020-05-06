import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import ButtonDeck from "./ButtonDeck";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      showAnswer: false,
      textButton: "Show the answer",
      checkQuestion: false,
      showScore: true,
      score: 0,
    };

    this.deck = this.props.route.params.deck;

    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer() {
    this.setState({
      showAnswer: true,
    });
  }

  checkQuestion(value) {
    this.setState({ checkQuestion: value });
    this.deck.cards[this.state.currentCard].isCorrect = value;

    this.getScore();
  }

  getScore() {
    let correctAnswers = this.deck.cards.filter((card) => card.isCorrect)
      .length;

    this.setState({
      score: (correctAnswers * 100) / this.deck.cards.length,
    });
  }

  render() {
    return (
      <View style={{ padding: 20, justifyContent: "space-between", flex: 1 }}>
        <View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20 }}>
              Question {this.state.currentCard + 1} / {this.deck.cards.length}
            </Text>
            {this.state.showScore && (
              <Text
                style={{
                  fontSize: 20,
                  color: this.state.score >= 50 ? "green" : "red",
                }}
              >
                Score: {this.state.score}%
              </Text>
            )}
          </View>
          <View
            style={{
              borderColor: "#A2A2A2",
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              height: 100,
              marginBottom: 20,
            }}
          >
            <Text>{this.deck.cards[this.state.currentCard].question}</Text>
          </View>
          {this.state.showAnswer && (
            <View>
              <View
                style={{
                  borderColor: "#A2A2A2",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  height: 100,
                  marginBottom: 20,
                }}
              >
                <Text style={{ color: "green" }}>
                  {this.deck.cards[this.state.currentCard].answer}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Switch
                  trackColor={{ false: "#767577", true: "#0088CE" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(value) => this.checkQuestion(value)}
                  value={this.state.checkQuestion}
                />
                <Text style={{ marginLeft: 20, fontSize: 20 }}>
                  Correct answer ?
                </Text>
              </View>
            </View>
          )}
        </View>
        <View style={{ width: "50%", alignSelf: "center" }}>
          <ButtonDeck
            bgColor={"#0088CE"}
            textColor={"white"}
            text={this.state.textButton}
            action={this.showAnswer}
          />
        </View>
      </View>
    );
  }
}
