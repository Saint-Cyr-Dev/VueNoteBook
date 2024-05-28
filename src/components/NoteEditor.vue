<template>
    <div class="form-container">
      <h1 class="form-title">Créer une nouvelle note</h1>
      <form @submit.prevent="saveNote" class="form">
        <input
          v-model="title"
          placeholder="Titre"
          class="form-input"
        >
        <textarea
          v-model="content"
          placeholder="Contenu"
          class="form-textarea"
        ></textarea>
        <button
          type="submit"
          class="form-button"
        >
          Enregistrer
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      saveNote() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const newNote = {
          id: Date.now().toString(),
          title: this.title,
          content: this.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    width: 100%;
    max-width: 28rem;
    margin: 2.5rem auto;
  }
  
  .form-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  
  .form-input:focus,
  .form-textarea:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.25);
    outline: none;
  }
  
  .form-textarea {
    height: 8rem;
  }
  
  .form-button {
    width: 100%;
    background-color: #3b82f6;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    cursor: pointer;
    border: none;
  }
  
  .form-button:hover {
    background-color: #1d4ed8;
  }
  </style>
  