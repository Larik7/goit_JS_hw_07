import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(basicLightbox);
const imagesBox = document.querySelector('.gallery');
const imagesMarcup = createImagesGallery(galleryItems);
imagesBox.insertAdjacentHTML('beforeend', imagesMarcup);

function createImagesGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        }).join("");
}

imagesBox.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const bigImage = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
    <img src="${bigImage}" width="800" height="600">
`)

    instance.show();
});
