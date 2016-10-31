import * as types from './mutation-types';

const state = {
  // { [user.id]: user }
  loginUsers: {},

  // { [user.id]: purakuInstance }
  // TODO: multi-account support
  apiClients: {},

  // [userid, userid]
  loginUserIds: [],
  selectedUserId: null,


  // { [user.id]: user }
  userList: {},

  navbarHeader: '',

  appTheme: 'light'
};

const mutations = {
  [types.LOGIN_USER] (state, { user }) {
    state.loginUsers = {
      ...state.loginUsers,
      [user.id]: user
    };
  },

  [types.REGISTER_USER_ID] (state, { userID }) {
    state.loginUserIds = [
      ...state.loginUserIds,
      userID
    ];
  },

  [types.SELECT_USER_ID] (state, { userID }) {
    state.selectedUserId = userID;
  },

  [types.FETCH_USERS] (state, { users }) {
    state.userList = { ...state.userList, ...users };
  },

  [types.CHANGE_HEADER] (state, { header }) {
    state.navbarHeader = header;
  },

  [types.SET_THEME] (state, { theme }) {
    state.appTheme = theme;
  }
};

export default {
  state,
  mutations
};
