import iziToast from 'izitoast';
// Додатковий імпорт стилівcat
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import {
  myApiKey,
  form,
  input,
  getImagesByQuery,
  loader,
} from './js/pixabay-api.js';

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const query = input.value.toLowerCase().trim();

  getImagesByQuery(query);
  console.log(query);
  loader.classList.remove('hidden');
}
