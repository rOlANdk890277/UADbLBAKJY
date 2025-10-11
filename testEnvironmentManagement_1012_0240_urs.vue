// 代码生成时间: 2025-10-12 02:40:22
import { ref, reactive, onMounted, onUnmounted } from 'vue';

export default {
    name: 'TestEnvironmentManagement',
    props: {},
    setup() {
        const environments = reactive([
            { id: 1, name: 'Dev', url: 'http://dev.example.com' },
            { id: 2, name: 'Staging', url: 'http://staging.example.com' }
        ]);

        const newEnvironment = reactive({
            name: '',
            url: ''
        });

        function addEnvironment() {
            if (newEnvironment.name && newEnvironment.url) {
                environments.push({
                    id: Date.now(),
                    name: newEnvironment.name,
                    url: newEnvironment.url
                });
                newEnvironment.name = '';
                newEnvironment.url = '';
            }
        }

        function removeEnvironment(id) {
            const index = environments.findIndex(env => env.id === id);
            if (index !== -1) {
                environments.splice(index, 1);
            }
        }

        onMounted(() => {
            console.log('Component mounted');
        });

        onUnmounted(() => {
            console.log('Component unmounted');
        });

        return {
            environments,
            newEnvironment,
            addEnvironment,
            removeEnvironment
        };
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>