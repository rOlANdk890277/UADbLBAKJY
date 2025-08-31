// 代码生成时间: 2025-09-01 06:57:48
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const notifications = ref([]);
const showMessage = (message) => {
  notifications.value.push(message);
  setTimeout(() => {
    notifications.value.pop();
  }, 3000);
};

// 生命周期钩子
onMounted(() => {
  console.log('Notification component is mounted');
});

onUnmounted(() => {
  console.log('Notification component is unmounted');
});
</script>

<template>
  <div>
    <!-- 消息通知列表 -->
    <ul v-if="notifications.length" class="notifications">
      <li v-for="msg in notifications" :key="msg.id">{{ msg }}</li>
    </ul>
    <button @click="showMessage('New notification!')">Show Notification</button>
  </div>
</template>

<style scoped>
.notifications {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.notifications li {
  background-color: #f0f0f0;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
