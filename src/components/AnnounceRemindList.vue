<template lang="pug">
div(class="mainBody")
    b-icon(class="profileIcon" icon='person-circle')
    div(class="contextBody")
        h3(class="title") {{title}}
        p(class="desc") {{desc}}
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        desc: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.mainBody {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 0.6rem 1.2rem;
    display: flex;
}

.title{
    font-size: 16px;
    font-weight:700;
}
.desc {
    font-size: 12px;
    font-weight: 500;
}

.contextBody{
    display:flex;
    flex-direction: column;
}
.profileIcon {
    margin: auto 1em;
    width: 2rem;
    height: 2rem;
}
</style>