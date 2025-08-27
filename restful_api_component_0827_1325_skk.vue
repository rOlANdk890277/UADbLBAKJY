// 代码生成时间: 2025-08-27 13:25:09
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 响应式数据
const posts = ref([]);
const error = ref(null);
const loading = ref(false);

// 获取数据的函数
const fetchData = () => {
  loading.value = true;
  axios.get('/api/posts')
    .then(response => {
      posts.value = response.data;
      loading.value = false;
    })
    .catch(error => {
      console.error('There was an error!', error);
      loading.value = false;
      this.error = error;
    });
};

// 生命周期钩子
onMounted(fetchData);

export default {
  name: 'RestfulApiComponent',
  setup() {
    return {
      posts,
      error,
      loading,
      fetchData
    };
  }
};
</script>

<template>
  <div>
    <button @click="fetchData">Load Data</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} - {{ post.body }}
      </li>
    </ul>
  </div>
</template>
