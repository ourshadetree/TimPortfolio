<template>
    <section class="hero">
      <h1>Welcome to my Portfolio</h1>
      <p id="aboutMe">
        Hi, I’m <strong>Timothy Smith‑Buisset</strong>—a full‑stack developer and illustrator. I build clean, efficient web applications by day and sketch imaginative stories by night. Let’s combine code and creativity to bring your ideas to life.
      </p>
    </section>
  
    <p class="browse-message">
      Feel free to click one of the previews below, or explore the tabs above for more projects!
    </p>
  
    <div class="preview-grid">
      <router-link to="/api-tools" class="preview-card">
        <h3>API Tools</h3>
        <p>Interactive demos: Movie search, weather lookup, and more.</p>
      </router-link>
  
      <router-link to="/widgets" class="preview-card">
        <h3>Widgets</h3>
        <p>Utility components: Calculator, unit converter, and games.</p>
      </router-link>
    </div>
  </template>
  
  <script setup>
  // No additional script logic needed for static previews
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  #aboutMe {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0.5rem auto;
    line-height: 1.6;
    color: #333;
  }
  
  .browse-message {
    text-align: center;
    font-style: italic;
    margin-bottom: 1.5rem;
    color: #555;
  }
  
  .preview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .preview-card {
    display: block;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background: #fafafa;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s, transform 0.2s;
  }
  
  .preview-card:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
  
  .preview-card h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  
  .preview-card p {
    font-size: 0.95rem;
    color: #666;
  }
  </style>
  