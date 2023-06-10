import { galleryItems } from "./gallery-items.js";
// Change code below this line

// рендер
const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// Реалізація делегування на ul.gallery і отримання url великого зображення. Заборона поведінки за замовчуванням.
galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick(event) {
  if (event.target.classList.contains("gallery__image")) {
    // Заборона поведінки за замовчуванням.
    event.preventDefault();
    // Підключення скрипту бібліотеки модального вікна basicLightbox.
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show();
  }
}

// розмітка

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}
