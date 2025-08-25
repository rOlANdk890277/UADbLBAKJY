// 代码生成时间: 2025-08-26 00:16:33
import { ref } from 'vue';

export default {
  name: 'FormValidator',
  setup() {
    // 响应式数据
    const formData = ref({
      username: '',
      password: ''
    });
    const errorMessages = ref([]);

    // 数据验证函数
    const validateForm = () => {
      errorMessages.value = [];
      if (!formData.value.username.trim()) {
        errorMessages.value.push('Username is required');
      }
      if (!formData.value.password) {
        errorMessages.value.push('Password is required');
      }
    };

    // 生命周期钩子
    onUnmounted(() => {
      console.log('Component unmounted');
    });

    return {
      formData,
      errorMessages,
      validateForm
    };
  }
};
</script>

<style>
.error-messages {
  color: red;
}
</style>
