<template>
  <header class="header">
    <a @click="toggleMenu" class="toggle" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
      <router-link to="/">
        {{ title }}
      </router-link>
    </h1>
    <div>
      <UserDropdown v-if="!hideUserDropdown" />
    </div>
  </header>
</template>

<script>
import UserDropdown from './UserDropdown';


export default {
  name: "Header",
  components: { UserDropdown },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu') // Chamando a função passada no gerenciador de estados
    }
  }
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
}

.title a {
  color: #fff;
  text-decoration: none;
}

.title a:hover {
  color: #fff;
}

header.header>a.toggle {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

header.header>a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.4)
}
</style>