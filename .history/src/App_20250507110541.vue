<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/"       class="tab tab--home">Home</router-link>
        <router-link to="/api-tools" class="tab tab--api">API Tools</router-link>
        <router-link to="/widgets"   class="tab tab--widgets">Widgets</router-link>
        <router-link to="/games"     class="tab tab--games">Games</router-link>
        <router-link to="/contact"   class="tab tab--contact">Contact</router-link>
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
  background: yellow; /* pastel blue when active */
}

/* base tab style */
.tab {
  padding: 0.6rem 1.2rem;
  border: 1px solid #000;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #0C2442;
  transition: opacity .2s;
}
.tab:hover {
  opacity: 0.8;
}

/* pastel colours for each */
.tab--home     { background: #FFEBEE; } /* very light pink */
.tab--api      { background: #E3F2FD; } /* very light blue */
.tab--widgets  { background: #E8F5E9; } /* very light green */
.tab--games    { background: #F3E5F5; } /* very light purple */
.tab--contact  { background: #FFFDE7; } /* very light yellow */

</style>
