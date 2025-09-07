// 代码生成时间: 2025-09-08 00:56:15
import { ref, onMounted } from 'vue';

export default {
  name: 'ImageResizer',
  props: {
    images: Array,
  },
  setup(props) {
    // Reactivity for the resize factor
    const resizeFactor = ref(1);
    
    // Function to resize images
    const resizeImages = () => {
      props.images.forEach(image => {
        image.width *= resizeFactor.value;
        image.height *= resizeFactor.value;
      });
    };

    // Lifecycle hook to set initial values
    onMounted(() => {
      // Perform any initial setup if needed
    });

    return {
      resizeFactor,
      resizeImages,
    };
  },
};
</script>

<style scoped>
.image-resizer img {
  margin-right: 10px;
  border: 1px solid #ccc;
}
</style>
