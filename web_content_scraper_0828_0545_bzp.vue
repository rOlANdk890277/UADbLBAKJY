// 代码生成时间: 2025-08-28 05:45:59
import { ref, onMounted } from 'vue';

export default {
  name: 'WebContentScraper',
  setup() {
    // Reactive data
    const url = ref('');
    const content = ref('');

    // Function to fetch content
    const fetchContent = async () => {
      if (url.value) {
        try {
          const response = await fetch(url.value);
          const text = await response.text();
          content.value = text;
        } catch (error) {
          console.error('Error fetching content:', error);
          content.value = 'Failed to fetch content.';
        }
      }
    };

    // Life cycle hook
    onMounted(() => {
      console.log('Web content scraper component is mounted.');
    });

    return { url, content, fetchContent };
  }
};
</script>

<style scoped>
.scraper {
  margin: 20px;
}

input {
  margin-right: 10px;
}

button {
  cursor: pointer;
}
</style>
