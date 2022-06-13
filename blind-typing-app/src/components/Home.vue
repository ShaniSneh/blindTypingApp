<template>
  <div class="home">
    Choose diffeculty level:
    <ul v-for="level in levels">
      <li><button class="level.id" @click="chosenLevel(level.id)"> {{ level.desc }} </button></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        levels: [
          { id: 1, desc: 'Beginner' },
          { id: 2, desc: 'Intermediate' },
          { id: 3, desc: 'Expert' }
        ]
      }
    },
    methods: {
        chosenLevel(levelId) {
          this.$emit('chosenLevel', levelId)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

