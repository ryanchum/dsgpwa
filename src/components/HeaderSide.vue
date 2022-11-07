<template lang="pug">
div(class='mainBody')
    b-row
        b-col(class="leftHeader" cols="2")
            b-icon(class="sidebarIcon" icon='list' v-b-toggle.sidebar-no-header)
            b-sidebar(id="sidebar-no-header" shadow width="240px")
                    ul
                        router-link(to="/client")
                            li
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='people-fill')
                                    |View Client
                        router-link(to="/session")
                            li
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='journal-bookmark-fill')
                                    | Past Sessions
                        router-link(to="/announcement")
                            li
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='calendar-check-fill')
                                    | Announcement
                        router-link(to="/reminder")
                            li
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='bell-fill')
                                    | Reminder
                        router-link(to="/billing")
                            li
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='cash-stack')
                                    | Billing
                        router-link(to="/contact")
                            li
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='telephone-fill')
                                    | Contact Us
                        router-link(to="/login")
                            li(class='logoutBtn')
                                p.h5.mb-2
                                    b-icon(class="menuIcon" icon='box-arrow-in-right')
                                    | Logout
        b-col(class="rightHeader" cols="10")
            p Good Afternoon,
            h3 Erling Haaland
</template>

<style lang="scss" scoped>
$base-color-purple :#50276B;
.mainBody{
    position:sticky;
    padding: 2em 1em;
    background-color: $base-color-purple;
    color: white;
}

.sidebarIcon{
    width: 2em;
    height:2em;
    cursor: pointer;
}

.sidebarIcon:active {
    width: 2em;
    height: 2em;
    cursor: pointer;
    transform: rotate(90deg);
    transition-duration: 0.5s;
}

.leftHeader{
    display: flex;
    align-items: center;
    justify-content: center;
}

ul{
    list-style: none;
    padding: 2em 1em;
}

li{
    margin-bottom: 1.2rem;
    margin-left: 1rem;
}

li.logoutBtn{
    position: absolute;
    bottom: 2rem;
}

a{
    color:black;
    text-decoration: none;
}
.menuIcon{
    margin-right: 12px;
}
.rightHeader {
    display: flex;
    flex-direction: column;
}

.rightHeader>p {
    margin-bottom: 5px;
}
</style>