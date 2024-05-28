<template>
    <div class="note-list">
      <h1>Mes Notes</h1>
      <ul>
        <li v-for="note in notes" :key="note.id" class="note-item">
          <router-link :to="'/note/' + note.id" class="note-link">
            {{ note.title }}
          </router-link>
          <button @click="deleteNote(note.id)" class="delete-button">Supprimer</button>
        </li>
      </ul>
      <router-link to="/create" class="create-link">Créer une nouvelle note</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NoteList',
    data() {
      return {
        notes: []
      };
    },
    methods: {
      loadNotes() {
        const notes = localStorage.getItem('notes');
        this.notes = notes ? JSON.parse(notes) : [];
      },
      deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    },
    created() {
      this.loadNotes();
    }
  };
  </script>
  
  <style scoped>
  .note-list {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .note-list h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .note-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .note-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 6px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .note-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .note-link {
    text-decoration: none;
    color: #007bff;
    font-weight: 500;
  }
  
  .note-link:hover {
    text-decoration: underline;
  }
  
  .delete-button {
    background-color: #ff3b30;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .delete-button:hover {
    background-color: #d32f2f;
  }
  
  .create-link {
    display: block;
    margin-top: 20px;
    text-align: center;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.2s ease;
  }
  
  .create-link:hover {
    background-color: #0056b3;
  }
  </style>
  