import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
export const myApiKey = '52345527-f2cab98277e64c5f6ad4361cb';
import axios from 'axios';
export const form = document.querySelector('.form');
export const input = document.querySelector('input');
export const gallery = document.querySelector('.gallery');
export const loader = document.querySelector('.loader');
export function getImagesByQuery(query) {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response.data.hits);
      const arr = [...response.data.hits];
      const queryArr = arr
        .map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            views,
            likes,
            comments,
            downloads,
          }) =>
            `<div class="card-img"><a href="${webformatURL}"><img src=${webformatURL} data-sourse="${largeImageURL} alt="${tags}"></a><p>Likes ${likes}</p>
        <p>Views ${views}</p><p>Comments ${comments}</p>
        <p>Downloads ${downloads}</p></div>`
        )
        .join('');
      gallery.innerHTML = queryArr;

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      if (!arr.length) {
        iziToast.error({
          title: 'Sorry',
          message:
            'There are no images matching your search query. Please try again!',
          position: 'center',
        });
        return;
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => loader.classList.add('hidden'));
}
