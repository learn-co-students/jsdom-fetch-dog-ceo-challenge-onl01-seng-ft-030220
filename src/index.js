console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", (e) => {
    fetchImages()
    fetchBreeds()
    clickEvent()
    addOnChange()
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        renderImages(json)
    })
}

function renderImages(images) {
    const messages = images["message"]
    messages.forEach(function(image) {
        postImage(imageHTML(image))
    })
}

function renderHTML(image) {
    const newLi = document.createElement("li")
    const newImage = document.createElement("img")
    newImage.src = image
    newLi.appendChild(newImage)
    return newLi
}

function postImage(image) {
    const imageContainer = documnet.get ElementById("dog-image-container")
    imageContainer.appendChild(image)
}


funtion fetchBreeds() {
    constBreedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json)
    .then(json = {
        renderBreeds(json)
    })
}

const allBreeds = []

function renderBreeds(breeds) {
    for (let key in breeds["message"]){
        allBreeds.push(key)
    }
    allBreeds.forEach(function(breed))
    })
}

function breedHTML(breed) {
    const newLi = document.createElement("li")
    newLi.innerHTML = breed
    return newLi
}

function postBreed(breed) {
    document.addEventListener("click", (e) => {
        if (e.target.parentElement.id === "dog-breeds") {
            e.target.style.color = "red"
        }
    })

}

funtion addOnChange() {
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.onchange = breedFilter
}

funtion breedFilter() {
    const val = document.get("breed-dropdown")
    const filteredBreeds = allBreeds.filter(breed => breed[0] === val)
    debugger
    const breedContainer = Document.getElementById("breed-dropdown")
    breedContainer.InnerText = ""
    filteredBreeds.forEach(funtion(breed) {
        postBreed(breedHTML(breed))
    
    })
}