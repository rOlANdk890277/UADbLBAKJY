// 代码生成时间: 2025-08-16 20:55:04
import { ref, onMounted, reactive } from 'vue';

// 使用reactive响应式数据对象来存储文件列表和文件名模板
const state = reactive({
  files: [],
  template: ''
});

// 定义一个响应式变量来存储文件列表
const files = ref(state.files);

// 生命周期钩子：组件挂载完成后执行
onMounted(() => {
  // 这里可以添加代码来获取或初始化文件列表
  files.value = [
    { name: 'old-name1.txt' },
    { name: 'old-name2.txt' },
    { name: 'old-name3.txt' }
  ];
});

// 重命名文件的方法
function renameFiles() {
  for (let i = 0; i < files.value.length; i++) {
    const newName = state.template.replace('{{index}}', i + 1).replace(/\{\{index\}\}/g, i + 1);
    files.value[i].name = newName;
  }
}

// 导出响应式变量和方法
export {
  files,
  renameFiles
};
</script>

<style scoped>
.batch-rename-tool {
  padding: 20px;
}
</style>
