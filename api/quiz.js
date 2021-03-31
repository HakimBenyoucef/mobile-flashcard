import request from "./api";

function getAllQuizzes() {
  return request({
    url: "quiz/",
    method: "GET",
  });
}

function getQuiz(id) {
  return request({
    url: "quiz/" + id,
    method: "GET",
  });
}

function deleteQuiz(id) {
  return request({
    url: "quiz/" + id,
    method: "DELETE",
  });
}

function addQuiz(quiz) {
  return request({
    url: "quiz/",
    method: "POST",
    data: quiz,
  });
}

function updateQuiz(id, cards) {
  console.log("cards: ", cards);
  return request({
    url: "quiz/" + id,
    method: "PATCH",
    data: { cards: cards },
  });
}

const QuizApi = {
  getAllQuizzes,
  getQuiz,
  addQuiz,
  deleteQuiz,
  updateQuiz,
};

export default QuizApi;
