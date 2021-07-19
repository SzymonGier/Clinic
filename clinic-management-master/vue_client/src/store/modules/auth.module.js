import {CHECK_AUTH, LOGIN, LOGOUT} from "../actions.type";
import authService from "../../services/auth.service";
import {NOTIFICATIONS_PUSH, PURGE_AUTH, SET_AUTH} from "../mutations.type";

const authModule = {
  state: {
    userName: null,
    authorities: [],
    isAuthenticated: null
  },
  getters: {
    user(state) {
      return state.userName;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    authorities(state) {
      return state.authorities.map(authority => authority.authority);
    }
  },
  mutations: {
    [SET_AUTH](state, {username, authorities}) {
      state.isAuthenticated = true;
      state.userName = username;
      state.authorities = authorities;
    },
    [PURGE_AUTH](state) {
      state.userName = null;
      state.isAuthenticated = false;
      state.authorities = [];
    }
  },
  actions: {
    [LOGIN](context, credentials) {
      return authService.login(credentials.email, credentials.password)
        .then(response => context.commit(SET_AUTH, {
          username: response.data.name,
          authorities: response.data.authorities
        }))
        .catch(() => context.commit(NOTIFICATIONS_PUSH, {type: 'danger', message: 'Niepoprawne dane'}))
    },
    [CHECK_AUTH](context) {
      if (null !== context.state.isAuthenticated) {
        return;
      }

      return authService.check()
        .then(response => context.commit(SET_AUTH, {
          username: response.data.name,
          authorities: response.data.authorities
        }))
        .catch(() => context.commit(PURGE_AUTH));
    },
    [LOGOUT](context) {
      return authService.logout()
        .then(() => context.commit(PURGE_AUTH))
    }
  },
};

export default authModule;

