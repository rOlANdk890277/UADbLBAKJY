// 代码生成时间: 2025-09-13 15:33:25
import { ref, onMounted } from 'vue';

//响应式数据
const url = ref('');
const isValid = ref(false);

// 验证URL有效性的函数
function validateUrl() {
  const pattern = /^(http|https)?:\/\/[^\s$.?#].[^\s]*$/;
  isValid.value = pattern.test(url.value);
}

// 生命周期钩子 - 组件挂载时触发URL验证
onMounted(() => {
  validateUrl();
});
</script>

<style scoped>
.valid-url {
  color: green;
}
.invalid-url {
  color: red;
}
</style>
