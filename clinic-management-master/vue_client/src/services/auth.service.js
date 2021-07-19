import axios from "axios";

const authService = {
  login: (email, password) => {
    return axios.get(`/user`, {
      headers: {
        authorization: `Basic ${btoa(`${email}:${password}`)}`
      }
    });
  },
  check: () => {
    return axios.get(`/user`);
  },
  logout: () => {
    return axios.post(`/logout`);
  }
};

export default authService;