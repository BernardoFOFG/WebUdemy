<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from 'vuex'


export default {
name: 'Menu',
computed: mapState(['isMenuVisible']) // esse mapState serve para identificar para o componente os estados que você pretende utilizar 
}
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>