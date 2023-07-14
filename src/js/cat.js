import { getCatsList, fetchCatByBreed } from './cat-api';

const refs = {
  selectEl: document.querySelector('.breed-select'),
  catBox: document.querySelector('.cat-info'),
  loaderElement: document.querySelector('.loader'),
  errorElement: document.querySelector('.error'),
};

refs.errorElement.classList.add('visually-hidden');

getCatsList()
  .then(cats => {
    console.log(cats);
    renderCatSelect(cats);
  })
  .catch(error => {
    console.error(error);

    showError();
  });

function renderCatSelect(cats) {
  refs.loaderElement.classList.add('visually-hidden');
  const markup = cats
    .map(cat => {
      return `<option value="${cat.id}">${cat.name}</option>`;
    })
    .join('');
  refs.selectEl.insertAdjacentHTML('beforeend', markup);
}
refs.selectEl.addEventListener('change', event => {
  refs.loaderElement.classList.remove('visually-hidden');
  fetchCatByBreed(event.target.value)
    .then(cat => renderCat(cat))
    .catch(error => {
      console.error(error);
      refs.errorElement.classList.remove('visually-hidden');
    });
});

function renderCat(cat) {
  refs.loaderElement.classList.add('visually-hidden');
  console.log(cat);
  const catInfo = cat.breeds[0];
  const markup = `<div class="picture-container">
     <img class="cat-picture" src="${cat.url}" alt="${cat.name}"> 
    </div>
    <div class="description-container"> 
     <h3>${catInfo.name}</h3>
     <p>${catInfo.description}</p>
     <h4> <span class="text-selection">Temperament: </span>${catInfo.temperament}</h4>
    </div>`;

  refs.catBox.innerHTML = markup;
}

