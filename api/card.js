import request from "./api";

function getAllCards() {
  return request({
    url: "card/",
    method: "GET",
  });
}

function getCard(id) {
  return request({
    url: "card/" + id,
    method: "GET",
  });
}

function deleteCard(id) {
  return request({
    url: "card/" + id,
    method: "DELETE",
  });
}

function addCard(card) {
  return request({
    url: "card/",
    method: "POST",
    data: card,
  });
}

const CardApi = {
  getAllCards,
  getCard,
  addCard,
  deleteCard,
};

export default CardApi;
