<template lang="pug">
div(class="mainBody")
    header-side
    div(class="title")
        h2 Reminders
    //- Client List 
    announce-remind-list(title="Late Payment" desc="Payment is due for the upcoming sessions, please pay to avoid cancellations")
    announce-remind-list(title="Late Payment" desc="Payment is due for the upcoming sessions, please pay to avoid cancellations")
</template>

<script>
// @ is an alias to /src
import HeaderSide from '@/components/HeaderSide.vue'
import AnnounceRemindList from '@/components/AnnounceRemindList.vue'

export default {
    components: {
        HeaderSide,
        AnnounceRemindList,
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin: 1.2em 3em;
}

.title>h2 {
    font-weight: 700
}
</style>