<template>

</template>

<script>
import {get} from "../helper/requests";

export default {
    name: "List",
    methods:{
        getList(){
            let _this=this
            get(_this,'/api/notes/',{})
        }
    }
};
</script>

<style scoped>

</style>