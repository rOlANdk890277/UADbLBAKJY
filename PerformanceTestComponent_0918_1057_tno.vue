// 代码生成时间: 2025-09-18 10:57:23
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const count = ref(0);

// 生命周期钩子
onMounted(() => {
  console.log('组件挂载完成');
});

onUnmounted(() => {
  console.log('组件销毁');
});

// 增加计数的方法
function incrementCount() {
  count.value++;
}

export default {
  setup() {
    return {
      count,
      incrementCount
    };
  }
};
</script>
