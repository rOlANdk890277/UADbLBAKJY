// 代码生成时间: 2025-09-17 19:19:27
import { ref, onMounted, watch } from 'vue';

// 响应式数据
const url = ref('');
const isValid = ref(false);

// URL验证函数
function validateURL() {
  const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return pattern.test(url.value);
}

// 监听URL的变化，并验证
watch(url, () => {
  isValid.value = validateURL();
});

// 生命周期钩子
onMounted(() => {
  // 可以进行初始验证或者其他初始化操作
  isValid.value = validateURL();
});
</script>

<template>
  <div>
    <input type="text" v-model="url" placeholder="Enter URL"/>
    <p v-if="isValid">Valid URL</p>
    <p v-else>Invalid URL</p>
  </div>
</template>
