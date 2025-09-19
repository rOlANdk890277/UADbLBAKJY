// 代码生成时间: 2025-09-20 00:45:44
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const cpuUsage = ref(0);
const memoryUsage = ref(0);
const diskUsage = ref(0);

// 模拟获取系统性能数据的函数
function fetchSystemData() {
  // 模拟API请求
  setTimeout(() => {
    cpuUsage.value = Math.random() * 100;
    memoryUsage.value = Math.random() * 100;
    diskUsage.value = Math.random() * 100;
  }, 1000);
}

// 生命周期钩子
onMounted(() => {
  fetchSystemData();
  // 设置定时器，定时获取系统数据
  setInterval(fetchSystemData, 5000);
});

onUnmounted(() => {
  // 清除定时器
  clearInterval(fetchSystemData);
});
</script>

<style>
/* 样式可以根据实际需求自定义 */
</style>
