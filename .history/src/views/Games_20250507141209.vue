<!-- src/views/Games.vue -->
<template>
    <section>
      <h1>Games</h1>
  
      <!-- Tab header -->
      <nav>
        <button
          v-for="game in games"
          :key="game.name"
          @click="toggleGame(game.name)"
          :class="['tab', game.tabClass, { 'router-link-active': currentTab === game.name }]"
        >
          {{ game.name }}
        </button>
      </nav>
  
      <!-- Placeholder or dynamic game output -->
      <div class="game-container">
        <p v-if="!currentTab" class="choose-message">
          Please choose a game to play.
        </p>
        <component
          v-else
          :is="currentComponent"
          :key="currentTab"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import RockPaperScissors from '@/components/RockPaperScissors.vue'
  import TicTacToe         from '@/components/TicTacToe.vue'
  
  const games = [
    { name: 'Rock·Paper·Scissors', component: RockPaperScissors, tabClass: 'tab--games' },
    { name: 'Tic Tac Toe',          component: TicTacToe,         tabClass: 'tab--games' },
  ]
  
  const currentTab = ref(null)
  
  function toggleGame(name) {
    currentTab.value = currentTab.value === name ? null : name
  }
  
  const currentComponent = computed(() => {
    const sel = games.find(g => g.name === currentTab.value)
    return sel ? sel.component : null
  })
  </script>
  
  <style scoped>
  nav {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .game-container {
    padding-top: 1rem;
  }
  
  .choose-message {
    font-style: italic;
    color: #555;
    text-align: center;
  }
  </style>
  