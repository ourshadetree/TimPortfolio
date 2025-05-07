<template>
    <div class="weather-api">
      <h2>Check the Weather</h2>
  
      <form @submit.prevent="getWeather">
        <input
          v-model="location"
          type="text"
          placeholder="Enter city name or ZIP code…"
        />
        <button type="submit">Get Weather</button>
      </form>
  
      <div v-if="loading">Loading…</div>
      <div v-if="error" class="error">{{ error }}</div>
  
      <div v-if="weather" class="weather-card">
        <h3>{{ weather.name }}, {{ weather.sys.country }}</h3>
        <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
        <div class="desc">
          <img
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            :alt="weather.weather[0].description"
          />
          <p>{{ weather.weather[0].description }}</p>
        </div>
        <p>Humidity: {{ weather.main.humidity }}%</p>
        <p>Wind: {{ weather.wind.speed }} m/s</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
  
  const location = ref('')
  const weather  = ref(null)
  const loading  = ref(false)
  const error    = ref('')
  
  async function getWeather() {
    if (!location.value.trim()) {
      weather.value = null
      return
    }
  
    loading.value = true
    error.value   = ''
    weather.value = null
  
    try {
      const query = encodeURIComponent(location.value.trim())
      const url   = `${BASE_URL}?q=${query}&units=metric&appid=${API_KEY}`
      const res   = await fetch(url)
      const data  = await res.json()
  
      if (!res.ok) {
        throw new Error(data.message || 'Error fetching weather.')
      }
      weather.value = data
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .weather-api {
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .weather-api form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    justify-content: center;
  }
  
  .weather-api input {
    flex: 1;
    padding: 0.6rem 1rem;
    border: 1px solid #0C2442;
    border-radius: 8px;
    font: inherit;
  }
  
  .weather-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background: #f9f9f9;
    text-align: center;
  }
  
  .weather-card h3 {
    margin-bottom: 0.5rem;
  }
  
  .temp {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .desc {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .error {
    color: #c00;
    text-align: center;
    margin-bottom: 1rem;
  }
  </style>
  