<template>
    <div class="tictactoe-game">
      <h2>Tic Tac Toe</h2>
  
      <div class="board">
        <button
          v-for="(cell, idx) in board"
          :key="idx"
          class="cell"
          @click="play(idx)"
        >
          {{ cell }}
        </button>
      </div>
  
      <div class="game-info">
        <p v-if="!winner">Current Player: <strong>{{ currentPlayer }}</strong></p>
        <p v-else-if="winner === 'Draw'">It's a draw!</p>
        <p v-else>Winner: <strong>{{ winner }}</strong></p>
  
        <button v-if="winner" @click="reset()">Reset Game</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const board = ref(Array(9).fill(''))
  const currentPlayer = ref('X')
  const winner = ref(null)
  let moveCount = 0
  
  const winningLines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  
  function play(idx) {
    if (board.value[idx] || winner.value) return
  
    board.value[idx] = currentPlayer.value
    moveCount++
  
    checkWinner()
    if (!winner.value) {
      if (moveCount === 9) {
        winner.value = 'Draw'
      } else {
        currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
      }
    }
  }
  
  function checkWinner() {
    for (const [a,b,c] of winningLines) {
      const v = board.value[a]
      if (v && v === board.value[b] && v === board.value[c]) {
        winner.value = v
        return
      }
    }
  }
  
  function reset() {
    board.value = Array(9).fill('')
    currentPlayer.value = 'X'
    winner.value = null
    moveCount = 0
  }
  </script>
  
  <style scoped>
  .tictactoe-game {
    text-align: center;
    max-width: 320px;
    margin: 0 auto;
  }
  
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;
  }
  
  .cell {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .game-info p {
    margin: 0.5rem 0;
  }
  
  .game-info button {
    margin-top: 0.5rem;
  }
  </style>
  