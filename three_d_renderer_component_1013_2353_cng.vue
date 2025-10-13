// 代码生成时间: 2025-10-13 23:53:50
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

// 响应式数据
const rendererContainer = ref(null);
const scene = ref(null);
const camera = ref(null);
const renderer = ref(null);
const light = ref(null);

// 初始化3D渲染系统
function init() {
  scene.value = new THREE.Scene();
  scene.value.background = new THREE.Color(0x8FBCD4);

  camera.value = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.value.position.z = 5;

  renderer.value = new THREE.WebGLRenderer({ antialias: true });
  renderer.value.setSize(window.innerWidth, window.innerHeight);
  rendererContainer.value.appendChild(renderer.value.domElement);

  light.value = new THREE.AmbientLight(0xffffff, 0.5);
  scene.value.add(light.value);

  // 添加一个简单的几何体
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
  const cube = new THREE.Mesh(geometry, material);
  scene.value.add(cube);

  // 动画循环
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.value.render(scene.value, camera.value);
  }
  animate();
}

// 生命周期钩子
onMounted(() => {
  if (rendererContainer.value) {
    init();
  }
});

// 监听窗口大小变化
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.value.aspect = window.innerWidth / window.innerHeight;
  camera.value.updateProjectionMatrix();
  renderer.value.setSize(window.innerWidth, window.innerHeight);
}
</script>

<style>
#rendererContainer {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>