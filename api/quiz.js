import request from "./apiCentral";

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
  console.log("call add quiz... ");
  return request({
    url: "quiz/",
    method: "POST",
    data: quiz,
  });
}

const QuizApi = {
  getAllQuizzes,
  getQuiz,
  addQuiz,
  deleteQuiz,
};

export default QuizApi;
