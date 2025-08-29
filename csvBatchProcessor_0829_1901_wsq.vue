// 代码生成时间: 2025-08-29 19:01:01
import { ref, reactive, onMounted } from 'vue';
import Papa from 'papaparse';

// 响应式数据
const files = ref([]);
const result = ref(null);
const error = ref(null);

const csvData = reactive({
  results: [],
  error: null
});

// 生命周期钩子
onMounted(() => {
  // 组件挂载后执行的代码
});

// 方法
const handleFileChange = (event) => {
  files.value = Array.from(event.target.files);
};

const processCSVs = () => {
  csvData.results = [];
  csvData.error = null;
  error.value = null;
  result.value = null;

  files.value.forEach(file => {
    const reader = new FileReader();
    reader.onload = (event) => {
      Papa.parse(event.target.result, {
        header: true,
        complete: (results) => {
          csvData.results.push(results.data);
        },
        error: (err) => {
          csvData.error = err;
        }
      });
    };
    reader.onerror = () => {
      csvData.error = 'Error reading file';
    };
    reader.readAsText(file);
  });

  files.value = [];
};

</script>

<style scoped>
/* 样式可以根据需要添加 */
</style>
