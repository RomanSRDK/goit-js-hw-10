import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_8wIL2AuT4kJgityt0Iu4D71qCQoe9vqO9Lj6dXyuW0BymRr2pOqHxTRypJqxmhjV';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
new SlimSelect({
  select: '#single',
});
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'https://api.thecatapi.com/v1/images/search?breed_ids';

export function getCatsList() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to fetch breeds.');
    });
}
export function fetchCatByBreed(breedId) {
  return axios
    .get(`${API_KEY}=${breedId}`)
    .then(response => {
      console.log(response.data[0]);
      return response.data[0];
    })
    .catch(error => {
      console.error(error);
      throw new Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}

//   .then(data => {
//     axios.get(`https://api.thecatapi.com/v1/images/${data[0].id}`)
//       .then(response => response.data)
//       .then(data => {
//         console.log(response);
//       });
//   })
//   .catch(err => {
//     console.log(err);
//   });

// fetch ('https://api.thecatapi.com/v1/images/search?breed_ids=beng')
// .then(response => {
// if(!response.ok) { throw new Error(response.status)
// }
// return response.json()
// }).then(data => {
// fetch (`https://api.thecatapi.com/v1/images/${data[0].id}`).then(response => {
// return response.json();
// }).then(data => {console.log(data);})

// }).catch(err => {console.log(err)});
