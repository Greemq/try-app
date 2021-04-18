<template>
    <div>
        <headbar></headbar>
        <div class="container" style="position: relative">
        <router-view/>
        </div>
    </div>
</template>

<script>
import Headbar from './components/Headbar.vue'
export default {
    name: "App",
    components:{Headbar}
};
</script>

<style scoped>

</style>