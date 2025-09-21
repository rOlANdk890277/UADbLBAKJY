// 代码生成时间: 2025-09-22 05:38:46
import { reactive, onMounted } from 'vue';

// 响应式数据
const tableData = reactive([]);
const tableHeaders = reactive(['ID', 'Name', 'Age', 'Email']);
const generateTableData = () => {
  // 生成模拟数据
  return Array.from({ length: 10 }, (_, index) => index + 1).map(id => (
    {
      id: id,
      name: `Name${id}`,
      age: 20 + id,
      email: `name${id}@example.com`
    }
  ));
};

// 生命周期钩子
onMounted(() => {
  tableData.splice(0, tableData.length, ...generateTableData());
});

// 方法：生成表格
const generateExcelTable = () => {
  tableData.length = 0; // 清空旧数据
  tableData.splice(0, tableData.length, ...generateTableData()); // 添加新数据
};
</script>

<style scoped>
.excel-table-generator {
  /* 样式代码 */
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
button {
  margin-bottom: 10px;
}
</style>
