// 代码生成时间: 2025-09-05 00:23:19
import { ref, onMounted } from 'vue';
import { sha256 } from 'crypto-hash'; // 引入hash库

// 响应式数据，存储输入文本和计算结果
const inputText = ref('');
const hashResult = ref('');

// 计算哈希值的函数
function calculateHash() {
  hashResult.value = sha256(inputText.value);
}

// 生命周期钩子，在组件挂载时执行操作
onMounted(() => {
  // 可以在这里进行初始化操作，例如设置默认值等
});
</script>

<style scoped>
.hash-calculator {
  margin: 20px;
  text-align: center;
}
.input {
  margin-bottom: 10px;
}
.result {
  color: #333;
}
</style>
