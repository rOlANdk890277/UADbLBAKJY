// 代码生成时间: 2025-08-04 15:51:28
import { ref, onMounted, onUnmounted } from 'vue';

// Define reactive data
const result = ref('');

// Perform operations
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    result.value = 'Cannot divide by zero';
  } else {
    result.value = num1 / num2;
  }
}

// Lifecycle hook - mounted
onMounted(() => {
  console.log('Math Tool component is mounted.');
});

// Lifecycle hook - unmounted
onUnmounted(() => {
  console.log('Math Tool component is unmounted.');
});

</script>

<template>
  <div>
    <h1>Math Tools</h1>
    <input type="number" v-model="num1" placeholder="Enter first number" />
    <input type="number" v-model="num2" placeholder="Enter second number" />
    <button @click="result.value = add(num1, num2)">Add</button>
    <button @click="result.value = subtract(num1, num2)">Subtract</button>
    <button @click="result.value = multiply(num1, num2)">Multiply</button>
    <button @click="divide(num1, num2)">Divide</button>
    <p>Result: {{ result }}</p>
  </div>
</template>

<style>
/* Add your CSS styles here */
</style>