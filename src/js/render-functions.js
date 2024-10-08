// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

export const renderImages = images => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
  
    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
  
    const markup = images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
              <li class="gallery-item">
                  <a href="${largeImageURL}" class="gallery-link">
                      <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
                  </a>
                  <div class="info">
                      <p class="info-item"><span class="info-item-total">Likes</span> ${likes}</p>
                      <p class="info-item"><span class="info-item-total">Views</span> ${views}</p>
                      <p class="info-item"><span class="info-item-total">Comments</span> ${comments}</p>
                      <p class="info-item"><span class="info-item-total">Downloads</span> ${downloads}</p>
                  </div>
              </li>
          `
      )
      .join('');
  
    gallery.innerHTML = markup;
  };
  
  export const showLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
  };
  
  export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
  };


//перевірка чи встановлено бібліотеку
// iziToast.show({
//     title: 'Hello',
//     message: 'Це ваше перше повідомлення!',
//     position: 'topRight' // Позиція повідомлення
// });

//Перевірка чи ініціалізована бібліотека
// if (typeof iziToast !== 'undefined') {
//     console.log('iziToast ініціалізовано.');
// } else {
//     console.log('iziToast не знайдено. Переконайтеся, що бібліотека підключена.');
// }
