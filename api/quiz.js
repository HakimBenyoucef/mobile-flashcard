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

function addQuiz(name) {
  console.log("call add quiz... ");
  return request({
    url: "quiz/",
    method: "POST",
    data: {
      name,
    },
  });
}

const QuizApi = {
  getAllQuizzes,
  getQuiz,
  addQuiz,
  deleteQuiz,
};

export default QuizApi;
