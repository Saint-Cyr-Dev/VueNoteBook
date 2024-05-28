import { createRouter, createWebHistory } from 'vue-router';
import NoteList from '../components/NoteList.vue';
import NoteEditor from '../components/NoteEditor.vue';
import NoteViewer from '../components/NoteViewer.vue';

const routes = [
  { path: '/', component: NoteList },
  { path: '/note/:id', component: NoteViewer, props: true },
  { path: '/create', component: NoteEditor }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
