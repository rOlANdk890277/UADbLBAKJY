// 代码生成时间: 2025-09-18 22:23:50
import { ref, reactive, onMounted } from 'vue';

// 响应式数据
let folders = reactive([]);
let newFolderName = ref('');
let folderId = ref(0);

// 添加文件夹的函数
function addFolder() {
  if (!newFolderName.value) return;
  folders.push({
    id: folderId.value++,
    name: newFolderName.value
  });
  newFolderName.value = ''; // 清空输入框
}

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted.');
  // 这里可以添加初始化的代码
});
</script>

<style scoped>
/* 这里可以添加CSS样式 */
</style>
