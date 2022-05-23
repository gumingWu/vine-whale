import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
  state: () => ({
    isDark: false,
  }),
  actions: {
    changeThemeMode(mode) {
      this.isDark = mode.value;
    },
  },
});
