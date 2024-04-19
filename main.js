/*
https://rickandmortyapi.com/api/character
coger los datos de esta URL y mostrarlos como un listado de personajes con su foto, su nombre y su especie
 */
const titleContent = document.getElementById('title')
const root = document.getElementById('root');
let url = 'https://rickandmortyapi.com/api/character';

let object = [];

const rickymorty = document.createElement('h1');
rickymorty.innerText = 'Rick y Morty';
titleContent.appendChild(rickymorty);

const writeTextInHtml = (content) =>{
   const target = document.createElement('div');
   const title = document.createElement(`h4`)
   title.innerText = content.getname();
   target.appendChild(title)
   const img = document.createElement('img')
   img.src = content.getimage();
   target.appendChild(img)
   const specie = document.createElement(`p`)
   specie.innerText = content.getspecies();
   target.appendChild(specie)
   root.appendChild(target)
}

const fetchResults = (url) => { //funcion para obtener los personajes
   const request = fetch(url)
   .then((response) => {
      if (response.ok) {
         response.json().then((jsonData) => {
            object = jsonData.results;
            console.log(object);
            let content = [];
            object.forEach(object => {
               const user = new User(object.name, object.image, object.species);
               console.log(user);
               content.push(user);
               
            });
            console.log(content.length)
            for (let i = 0; i < content.length; i++) {
               writeTextInHtml(content[i]);
               
            }
         })
         
         .catch((error) => alert('Error al coger la API'));
      }
      
   })
   .catch((error) => alert('Errlr en la API'));
}

fetchResults(url); // llamada a la funcion