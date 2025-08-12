// 代码生成时间: 2025-08-12 11:43:22
import { ref, onMounted } from 'vue';
import * as CryptoJS from 'crypto-js';

// Reactive data
const inputValue = ref('');
const hashResult = ref('');

// Function to calculate SHA-256 hash
function calculateHash() {
  hashResult.value = CryptoJS.SHA256(inputValue.value).toString();
}

// Lifecycle hook
onMounted(() => {
  console.log('Hash Calculator component is mounted.');
});
</script>

<style scoped>
/* Add your styles here */
</style>
