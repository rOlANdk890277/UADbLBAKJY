// 代码生成时间: 2025-08-31 20:16:20
import { ref, onMounted } from 'vue';

export default {
  name: 'ThemeSwitcher',

  // 使用响应式数据存储主题状态
  data() {
    return {
      theme: 'light-theme'
    };
  },

  // 将响应式数据转换为计算属性
  computed: {
    themeClass() {
      return this.theme === 'dark-theme' ? 'dark-theme' : 'light-theme';
    }
  },

  // 添加生命周期钩子
  mounted() {
    // 可以在这里设置初始主题
    this.theme = localStorage.getItem('theme') || 'light-theme';
  },

  methods: {
    toggleTheme() {
      // 切换主题
      this.theme = this.theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
      
      // 存储用户的主题偏好到本地存储
      localStorage.setItem('theme', this.theme);
    }
  }
};
</script>

<style>
/* 定义主题样式 */
.light-theme {
  background-color: #f0f0f0;
  color: #333;
}

.dark-theme {
  background-color: #333;
  color: #f0f0f0;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

h1 {
  margin: 0;
  padding: 20px;
}
</style>
