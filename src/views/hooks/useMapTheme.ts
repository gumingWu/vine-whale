import { computed } from "vue";
import { useSystemStore } from "@/stores/system";

export default () => {
  const systemStore = useSystemStore();

  const themeConfig = {
    light: {
      borderColor: "rgb(11, 100, 223)",
    },
    dark: {
      borderColor: "rgb(123, 222, 11)",
    },
  };

  const useTheme = computed(() => {
    return themeConfig[systemStore.isDark ? "dark" : "light"];
  });

  return {
    useTheme,
  };
};
