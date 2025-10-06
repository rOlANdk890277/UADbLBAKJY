// 代码生成时间: 2025-10-06 21:53:36
import axios from 'axios';

export default {
  name: "LoadTester",
  data() {
    return {
      url: "",
      concurrency: 0,
      results: [],
    };
  },
  methods: {
    async startLoadTest() {
      if (!this.url || this.concurrency === 0) return;

      this.results = []; // Clear previous results

      for (let i = 0; i < this.concurrency; i++) {
        try {
          const response = await axios.get(this.url);
          this.results.push(`Request #${i + 1}: Success - ${response.status}`);
        } catch (error) {
          this.results.push(`Request #${i + 1}: Failed - ${error.message}`);
        }
      }
    },
  },
  mounted() {
    console.log("LoadTester component is mounted.");
  },
  beforeUnmount() {
    console.log("LoadTester component is about to be unmounted.");
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
