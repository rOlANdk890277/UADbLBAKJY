// 代码生成时间: 2025-09-21 11:19:22
import { ref, onMounted, onUnmounted } from 'vue';
import { sha256 } from 'crypto-hash';

export default {
  name: 'HashCalculator',
  components: {},
  props: {},
  setup() {
    const inputText = ref('');
    const hashValue = ref('');

    function calculateHash() {
      if (inputText.value) {
        hashValue.value = sha256(inputText.value);
      } else {
        hashValue.value = '';
      }
    }

    onMounted(() => {
      calculateHash();
    });

    onUnmounted(() => {
      // Perform cleanup, if necessary.
    });

    return {
      inputText,
      hashValue,
      calculateHash
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>