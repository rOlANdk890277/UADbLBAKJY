// 代码生成时间: 2025-09-15 06:54:45
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  name: 'SchedulerComponent',

  setup() {
    // 响应式数据
    const intervalId = ref(null);
    const nextRunTime = ref(null);
    const schedulerInterval = ref(5000); // 调度间隔时间，单位毫秒

    // 计算属性，计算下次运行时间
    const computedNextRunTime = computed(() => {
      return new Date(nextRunTime.value).toLocaleTimeString();
    });

    // 定时任务函数
    const scheduleTask = () => {
      nextRunTime.value = Date.now() + schedulerInterval.value;
    };

    // 开始调度
    const startScheduler = () => {
      if (intervalId.value) return;

      intervalId.value = setInterval(() => {
        scheduleTask();
      }, schedulerInterval.value);
    };

    // 停止调度
    const stopScheduler = () => {
      if (!intervalId.value) return;

      clearInterval(intervalId.value);
      intervalId.value = null;
    };

    // 生命周期钩子
    onMounted(() => {
      startScheduler();
    });

    onUnmounted(() => {
      stopScheduler();
    });

    return {
      nextRunTime: computedNextRunTime,
      startScheduler,
      stopScheduler
    };
  }
};
</script>
