<template>
  <div>
    <button @click="increment">+</button>
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    increment() {
      this.$store.dispatch('incrementAction')
    },
    addCount() {
      this.$store.dispatch('addCountAction', {
        value: 10
      })
    }
  }
}
</script>

