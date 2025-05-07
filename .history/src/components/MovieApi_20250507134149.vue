<template>
    <div class="movie-api">
      <h2>Search Movies</h2>
  
      <form @submit.prevent="searchMovies">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Enter movie title…"
        />
        <button type="submit">Search</button>
      </form>
  
      <div v-if="loading">Loading…</div>
      <div v-if="error" class="error">{{ error }}</div>
  
      <div v-if="movies.length" class="movies-grid">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
          <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
            :alt="movie.title"
          />
          <div class="movie-info">
            <h3>{{ movie.title }}</h3>
            <p class="release-date">{{ movie.release_date }}</p>
            <p class="overview">{{ movie.overview }}</p>
          </div>
        </div>
      </div>
  
      <div v-else-if="!loading && !error" class="no-results">
        No results found.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Put your TMDb API key in a .env (e.g. VITE_TMDB_API_KEY)
  // Fallback to placeholder if you haven’t set one up yet
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'YOUR_API_KEY'
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie'
  
  const searchQuery = ref('')
  const movies      = ref([])
  const loading     = ref(false)
  const error       = ref('')
  
  async function searchMovies() {
    if (!searchQuery.value.trim()) {
      movies.value = []
      return
    }
  
    loading.value = true
    error.value   = ''
    movies.value  = []
  
    try {
      const url = `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(
        searchQuery.value
      )}`
      const res = await fetch(url)
      const data = await res.json()
  
      if (!res.ok) {
        throw new Error(data.status_message || 'Error fetching movies.')
      }
      movies.value = data.results
    } catch (err) {
      error.value = err.message || 'Network error.'
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .movie-api {
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .movie-api form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }
  
  .movie-api input[type="text"] {
    flex: 1;
    padding: 0.6rem 1rem;
    border: 1px solid #0C2442;
    border-radius: 8px;
    font: inherit;
  }
  
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }
  
  .movie-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #f9f9f9;
  }
  
  .movie-card img {
    width: 100%;
    display: block;
  }
  
  .movie-info {
    padding: 0.5rem;
  }
  
  .movie-info h3 {
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
  }
  
  .release-date {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
  
  .overview {
    font-size: 0.85rem;
    line-height: 1.3;
    max-height: 4.5rem;
    overflow: hidden;
  }
  
  .error {
    color: #c00;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .no-results {
    font-style: italic;
    text-align: center;
  }
  </style>
  