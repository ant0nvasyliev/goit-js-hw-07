import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
      </li>
    `;
    })
    .join("");
}

if (galleryContainer) {
  galleryContainer.addEventListener("click", onGalleryContainerClick);
}

function onGalleryContainerClick(event) {
  if (event.target.classList.contains("gallery__image")) {
    event.preventDefault();
    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  }
}
