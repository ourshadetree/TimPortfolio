<!-- src/views/ApiTools.vue -->
<template>
    <section>
      <h1>API Tools</h1>
      <p>Here is a basic example of my ability to access and use APIs</p>
      <!-- Tab header -->
      <nav>
        <button
          v-for="tool in tools"
          :key="tool.name"
          @click="toggleTool(tool.name)"
          :class="['tab', tool.tabClass, { 'router-link-active': currentTab === tool.name }]"
        >
          {{ tool.name }}
        </button>
      </nav>
  
      <!-- Placeholder or Dynamic tool output -->
      <div class="tool-container">
        <p v-if="!currentTab" class="choose-message">
          Please choose a tool to use.
        </p>
        <!-- v-if so that when currentTab is null this unmounts -->
        <component
          v-if="currentTab"
          :is="currentComponent"
          :key="currentTab"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import MovieApi from '@/components/MovieApi.vue'
  import WeatherApi from '@/components/WeatherApi.vue'
  // import OtherApiTool from '@/components/OtherApiTool.vue'
  
  const tools = [
    { name: 'TMDb Search', component: MovieApi, tabClass: 'tab--api' },
    { name: 'Weather',     component: WeatherApi, tabClass: 'tab--widgets' },
    // { name: 'Other Tool', component: OtherApiTool, tabClass: 'tab--widgets' },
  ]
  
  // no default selection
  const currentTab = ref(null)
  
  function toggleTool(name) {
    currentTab.value = currentTab.value === name ? null : name
  }
  
  const currentComponent = computed(() => {
    const sel = tools.find(t => t.name === currentTab.value)
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
  
  .tool-container {
    padding-top: 1rem;
  }
  
  .choose-message {
    font-style: italic;
    color: #555;
    text-align: center;
  }
  </style>
  