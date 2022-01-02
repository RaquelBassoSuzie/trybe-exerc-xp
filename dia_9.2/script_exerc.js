// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObjc = {
      method: 'GET',
      headers: {'Accept': 'aplication/json'}
  }

  fetch(API_URL, myObjc)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();