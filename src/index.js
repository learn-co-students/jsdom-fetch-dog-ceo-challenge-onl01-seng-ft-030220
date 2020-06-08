document.addEventListener('DOMContentLoaded', () => {
  console.log('%c HI', 'color: firebrick')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  const dogImageDiv = document.getElementById('dog-image-container')
  const dogBreedsList = document.getElementById('dog-breeds')
  const selectBreed = document.getElementById('breed-dropdown')

  const fetchImages = () => {
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => {
        json['message'].forEach(imageSrc => {
          const image = document.createElement('img')
          image.src = imageSrc
          dogImageDiv.appendChild(image)
        })
      })
  }

  const createLiWithClickEvent = () => {
    const li = document.createElement('li')
    li.style.color = 'black'
    li.addEventListener('click', (e) => {
      colors = {
        'red': 'black',
        'black': 'red'
      }
      const currentColor = e.target.style.color
      e.target.style.color = colors[currentColor]
    })
    return li
  }

  const loadBreeds = (breeds, filter) => {
    for (let [breed, variations] of Object.entries(breeds)) {
      variations.forEach(variation => { 
        if (filter != '') {
          if (breed[0] === filter) {
            const breedLi = createLiWithClickEvent()
            breedLi.innerHTML = `${variation} ${breed}`
            dogBreedsList.appendChild(breedLi)
          }
        } else {
          const breedLi = createLiWithClickEvent()
          breedLi.innerHTML = `${variation} ${breed}`
          dogBreedsList.appendChild(breedLi)
        }
      })
    }
  }

  const fetchBreeds = (filter = '') => {
    dogBreedsList.innerHTML = ''
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => loadBreeds(json['message'], filter))
  }

  selectBreed.addEventListener('change', (e) => {
    fetchBreeds(e.target.value)
  })

  fetchImages()
  fetchBreeds()
})
