<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useResizeObserver } from "@vueuse/core";
import * as echarts from "echarts";
import ChinaJSON from "@/assets/constant/China.json";

const MapRef = ref<HTMLElement | null>(null);

const options = {
  series: [
    {
      type: "map",
      map: "china", // 引入地图数据
      roam: true,
      itemStyle: {
        areaColor: "transparent",
        borderColor: "rgba(60, 60, 60, 0.29)",
      },
    },
  ],
};

onMounted(() => {
  const myChart = echarts.init(MapRef.value!);
  echarts.registerMap("china", ChinaJSON);
  myChart.setOption(options);

  useResizeObserver(MapRef, () => {
    myChart.resize();
  });
});
</script>

<template>
  <div class="map" ref="MapRef"></div>
</template>

<style>
.map {
  width: 100vw;
  height: 700px;
}
</style>
