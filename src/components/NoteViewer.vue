<template>
    <div class="note-view">
      <h1 class="note-title">{{ note.title }}</h1>
      <p class="note-content">{{ note.content }}</p>
      <div class="note-meta">
        <p class="note-date">Créée le : {{ new Date(note.createdAt).toLocaleString() }}</p>
        <p class="note-date">Dernière mise à jour : {{ new Date(note.updatedAt).toLocaleString() }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        note: null
      };
    },
    created() {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      this.note = notes.find(note => note.id === this.$route.params.id);
    }
  };
  </script>
  
  <style scoped>
  .note-view {
    padding: 20px;
    max-width: 600px;
    margin: 40px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  
  .note-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .note-content {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
  }
  
  .note-meta {
    font-size: 0.875rem;
    color: #777;
    margin-bottom: 20px;
  }
  
  .note-date {
    margin: 5px 0;
  }
  
  .edit-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .edit-link:hover {
    background-color: #0056b3;
  }
  </style>
  