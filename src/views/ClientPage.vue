<template lang="pug">
div(class="mainBody")
    header-side
    div(class="title")
        h2 Clients
    //- Client List 
    client-list(clientName="Derpie")
    client-list(clientName="Ryan")
</template>

<script>
// @ is an alias to /src
import HeaderSide from '@/components/HeaderSide.vue'
import ClientList from '@/components/ClientList.vue'

export default {
    components: {
        HeaderSide,
        ClientList
    }
}
</script>

<style lang="scss" scoped>
.title{
    margin: 1.2em 3em;
}

.title>h2 {
    font-weight:700
}
</style>