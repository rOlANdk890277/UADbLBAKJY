// 代码生成时间: 2025-09-14 02:40:21
import { ref, onMounted, reactive } from 'vue';

export default {
  name: 'MemoryUsageAnalyzer',
  props: {
    // Props to receive memory usage data
    memoryUsageData: Array
  },
  setup(props) {
    // Reactive state for chart instance
    const memoryCanvas = ref(null);
    const chartInstance = ref(null);
    
    // Reactive data
    const state = reactive({
      memoryUsageData: props.memoryUsageData || []
    });
    
    // Lifecycle hook to render chart when component is mounted
    onMounted(() => {
      if (memoryCanvas.value) {
        chartInstance.value = new Chart(memoryCanvas.value, {
          type: 'bar',
          data: {
            labels: state.memoryUsageData.map(data => data.label),
            datasets: [{
              label: 'Memory Usage (MB)',
              data: state.memoryUsageData.map(data => data.value),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    });

    // Lifecycle hook to cleanup chart instance when component is unmounted
    onUnmounted(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
      }
    });
    
    return {
      memoryCanvas,
      state
    };
  }
};
</script>

<style scoped>
.memory-usage-analyzer {
  /* Styles for memory usage analyzer component */
}
</style>
