<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    {{$store.state.count}}
    <hr>
    <ul>
      <li v-for="user in visibleUsers" :key="user.id">
        {{user.id}}：{{user.name}}：{{user.isvisible}}
      </li>
    </ul>
    <hr>
    {{getUsersId}}
  </div>
</template>

<script>
export default {
  computed: {
    visibleUsers() {
      return this.$store.getters.visibleUsers
    },
    getUsersId() {
      return this.$store.getters.getUsersId(2)
    }
  }
}
</script>

