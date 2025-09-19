// 代码生成时间: 2025-09-19 11:49:17
import { ref, onMounted } from 'vue';

// 响应式数据
const password = ref('');
const encryptedPassword = ref('');
const decryptedPassword = ref('');

// 加密函数
function encryptPassword() {
  const encodedPassword = btoa(password.value);
  encryptedPassword.value = encodedPassword;
}

// 解密函数
function decryptPassword() {
  if (encryptedPassword.value) {
    const decodedPassword = atob(encryptedPassword.value);
    decryptedPassword.value = decodedPassword;
  } else {
    decryptedPassword.value = 'Enter an encrypted password to decrypt.';
  }
}

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted.');
});
</script>

<template>
  <div>
    <h1>Password Encryption Decryption Tool</h1>
    <input type="text" placeholder="Enter password" v-model="password" />
    <button @click="encryptPassword">Encrypt</button>
    <p>Encrypted: {{ encryptedPassword }}</p>
    <input type="text" placeholder="Enter encrypted password" v-model="encryptedPassword" />
    <button @click="decryptPassword">Decrypt</button>
    <p>Decrypted: {{ decryptedPassword }}</p>
  </div>
</template>

<style scoped>
/* Add some basic styling */
div {
  text-align: center;
}
input, button {
  margin: 5px;
}
</style>
