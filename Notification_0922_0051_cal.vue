// 代码生成时间: 2025-09-22 00:51:17
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const notifications = ref([]);

// 添加消息到通知列表
function addNotification(message) {
    notifications.value.push(message);
}

// 从通知列表中移除消息
function removeNotification(index) {
    notifications.value.splice(index, 1);
}

// 组件挂载时的逻辑
onMounted(() => {
    console.log('Notification component is mounted.');
    // 这里可以执行组件挂载时需要的操作，如获取初始数据等
});

// 组件卸载时的逻辑
onUnmounted(() => {
    console.log('Notification component is unmounted.');
    // 这里可以执行组件卸载时需要的操作，如清理资源等
});

// 定时器，用于自动移除通知
let notificationTimer;

// 设置自动移除通知的时间（例如5秒）
function setupAutoRemoveNotification() {
    notificationTimer = setInterval(() => {
        if (notifications.value.length > 0) {
            removeNotification(0);
        }
    }, 5000);
}

onMounted(setupAutoRemoveNotification);

onUnmounted(() => {
    clearInterval(notificationTimer);
    notificationTimer = null;
});

</script>

<template>
    <div class="notification-container">
        <!-- 显示通知列表 -->
        <div v-for="(notification, index) in notifications" :key="index" class="notification-item">
            {{ notification }}
            <button @click="removeNotification(index)">Close</button>
        </div>
    </div>
</template>

<style scoped>
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
}
.notification-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
}
</style>