import iziToast from 'izitoast';
// Додатковий імпорт стилівcat
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { form, input, getImagesByQuery, loader } from './js/pixabay-api.js';
import { showLoader } from './js/render-functions.js';

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const query = input.value.toLowerCase().trim();
  showLoader(loader);
  getImagesByQuery(query);
}
