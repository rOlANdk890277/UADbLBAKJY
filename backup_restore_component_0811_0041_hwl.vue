// 代码生成时间: 2025-08-11 00:41:02
import { ref } from 'vue';

// 响应式数据
const data = ref('');
const backupExists = ref(false);
const backupData = ref('');

// 生命周期钩子
onMounted(() => {
  // 检查是否有备份数据
  backupExists.value = !!localStorage.getItem('backupData');
  if (backupExists.value) {
    backupData.value = localStorage.getItem('backupData');
  }
});

// 备份数据
function backupData() {
  localStorage.setItem('backupData', data.value);
  backupExists.value = true;
};

// 恢复数据
function restoreData() {
  data.value = backupData.value;
  backupExists.value = false;
};
</script>

<style scoped>
/* 样式内容 */
</style>
