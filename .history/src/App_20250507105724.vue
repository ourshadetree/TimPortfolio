<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/api-tools">API Tools</router-link>
        <router-link to="/widgets">Widgets</router-link>
        <router-link to="/games">Games</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup>
// no script needed here yet
</script>

<style scoped>
#app {
  background: white;
  min-height: 100vh;
}

/* header/nav styling */
header {
  padding: 1rem;
  border-bottom: 1px solid black;
  text-align: center;
}
nav {
  display: inline-flex;
  gap: 0.5rem;
}
nav a {
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 8px;
  background: #FDEFF9; /* pastel pink */
  color: #0C2442;
  text-decoration: none;
  font-weight: bold;
}
nav a.router-link-active {
  background: #D0F0FD; /* pastel blue when active */
}
</style>
