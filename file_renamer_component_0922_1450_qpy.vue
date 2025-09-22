// 代码生成时间: 2025-09-22 14:50:25
import { ref, onMounted, reactive } from 'vue';

export default {
  name: 'FileRenamer',
  setup() {
    // 响应式数据
    const files = reactive([
      { name: 'file1.txt' },
      { name: 'file2.txt' },
      { name: 'file3.txt' }
    ]);
    const searchTerm = ref('');
    const replaceTerm = ref('');
    const renamedFiles = reactive([]);

    // 重命名文件的函数
    function renameFiles() {
      files.forEach(file => {
        if (file.name.includes(searchTerm.value)) {
          const newName = file.name.replace(searchTerm.value, replaceTerm.value);
          renamedFiles.push({
            oldName: file.name,
            newName: newName
          });
        }
      });
      files.forEach(file => {
        if (file.name.includes(searchTerm.value)) {
          file.name = file.name.replace(searchTerm.value, replaceTerm.value);
        }
      });
    }

    // 生命周期钩子
    onMounted(() => {
      console.log('组件已挂载');
    });

    return {
      files,
      searchTerm,
      replaceTerm,
      renamedFiles,
      renameFiles
    };
  }
};
</script>

<style scoped>
.file-renamer {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input, button {
  display: block;
  margin-bottom: 10px;
}
</style>
