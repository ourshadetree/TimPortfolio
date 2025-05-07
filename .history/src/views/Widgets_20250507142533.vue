<!-- src/views/Widgets.vue -->
<template>
    <section>
      <h1>Widgets</h1>
      <p>Here are some basic widgets to show clean execution of compact code</p>
      <!-- Tab header -->
      <nav>
        <button
          v-for="widget in widgets"
          :key="widget.name"
          @click="toggleWidget(widget.name)"
          :class="['tab', widget.tabClass, { 'router-link-active': currentTab === widget.name }]"
        >
          {{ widget.name }}
        </button>
      </nav>
  
      <!-- Placeholder or dynamic widget output -->
      <div class="widget-container">
        <p v-if="!currentTab" class="choose-message">
          Please choose a widget to use.
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
  import Calculator     from '@/components/Calculator.vue'
  import UnitConverter  from '@/components/UnitConverter.vue'
  
  const widgets = [
    { name: 'Calculator',     component: Calculator,    tabClass: 'tab--widgets' },
    { name: 'Unit Converter', component: UnitConverter, tabClass: 'tab--widgets' },
  ]
  
  const currentTab = ref(null)
  
  function toggleWidget(name) {
    currentTab.value = currentTab.value === name ? null : name
  }
  
  const currentComponent = computed(() => {
    const sel = widgets.find(w => w.name === currentTab.value)
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
  
  .widget-container {
    padding-top: 1rem;
  }
  
  .choose-message {
    font-style: italic;
    color: #555;
    text-align: center;
  }
  </style>
  