// 代码生成时间: 2025-08-09 12:01:49
import { ref, onUnmounted, onMounted } from 'vue';

// 响应式数据
const intervalId = ref(null);
const nextRunTime = ref(null);

// 定时任务执行函数
function runTask() {
  console.log('Task executed at: ' + new Date());
  nextRunTime.value = new Date();
  // 定时执行任务
  intervalId.value = setInterval(runTask, 5000); // 每5秒执行一次
}

// 组件生命周期钩子
onMounted(() => {
  runTask();
});

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});

</script>

<template>
  <div>
    <h1>定时任务调度器</h1>
    <p>下次计划运行时间: {{ nextRunTime }}</p>
  </div>
</template>

<style scoped>
  /* 样式内容 */
</style>
