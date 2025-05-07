<!-- src/views/Contact.vue -->
<template>
    <section class="contact">
      <h1>Contact</h1>
  
      <div class="contact-list">
        <!-- Name -->
        <div class="contact-item">
          <h2>Name</h2>
          <p>Timothy Smith‑Buisset</p>
        </div>
  
        <!-- Email + copy button -->
        <div class="contact-item">
          <h2>Email</h2>
          <div class="email-copy">
            <p>{{ email }}</p>
            <button @click="copyEmail" :disabled="copied">
              {{ copied ? 'Copied!' : 'Copy Email' }}
            </button>
          </div>
        </div>
  
        <!-- LinkedIn -->
        <div class="contact-item">
          <h2>LinkedIn</h2>
          <a :href="linkedinUrl" target="_blank" rel="noopener">
            {{ linkedinUrl }}
          </a>
        </div>
  
        <!-- Resume preview/download -->
        <div class="contact-item">
          <h2>Resume</h2>
          <div class="resume-buttons">
            <a :href="resumeUrl" target="_blank" rel="noopener">
              <button>Preview Resume</button>
            </a>
            <a :href="resumeUrl" download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import resumeFile from '@/assets/CurrentResumeTimSB.pdf'
  
  const email = 'ostcreate@gmail.com'
  const linkedinUrl = 'https://www.linkedin.com/in/tsmithb'
  const resumeUrl = resumeFile
  
  const copied = ref(false)
  
  function copyEmail() {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2000)
      })
      .catch(() => {
        // optional: handle failure (e.g. show an error toast)
      })
  }
  </script>
  
  <style scoped>
  .contact {
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: left;
  }
  
  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .contact-item h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .email-copy {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .email-copy p {
    margin: 0;
    font-family: monospace;
    background: #f0f0f0;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
  }
  
  .resume-buttons {
    display: flex;
    gap: 0.5rem;
  }
  
  .resume-buttons button {
    /* reuse your global button styles */
  }
  </style>
  