import request from "./api";

function login(username, password) {
  return request({
    url: "user/login",
    method: "POST",
    data: {
      username,
      password,
    },
  });
}

const UserApi = {
  login,
};

export default UserApi;
