import {NOTIFICATIONS_PUSH, NOTIFICATIONS_REMOVE} from "../mutations.type";

const notificationsModule = {
  state: {
    notifications: [
    ]
  },
  getters: {
    notifications(state) {
      return state.notifications;
    }
  },
  mutations: {
    [NOTIFICATIONS_PUSH](state, notification) {
      state.notifications.push(notification);
    },
    [NOTIFICATIONS_REMOVE](state, notification) {
      state.notifications = state.notifications.filter(pushedNotification => {
        return notification.id !== pushedNotification.id;
      })
    }
  },
  actions: {}
};

export default notificationsModule;

