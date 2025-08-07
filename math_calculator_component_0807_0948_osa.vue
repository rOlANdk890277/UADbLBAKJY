// 代码生成时间: 2025-08-07 09:48:09
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive data
const firstNumber = ref('');
const secondNumber = ref('');
const result = ref('');

// Lifecycle hooks
onMounted(() => {
  console.log('Calculator component is mounted');
});

onUnmounted(() => {
  console.log('Calculator component is unmounted');
});

// Mathematical operations
function add() {
  const sum = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
  result.value = sum;
}

function subtract() {
  const difference = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
  result.value = difference;
}

function multiply() {
  const product = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
  result.value = product;
}

function divide() {
  const divisor = parseFloat(secondNumber.value);
  if (divisor === 0) {
    result.value = 'Cannot divide by zero';
  } else {
    const quotient = parseFloat(firstNumber.value) / divisor;
    result.value = quotient;
  }
}
</script>

<style>
.math-calculator {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input[type="text"] {
  margin-right: 10px;
  padding: 8px;
}

button {
  margin-right: 10px;
  padding: 8px 16px;
}

p {
  margin-top: 20px;
}
</style>
