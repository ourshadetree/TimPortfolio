<template>
    <div class="rps-game">
      <h2>Rock · Paper · Scissors</h2>
  
      <div class="choices">
        <button v-for="c in choices" :key="c" @click="play(c)">
          {{ c }}
        </button>
      </div>
  
      <div v-if="result" class="results">
        <p>You chose: <strong>{{ player }}</strong></p>
        <p>Computer chose: <strong>{{ computer }}</strong></p>
        <p class="outcome">{{ result }}</p>
        <button @click="reset()">Play Again</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const choices = ['Rock', 'Paper', 'Scissors']
  const player   = ref('')
  const computer = ref('')
  const result   = ref('')
  
  function play(choice) {
    player.value = choice
    // pick random for computer
    const rand = choices[Math.floor(Math.random() * choices.length)]
    computer.value = rand
  
    // determine winner
    if (player.value === computer.value) {
      result.value = "It's a tie!"
    } else if (
      (player.value === 'Rock'     && computer.value === 'Scissors') ||
      (player.value === 'Paper'    && computer.value === 'Rock')     ||
      (player.value === 'Scissors' && computer.value === 'Paper')
    ) {
      result.value = 'You win! 🎉'
    } else {
      result.value = 'You lose… 😢'
    }
  }
  
  function reset() {
    player.value = ''
    computer.value = ''
    result.value = ''
  }
  </script>
  
  <style scoped>
  .rps-game {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .choices {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .choices button {
    flex: 1;
  }
  
  .results {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
  }
  
  .outcome {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  
  .results button {
    margin-top: 0.5rem;
  }
  </style>
  