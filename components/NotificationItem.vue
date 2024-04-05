<template>
    <div class="notification-item flex-div gap-4">
        <img :src="icon" alt="notificationIcon" class="noti-icon" />
        <div class="flex-grow">
            <div class="text-[24px] text-[#141414]">{{ title }}</div>
            <span class="pry-color text-[16px]">{{ date }}</span>
        </div>
        <div class="notifications-action-icons flex-div gap-[10px]">
            <img src="@/assets/images/notification-2.svg" alt="icon">
            <img src="@/assets/images/archive.svg" alt="icon">
        </div>
    </div>
</template>

<script>
export default {
    name: "NotificationItem",
    props: {
        icon: {
            type: String,
            default: ""
        }, 
        date: {
            type: String,
            default: ""
        }, 
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>

</style>