<template>
    <div class="alert alert-warning alert-dismissible fade show" :class="`alert-${notification.type}`" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="onExit">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>{{ notification.message }}</strong>
    </div>
</template>

<script>
  import {NOTIFICATIONS_REMOVE} from "../../../store/mutations.type";

  export default {
    name: "Notification",
    props: {
      notification: {
        required: true,
        type: Object
      },
    },
    mounted() {
      setTimeout(this.onExit, this.notification.timeout || 5000)
    },
    methods: {
      onExit() {
        this.$store.commit(NOTIFICATIONS_REMOVE, this.notification);
      }
    }
  }
</script>

<style scoped>
    .success {
        @apply . bg-green-100 . border . border-green-400;
    }

    .danger {
        @apply . bg-red-100 . border . border-red-400;
    }

</style>

