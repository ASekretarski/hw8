import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const galleryListItems = [];

galleryItems.forEach(item => {
    galleryListItems.push(`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`);
});

gallery.insertAdjacentHTML("beforeend", galleryListItems.join(""))



const allGalleryLinks = document.querySelectorAll('.gallery__item')

for (const link of allGalleryLinks) {
    link.addEventListener("click", function (event) {
        event.preventDefault()
    }) 
}

var lightbox = new SimpleLightbox('.gallery a', { captions:true, captionsData:'alt', captionDelay:250,  });