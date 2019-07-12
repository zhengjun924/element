<template>
    <div>
        Niaho
    </div>
</template>

<script>
    export default {
        name:'bArea',
        methods: {
            fetch(){
               this.$axios.post('/zheng/user/login',{
                   data:{
                       'email':'webzheng@126.com',
                       'password':'zhnegjun'
                   }
               })
               .then(res=>{
                   console.log(res)
               })
            }
        },
        mounted() {
            this.fetch();
        },
    }
</script>

<style lang="less" scoped>

</style>