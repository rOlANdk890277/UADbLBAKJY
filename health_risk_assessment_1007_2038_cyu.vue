// 代码生成时间: 2025-10-07 20:38:45
export default {
    name: 'HealthRiskAssessment',
    data() {
        return {
            age: 0,
            weight: 0,
            height: 0,
            riskLevel: null
        };
    },
    methods: {
        calculateBMI() {
            return (this.weight / (this.height / 100) ** 2).toFixed(2);
        },
        assessRisk() {
            const bmi = this.calculateBMI();
            if (bmi < 18.5) return 'Underweight';
            if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
            if (bmi >= 25 && bmi < 29.9) return 'Overweight';
            return 'Obese';
        },
        handleSubmit() {
            this.riskLevel = this.assessRisk();
        }
    },
    mounted() {
        // Initialization code, if needed
    }
};
</script>

<style scoped>
.health-assessment {
    margin: 20px;
    text-align: center;
}
</style>