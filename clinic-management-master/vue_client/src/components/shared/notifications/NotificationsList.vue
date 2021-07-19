<template>
    <div>
        <notification v-for="notification of notifications" :key="notification.id" :notification="notification"/>
    </div>
</template>

<script>
  import Notification from "./Notification";
  import {mapGetters} from "vuex";

  export default {
    name: "NotificationsList",
    components: {Notification},
    computed: {
      ...mapGetters(['notifications'])
    }
  }
</script>

<style scoped>

</style>

