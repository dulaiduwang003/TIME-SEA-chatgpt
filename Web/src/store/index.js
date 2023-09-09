import { createStore } from "vuex";

export default createStore({
  state: {
    userinfo: false,
    themeSwitchList: [
      {
        id: 0,
        name: "黑夜模式",
        className: "darkMode",
        switchText: "日间模式",
      },
      {
        id: 1,
        name: "日间模式",
        className: "lightMode",
        switchText: "黑夜模式",
      },
    ],
    themeSwitchIndex: 0,
  },
  getters: {
    userinfo: (state) => state.userinfo,
    themeInfo: (state) => state.themeSwitchList[state.themeSwitchIndex],
  },

  mutations: {
    logout(state) {
      state.userinfo = false;
    },
    setUserinfo(state, info) {
      state.userinfo = info;
      localStorage.setItem("user", JSON.stringify(info));
    },
    setThemeSwitchIndex(state, themeSwitchIndex) {
      state.themeSwitchIndex = themeSwitchIndex;
      localStorage.setItem(
        "themeSwitchIndex",
        JSON.stringify(state.themeSwitchList[state.themeSwitchIndex])
      );
    },
    initState(state) {
      let token = localStorage.getItem("token");

      if (token) {
        let user = localStorage.getItem("user");
        state.userinfo = JSON.parse(user);
      }
    },
  },
  actions: {},
  modules: {},
});
