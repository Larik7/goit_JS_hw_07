import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const imagesBox = document.querySelector('.gallery');
const imagesMarcup = createImagesGallery(galleryItems);
imagesBox.insertAdjacentHTML('beforeend', imagesMarcup);

function createImagesGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
        }).join("");
}

const lightBox = new SimpleLightbox('.gallery a', { captions: true, captionsData: "alt", captionType: "attr", captionDelay: 250 });
