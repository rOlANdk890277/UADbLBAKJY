// 代码生成时间: 2025-08-29 22:42:30
import { ref, onMounted } from 'vue';

// Response data
const rawData = ref('');
const formattedJson = ref('');

// Function to format JSON
function formatJson() {
  try {
    const parsedJson = JSON.parse(rawData.value);
    formattedJson.value = JSON.stringify(parsedJson, null, 2);
  } catch(e) {
    alert('Invalid JSON data!');
  }
}

// Lifecycle hook for mounted
onMounted(() => {
  // Initialization code can go here
});
</script>

<style scoped>
/* CSS styles for the component */
</style>