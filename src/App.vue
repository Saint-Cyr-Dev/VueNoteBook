<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NoteList from './components/NoteList.vue';
</script>

<template>
  <div class="container">
    <aside class="sidebar">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/create">Créer une nouvelle note</RouterLink>
      </nav>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

nav a {
  text-decoration: none;
  color: #007bff;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

nav a:hover {
  background-color: #e2e6ea;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #ffffff;
}
</style>
