document.addEventListener("DOMContentLoaded", function() {
 getDogImages();

})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let allBreeds = []

let filteredBreeds = []


console.log('%c HI', 'color: firebrick')

function getDogImages(){
     fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImage(json))
  
    //.then(json => console.log(json)) 
}


function addImage(json){
    json.message.forEach(image => { 
        let container = document.querySelector("#dog-image-container")
        let createImage = document.createElement("img")
        createImage.src = image
        container.appendChild(createImage)
    });  
}

function getDogBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    //.then(json => console.log(json))
    .then(json => addBreeds(json))
}

function addBreeds(json) {
    json.message.forEach(breed => {
        let ul = document.querySelector('#dog-breeds')
        let li = document.createElement('li')
         li.src = breed 
         ul.appendChild(li)
    
    })
    
}   

function getDogBreeds() {
    return fetch(breedUrl).then(resp => resp.json()).then(json => createBreedsArray(json));
  }
  
  function createBreedsArray(json) {
    allBreeds = Object.keys(json.message)
    listBreeds(allBreeds);
  }
  
  function listBreeds(breeds) {
    let dogBreedList = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
      let newLiElem = document.createElement('li');
      newLiElem.textContent = breed;
      newLiElem.addEventListener('click', changeColor)
      dogBreedList.appendChild(newLiElem);
    })
  }
  
  function changeColor(event) {
    event.target.style.color = "blue";
  }
  
  function dropdownFiltering() {
    const dropdownElem = document.getElementById('breed-dropdown');
    const dogBreedList = document.getElementById("dog-breeds");
    dropdownElem.addEventListener('change', function (){
      while (dogBreedList.firstChild) dogBreedList.removeChild(dogBreedList.firstChild);
      filterBreeds(this.value);
    })
  }
  
  function filterBreeds(letter) {
    filteredBreeds = [];
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    listBreeds(filteredBreeds);
  }
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    getDogImages()
    getDogBreeds()
    dropdownFiltering()
  })

 







