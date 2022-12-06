// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const parentContEl = document.querySelector('.gallery');


function makeEl ({preview,description,original}){
return`<a class="gallery__item" href="${original}" onclick="return false;"; ><img
class="gallery__image"
src="${preview}"
alt="${description}"
/></a>`
}
const addElHtml = galleryItems.map(makeEl).join('');
parentContEl.insertAdjacentHTML('afterbegin',addElHtml);

new SimpleLightbox('.gallery a',{captionsData:"alt",captionPosition:'bottom', captionDelay:250});
console.log(addElHtml)
