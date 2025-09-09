// 代码生成时间: 2025-09-09 10:51:39
import { ref, onMounted } from 'vue';

export default {
  name: 'VueSortingComponent',
  setup() {
    // 响应式数据
    const numbers = ref([5, 3, 8, 4, 2, 9, 1, 6, 7]);

    const shuffleArray = () => {
      for (let i = numbers.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers.value[i], numbers.value[j]] = [numbers.value[j], numbers.value[i]];
      }
    };

    const sortArray = () => {
      for (let i = 0; i < numbers.value.length - 1; i++) {
        for (let j = 0; j < numbers.value.length - i - 1; j++) {
          if (numbers.value[j] > numbers.value[j + 1]) {
            [numbers.value[j], numbers.value[j + 1]] = [numbers.value[j + 1], numbers.value[j]];
          }
        }
      }
    };

    // 生命周期钩子
    onMounted(() => {
      console.log('Component mounted');
    });

    return {
      numbers,
      shuffleArray,
      sortArray
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>