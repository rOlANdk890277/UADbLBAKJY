// 代码生成时间: 2025-10-01 23:27:54
      <p>Point inside circle: {{ pointsInside }}/{{ pointsTotal }}</p>
      <p>Pi estimation: {{ piEstimation }}</p>
    </div>
    <canvas ref="canvasRef" width="500" height="500" style="border: 1px solid black;"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, reactive } from 'vue';

export default {
  name: 'MonteCarloSimulator',
  setup() {
    const pointsInside = ref(0);
    const pointsTotal = ref(0);
    const piEstimation = ref(0);
    const canvasRef = ref(null);
    const interval = ref(null);
    
    const canvas = reactive({
      width: 500,
      height: 500,
      x: 250,
      y: 250,
      radius: 200
    });
    
    function startSimulation() {
      if (interval.value) return;
      pointsInside.value = 0;
      pointsTotal.value = 0;
      piEstimation.value = 0;
      interval.value = setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        pointsTotal.value++;
        
        const dx = x - canvas.x;
        const dy = y - canvas.y;
        if ((dx * dx) + (dy * dy) <= canvas.radius * canvas.radius) {
          pointsInside.value++;
        }
      }, 10);
    }
    
    function stopSimulation() {
      if (!interval.value) return;
      clearInterval(interval.value);
      interval.value = null;
      piEstimation.value = (pointsInside.value / pointsTotal.value) * 4;
    }
    
    function resetSimulation() {
      stopSimulation();
      pointsInside.value = 0;
      pointsTotal.value = 0;
      piEstimation.value = 0;
    }
    
    function drawPoint(x, y) {
      const ctx = canvasRef.value.getContext('2d');
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(x, y, 1, 1);
    }
    
    onMounted(() => {
      canvasRef.value.addEventListener('click', (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        drawPoint(x, y);
      });
    });
    
    onUnmounted(() => {
      if (interval.value) {
        clearInterval(interval.value);
      }
    });
    
    return {
      pointsInside,
      pointsTotal,
      piEstimation,
      startSimulation,
      stopSimulation,
      resetSimulation,
      canvasRef
    };
  }
};
</script>

<style scoped>
</style>