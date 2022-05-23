<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { useSystemStore } from "@/stores/system";

const systemStore = useSystemStore();

const isDark = useDark();
const toggle = useToggle(isDark);

const click = () => {
  systemStore.changeThemeMode(isDark);
  return toggle();
};
</script>

<template>
  <div
    i="carbon-sun dark:carbon-moon"
    text-10
    cursor-pointer
    z-1
    @click="click"
  ></div>
</template>
