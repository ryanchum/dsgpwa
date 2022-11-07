<template lang="pug">
div(class="mainBody")
        b-icon(class="profileIcon" icon='person-circle')
        p {{clientName}}
</template>

<script>
export default{
    props:{
        clientName:{
            type:String,
        }
    }
}
</script>

<style lang="scss" scoped>
.mainBody{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 1.2em;
    display: flex;
}

.mainBody>p {
    font-size: 16px;
    font-weight: 700;
    margin: auto 0;
}

.profileIcon{
    margin: auto 1em;
    width:2.4rem;
    height: 2.4rem;
}
</style>