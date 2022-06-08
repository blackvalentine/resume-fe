import axiosClient from "./axiosClient";

const getAll = (userId) => {
  const url = `/user/get-users?id=${userId}`;
  return axiosClient.get(url, { userId })
}

const loginUser = (dataUser) => {
  const url = '/user/login-user';
  return axiosClient.post(url, {
    email: dataUser.userNameLogin,
    password: dataUser.passwordLogin
  })
}

const createUser = (dataUser) => {
  const url = '/user/create-user';
  return axiosClient.post(url, {
    email: dataUser.emailRegister,
    userName: dataUser.userNameRegister,
    password: dataUser.passwordRegister,
  })
}

const logoutUser = () => {
  const url = '/user/logout-user';
  return axiosClient.post(url)
}

const getToken = () => {
  const url = '/user/get-token';
  return axiosClient.get(url)
}

const userApi = {
  getAll,
  loginUser,
  createUser,
  logoutUser,
  getToken
}

export default userApi;