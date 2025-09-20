import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery, form } from './pixabay-api.js';
export function createGallery(images) {
  const queryArr = images
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
        `<div class="card-img"><a class="img-link" href="${webformatURL}"><img class="img" src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}"></a><div class="caption"><p>Likes<br> ${likes}</p>
        <p>Views<br> ${views}</p><p>Comments<br> ${comments}</p>
        <p>Downloads<br> ${downloads}</p></div></div>`
    )
    .join('');
  gallery.innerHTML = queryArr;
  form.reset();
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
export function showLoader(loader) {
  loader.classList.remove('hidden');
}
export function hideLoader(loader) {
  loader.classList.add('hidden');
}
export function clearGallery(gallery) {
  gallery.innerHTML = '';
}
