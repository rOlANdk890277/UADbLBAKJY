// 代码生成时间: 2025-08-31 04:28:35
import { ref, onMounted } from 'vue';

// 响应式数据
const textContent = ref('');
const fileInfo = ref({ name: '', size: 0 });

// 生命周期钩子
onMounted(() => {
  // 可以在组件挂载后执行的初始化代码
  console.log('Component mounted');
});

// 方法
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    fileInfo.value.name = file.name;
    fileInfo.value.size = file.size;
    const reader = new FileReader();
    reader.onload = (e) => {
      textContent.value = e.target.result;
    };
    reader.readAsText(file);
  }
};
</script>

<style scoped>
/* 样式代码 */
</style>
