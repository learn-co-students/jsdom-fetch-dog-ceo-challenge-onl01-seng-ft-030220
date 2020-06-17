console.log('%c HI', 'color: firebrick')



document.addEventListener('DOMContentLoaded', function() {
  loadImages()
  loadBreeds()
  })


  function loadImages() {
      fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(res => res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }

  function addImage(dogPic) {
    let container = document.querySelector("#dog-image-container")
    let image = document.createElement("img")
    image.src = dogPic
    container.appendChild(image)
  }

  function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl) 
    .then(res => res.json())
    .then(results => {
      for (const key in results.message) {
        addBreeds(key);
      } 
    })
  }

  function addBreeds(key) {
    let container = document.querySelector("#dog-breeds")
    let breed = document.createElement("li")
    breed.innerHTML = key 
    container.appendChild(breed)
    breed.addEventListener("click", changeColor)
  }

  function changeColor(e) {
    e.target.style.color = "blue"
  }

  function breedChange() {
    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", function(e) {
     // getBreedsStartingWith(e.target.value)
     console.log(e)
    
  })
  }