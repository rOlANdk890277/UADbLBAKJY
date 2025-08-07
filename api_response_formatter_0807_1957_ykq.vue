// 代码生成时间: 2025-08-07 19:57:40
import { ref, onMounted } from 'vue';

export default {
  name: 'ApiResponseFormatter',
  setup() {
    // Reactive data
    const apiResponse = ref('');
    const formattedResponse = ref('');

    // Function to format the API response
    const formatApiResponse = () => {
      try {
        const parsedResponse = JSON.parse(apiResponse.value);
        formattedResponse.value = JSON.stringify(parsedResponse, null, 2);
      } catch (error) {
        formattedResponse.value = 'Invalid JSON';
      }
    };

    // Lifecycle hook
    onMounted(() => {
      // Lifecycle code (if needed)
    });

    return {
      apiResponse,
      formattedResponse,
      formatApiResponse,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
