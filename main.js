/*
https://rickandmortyapi.com/api/character
coger los datos de esta URL y mostrarlos como un listado de personajes con su foto, su nombre y su especie
 */
const rickymorty = document.getElementById('root');
let url = 'https://rickandmortyapi.com/api/character';

let arrayObject = [];

const fetchResults = (url) => { //funcion para obtener los personajes
   const request = fetch(url)
   .then((response) => {
      if (response.ok) {
         response.json().then((jsonData) => {
            arrayObject = jsonData.results;
            console.log(arrayObject);
            let arrayContent = [];
            arrayObject.forEach(object => {
               const user = new User(object.name, object.image, object.species);
               console.log(user);
               arrayContent.push(arrayObject);
            });

         })
         .catch((error) => alert('Error al coger la API'));
      }
   })
   .catch((error) => alert('Errlr en la API'));
}

fetchResults(url); // llamada a la funcion