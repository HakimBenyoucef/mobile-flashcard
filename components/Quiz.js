import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import ButtonDeck from "./ButtonDeck";
import QuesitonView from "./QuestionView";

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.route.params.deck;

    this.state = {
      currentCard: 0,
      showAnswer: false,
      textButton: "Afficher la reponse",
      checkQuestion: false,
      showScore: false,
      score: 0,
      cards: this.deck.cards,
    };

    this.showAnswer = this.showAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.goBack = this.goBack.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    this.setState({
      cards: this.deck.cards,
    });
  }

  showAnswer() {
    this.setState({
      showAnswer: true,
    });

    if (this.state.currentCard === this.state.cards.length - 1) {
      this.setState({
        showScore: true,
      });
    }
  }

  hideAnswer() {
    this.setState({
      showAnswer: false,
    });
  }

  checkQuestion(value) {
    this.setState({ checkQuestion: value });
    this.state.cards[this.state.currentCard].isCorrect = value;

    this.getScore();
  }

  getScore() {
    let correctAnswers = this.state.cards.filter((card) => {
      return card.isCorrect;
    }).length;

    this.setState({
      score: Math.round((correctAnswers * 100) / this.state.cards.length),
    });
  }

  nextQuestion() {
    this.hideAnswer();
    this.setState((prevState) => {
      return {
        currentCard: prevState.currentCard + 1,
        checkQuestion: false,
      };
    });
  }

  restart() {
    this.setState({
      currentCard: 0,
      showAnswer: false,
      checkQuestion: false,
      showScore: false,
      score: 0,
      cards: this.deck.cards.map((card) => {
        card.isCorrect = false;
        return card;
      }),
    });
  }

  goBack() {
    this.props.navigation.goBack();
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Question {this.state.currentCard + 1} / {this.state.cards.length}
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
          <QuesitonView
            title={"Question"}
            content={this.state.cards[this.state.currentCard].question}
          />

          {this.state.showAnswer && (
            <View>
              <QuesitonView
                title={"Réponse"}
                content={this.state.cards[this.state.currentCard].answer}
                color={"green"}
              />
              <View style={{ flexDirection: "row" }}>
                <Switch
                  trackColor={{ false: "#767577", true: "#0088CE" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(value) => this.checkQuestion(value)}
                  value={this.state.checkQuestion}
                />
                <Text style={{ marginLeft: 20, fontSize: 20 }}>
                  Réponse correct ?
                </Text>
              </View>
            </View>
          )}
        </View>
        <View
          style={{ width: "100%", alignSelf: "center", flexDirection: "row" }}
        >
          {this.state.currentCard === this.state.cards.length - 1 &&
          this.state.showAnswer ? (
            <View
              style={{
                width: "50%",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <ButtonDeck
                bgColor={"#CD0037"}
                textColor={"white"}
                text="Revenir aux Quizzes"
                action={this.goBack}
              />
            </View>
          ) : (
            <View
              style={{
                width: "50%",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <ButtonDeck
                bgColor={"#0088CE"}
                textColor={"white"}
                text={this.state.textButton}
                action={this.showAnswer}
              />
            </View>
          )}
          {this.state.currentCard !== this.state.cards.length - 1 ? (
            <View
              style={{
                width: "50%",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <ButtonDeck
                bgColor={"#0088CE"}
                textColor={"white"}
                text="Question suivante"
                action={this.nextQuestion}
              />
            </View>
          ) : (
            <View
              style={{
                width: "50%",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <ButtonDeck
                bgColor={"#CD0037"}
                textColor={"white"}
                text="Refaire le Quiz"
                action={this.restart}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}
