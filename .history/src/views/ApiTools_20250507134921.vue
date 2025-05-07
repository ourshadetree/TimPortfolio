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
  
      <!-- Dynamic tool output -->
      <div class="tool-container">
        <component :is="currentComponent" />
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
  
  // start on the first tool
  const currentTab = ref(tools[0].name)
  
  // lookup the component to render
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
    /* give some breathing room under your tabs */
    padding-top: 1rem;
  }
  </style>
  