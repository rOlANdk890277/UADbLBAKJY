// 代码生成时间: 2025-09-30 02:01:19
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const videoElement = ref(null);
const mediaStream = ref(null);

// 推流配置
const streamingConfig = {
  audio: true,
  video: {
    width: 1280,
    height: 720
  }
};

// 生命周期钩子 - 组件挂载时
onMounted(() => {
  navigator.mediaDevices.getUserMedia(streamingConfig)
    .then(stream => {
      mediaStream.value = stream;
      videoElement.value.srcObject = stream;
    })
    .catch(error => console.error('Error accessing media devices.', error));
});

// 生命周期钩子 - 组件卸载时
onUnmounted(() => {
  if (mediaStream.value) {
    mediaStream.value.getTracks().forEach(track => track.stop());
  }
});

// 开始推流的方法
function startStreaming() {
  // 推流代码，将推流逻辑封装在此方法内
  console.log('Start streaming. Stream:', mediaStream.value);
  // 这里可以添加实际的推流逻辑，例如使用第三方服务如WebRTC
}
</script>

<style scoped>
.live-streaming-component video {
  width: 100%;
  height: auto;
}
</style>
