// 代码生成时间: 2025-09-11 23:15:43
import { ref, onMounted } from 'vue';

// 响应式数据：包含图片的数组，每个图片对象包含src、width和height属性
const images = ref([{
  src: 'https://via.placeholder.com/150',
  width: 150,
  height: 150
}]);

// 生命周期钩子：在组件挂载后，打印初始化的图片数组
onMounted(() => {
  console.log('Initial images:', images.value);
});
</script>

<style scoped>
/* 样式内容可以根据需要进一步定义 */
</style>
