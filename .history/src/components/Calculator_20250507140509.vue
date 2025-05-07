<template>
    <div class="calculator">
      <!-- Display -->
      <div class="display">{{ display }}</div>
  
      <!-- Buttons grid -->
      <div class="buttons-grid">
        <button
          v-for="btn in buttons"
          :key="btn"
          @click="press(btn)"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const display = ref('0')
  
  // Layout buttons in logical order
  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ]
  
  function press(btn) {
    if (btn === 'C') {
      display.value = '0'
      return
    }
  
    if (btn === '=') {
      try {
        // simple eval; in a real app sanitize more carefully
        display.value = String(eval(display.value))
      } catch {
        display.value = 'Error'
      }
      return
    }
  
    // build up the expression
    if (display.value === '0' && btn !== '.') {
      display.value = btn
    } else {
      display.value += btn
    }
  }
  </script>
  
  <style scoped>
  .calculator {
    max-width: 240px;
    margin: 0 auto;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
  }
  
  .display {
    height: 2.4rem;
    background: #e0e0e0;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    overflow-x: auto;
  }
  
  .buttons-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  
  /* Let the global button styles handle border, bg, hover, etc. */
  .buttons-grid button {
    font-size: 1rem;
    padding: 0.8rem 0;
  }
  </style>
  