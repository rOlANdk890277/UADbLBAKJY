// 代码生成时间: 2025-08-26 16:03:23
export default {
  name: 'OrderProcess',
  data() {
    return {
      orderStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.orderStep < 3) {
        this.orderStep++;
      }
    },
    prevStep() {
      if (this.orderStep > 1) {
        this.orderStep--;
      }
    },
  },
  created() {
    console.log('Order process component is created');
  },
  mounted() {
    console.log('Order process component is mounted');
  },
};
</script>

<style scoped>
.order-process {
  text-align: center;
}
</style>
