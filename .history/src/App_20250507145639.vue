<template>
  <div id="app">
    <header>
      <nav>
        <router-link
          to="/"
          class="tab tab--home"
          exact-active-class="router-link-active"
        >Home</router-link>

        <router-link
          to="/api-tools"
          class="tab tab--api"
          active-class="router-link-active"
        >API Tools</router-link>

        <router-link
          to="/widgets"
          class="tab tab--widgets"
          active-class="router-link-active"
        >Widgets</router-link>

        <router-link
          to="/games"
          class="tab tab--games"
          active-class="router-link-active"
        >Games</router-link>

        <router-link
          to="/contact"
          class="tab tab--contact"
          active-class="router-link-active"
        >Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
// no script needed
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
  flex-wrap: wrap;
  justify-content: center;
}
nav a {
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 8px;
  color: #0C2442;
  text-decoration: none;
  font-weight: bold;
}

/* base tab style */
.tab {
  padding: 0.6rem 1.2rem;
  border: 1px solid #000;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #0C2442;
  transition: opacity 0.2s;
}
.tab:hover {
  opacity: 0.8;
}

/* Pastel for each tab */
.tab--home     { background: #FFEBEE; }
.tab--api      { background: #E3F2FD; }
.tab--widgets  { background: #E8F5E9; }
.tab--games    { background: #F3E5F5; }
.tab--contact  { background: #FFFDE7; }
</style>