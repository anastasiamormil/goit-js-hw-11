import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації

import { createGallery, hideLoader, clearGallery } from './render-functions';

import axios from 'axios';
export const form = document.querySelector('.form');
export const input = document.querySelector('input');
export const gallery = document.querySelector('.gallery');
export const loader = document.querySelector('.loader');
export function getImagesByQuery(query) {
  console.log('getImagesByQuery run with query:', query);
  clearGallery(gallery);
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '52345527-f2cab98277e64c5f6ad4361cb',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response.data.hits);
      const images = [...response.data.hits];
      if (!images.length) {
        iziToast.error({
          title: 'Sorry',
          message:
            'There are no images matching your search query. Please try again!',
          position: 'center',
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => hideLoader(loader));
}
