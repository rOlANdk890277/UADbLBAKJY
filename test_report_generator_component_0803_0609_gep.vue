// 代码生成时间: 2025-08-03 06:09:56
import { reactive, onMounted } from 'vue';

// 响应式数据
const reportData = reactive([]);

// 组件挂载时获取测试报告数据
onMounted(() => {
  fetchTestReports();
});

// 模拟从后端获取测试报告数据的方法
function fetchTestReports() {
  // 假设这是从API获取数据
  reportData.push({
    testName: '测试1',
    result: '通过',
    testTime: '2024-04-01'
  }, {
    testName: '测试2',
    result: '失败',
    testTime: '2024-04-02'
  });
}
</script>

<style scoped>
/* 可以添加一些样式来美化测试报告生成器的界面 */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>