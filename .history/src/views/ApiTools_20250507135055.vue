<!-- src/views/ApiTools.vue -->
<template>
    <section>
      <h1>API Tools</h1>
  
      <!-- Tab header -->
      <nav>
        <button
          v-for="tool in tools"
          :key="tool.name"
          @click="currentTab = tool.name"
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
        <component v-else :is="currentComponent" />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import MovieApi from '@/components/MovieApi.vue'
  // import OtherApiTool from '@/components/OtherApiTool.vue'
  
  const tools = [
    { name: 'TMDb Search', component: MovieApi, tabClass: 'tab--api' },
    // { name: 'Other Tool', component: OtherApiTool, tabClass: 'tab--widgets' },
  ]
  
  // start with no tab selected
  const currentTab = ref(null)
  
  // lookup the component to render, or null if none
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
  