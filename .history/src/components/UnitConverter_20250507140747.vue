<template>
    <div class="unit-converter">
      <h2>Unit Converter</h2>
  
      <div class="converter-controls">
        <select v-model="category">
          <option
            v-for="cat in categories"
            :key="cat"
            :value="cat"
          >{{ cat }}</option>
        </select>
  
        <input
          v-model.number="inputValue"
          type="number"
          placeholder="Enter value…"
        />
  
        <select v-model="fromUnit">
          <option
            v-for="unit in unitOptions[category]"
            :key="unit"
            :value="unit"
          >{{ unit }}</option>
        </select>
  
        <span class="arrow">→</span>
  
        <select v-model="toUnit">
          <option
            v-for="unit in unitOptions[category]"
            :key="unit"
            :value="unit"
          >{{ unit }}</option>
        </select>
      </div>
  
      <div v-if="formattedResult" class="result">
        {{ inputValue }} {{ fromUnit }} = {{ formattedResult }} {{ toUnit }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  
  // Define available units per category
  const unitOptions = {
    Temperature: ['Celsius','Fahrenheit','Kelvin'],
    Length:      ['Meters','Kilometers','Miles','Feet'],
    Mass:        ['Kilograms','Pounds','Ounces']
  }
  
  const categories = Object.keys(unitOptions)
  
  // Reactive state
  const category   = ref(categories[0])
  const inputValue = ref(null)
  const fromUnit   = ref(unitOptions[category.value][0])
  const toUnit     = ref(unitOptions[category.value][1])
  
  // When user switches category, reset units & input
  watch(category, (newCat) => {
    fromUnit.value   = unitOptions[newCat][0]
    toUnit.value     = unitOptions[newCat][1]
    inputValue.value = null
  })
  
  // Conversion factors for Length (to base unit: meter)
  const lengthFactors = {
    Meters: 1,
    Kilometers: 1000,
    Miles: 1609.34,
    Feet: 0.3048
  }
  
  // Conversion factors for Mass (to base unit: kilogram)
  const massFactors = {
    Kilograms: 1,
    Pounds: 0.453592,
    Ounces: 0.0283495
  }
  
  // Generic converter using factor maps
  function convertGeneric(val, from, to, factors) {
    const inBase = val * factors[from]
    return inBase / factors[to]
  }
  
  // Temperature converter
  function convertTemperature(val, from, to) {
    let celsius
    if (from === 'Celsius')      celsius = val
    else if (from === 'Fahrenheit') celsius = (val - 32) * 5/9
    else if (from === 'Kelvin')     celsius = val - 273.15
  
    if (to === 'Celsius')      return celsius
    if (to === 'Fahrenheit')   return celsius * 9/5 + 32
    if (to === 'Kelvin')       return celsius + 273.15
    return celsius
  }
  
  // Compute raw conversion
  const rawResult = computed(() => {
    const v = inputValue.value
    if (v === null || isNaN(v)) return ''
    if (category.value === 'Temperature') {
      return convertTemperature(v, fromUnit.value, toUnit.value)
    }
    if (category.value === 'Length') {
      return convertGeneric(v, fromUnit.value, toUnit.value, lengthFactors)
    }
    if (category.value === 'Mass') {
      return convertGeneric(v, fromUnit.value, toUnit.value, massFactors)
    }
    return ''
  })
  
  // Format to two decimals
  const formattedResult = computed(() => {
    return rawResult.value !== '' 
      ? rawResult.value.toFixed(2)
      : ''
  })
  </script>
  
  <style scoped>
  .unit-converter {
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .converter-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  /* re-use your global input/select styles */
  .converter-controls input,
  .converter-controls select {
    padding: 0.6rem 1rem;
    border: 1px solid #0C2442;
    border-radius: 8px;
    font: inherit;
  }
  
  .arrow {
    font-size: 1.2rem;
  }
  
  .result {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
  }
  </style>
  