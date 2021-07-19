<template>
    <div class="wrapper">
        <nav class="navbar navbar-expand navbar-light bg-light justify-content-between">
            <div class="container">
                <div class="nav navbar-nav">
                    <router-link class="navbar-brand" :to="{name: 'dashboard'}">
                        Zalogowano
                    </router-link>
                </div>
                <div class="nav navbar-nav">
                  <a class="nav-link" style="cursor: pointer" @click="logout()">Wyloguj</a>
                </div>
            </div>
        </nav>

        <div class="container" style="margin-top: 30px;">
            <notifications-list/>

        </div>
    </div>
</template>

<script>
  import {LOGOUT} from "../../store/actions.type";
  import {mapGetters} from "vuex";
  import NotificationsList from "../../components/shared/notifications/NotificationsList";

  export default {
    name: "Dashboard",
    components: {NotificationsList},
    computed: {
      ...mapGetters(['user']),
    },
    methods: {
      logout() {
        this.$store.dispatch(LOGOUT)
          .then(() => this.$router.push({name: 'auth.login'}));
      }
    }
  }
</script>

<style scoped>

</style>

