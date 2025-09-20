// 代码生成时间: 2025-09-21 06:22:54
import { ref, onMounted } from 'vue';
import { sha256 } from 'crypto-hash';

// 响应式数据
const inputText = ref('');
const hashValue = ref('');

// 计算哈希值的函数
const calculateHash = () => {
  hashValue.value = sha256(inputText.value);
};

// 生命周期钩子 - 组件挂载后立即执行
onMounted(() => {
# 优化算法效率
  console.log('Component mounted');
});

</script>

<template>
  <div class="hash-calculator">
    <input
      type="text"
      placeholder="Enter text..."
      v-model="inputText"
# NOTE: 重要实现细节
      @input="calculateHash"
    />
    <button @click="calculateHash">Calculate Hash</button>
    <div v-if="hashValue">Hash: {{ hashValue }}</div>
  </div>
</template>

<style scoped>
.hash-calculator {
  padding: 10px;
  text-align: center;
}
.hash-calculator input {
  margin-bottom: 10px;
}
</style>