<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import { useResizeObserver } from "@vueuse/core";
import * as echarts from "echarts";
import ChinaJSON from "@/assets/constant/China.json";
import DarkBtn from "@/components/DarkBtn.vue";
import { useSystemStore } from "@/stores/system";

const MapRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const myChart = echarts.init(MapRef.value!);
  echarts.registerMap("china", ChinaJSON);

  useResizeObserver(MapRef, () => {
    myChart.resize();
  });

  const systemStore = useSystemStore();
  watchEffect(() => {
    const options = {
      series: [
        {
          type: "map",
          map: "china", // 引入地图数据
          roam: true,
          itemStyle: {
            areaColor: "transparent",
            borderColor: systemStore.isDark
              ? "rgb(123, 222, 11)"
              : "rgb(11, 100, 223)",
          },
        },
      ],
    };
    myChart.setOption(options);
  });
});
</script>

<template>
  <DarkBtn class="dark-btn"></DarkBtn>

  <div w-screen h-170 ref="MapRef"></div>
</template>

<style>
.dark-btn {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
