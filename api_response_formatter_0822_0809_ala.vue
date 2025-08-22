// 代码生成时间: 2025-08-22 08:09:06
import { ref, onMounted } from 'vue';

export default {
  name: 'ApiResponseFormatter',
  setup() {
    // 响应式数据：原始API响应和格式化后的结果
    const response = ref('');
    const formattedResponse = ref(null);

    // 格式化API响应的方法
    function formatResponse() {
      try {
        // 尝试解析原始响应为JSON
        const parsedResponse = JSON.parse(response.value);
        // 格式化JSON字符串
        formattedResponse.value = JSON.stringify(parsedResponse, null, 2);
      } catch (error) {
        // 如果解析错误，设置格式化响应为错误信息
        formattedResponse.value = 'Invalid JSON';
      }
    }

    // 生命周期钩子：组件挂载后立即格式化响应（如果有）
    onMounted(() => {
      if (response.value) {
        formatResponse();
      }
    });

    // 返回响应式数据和方法
    return {
      response,
      formattedResponse,
      formatResponse
    };
  }
};
</script>

<style scoped>
/* 可以添加一些基本的样式 */
textarea {
  margin-bottom: 10px;
}
</style>