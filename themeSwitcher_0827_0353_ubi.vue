// 代码生成时间: 2025-08-27 03:53:47
import { ref, onMounted } from 'vue';

// Reactive data
const theme = ref('light');

// Function to toggle the theme
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}

// Lifecycle hook to set the initial theme
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
  }
});

// Watcher to save the theme to local storage
watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme);
});
</script>

<style scoped>
.light {
  background-color: #fff;
  color: #333;
}

.dark {
  background-color: #333;
  color: #fff;
}
</style>

