// fetch('https://dog.ceo/api/breeds/image/random/4')
// .then((res) => res.json())
// // converts what you're fetching to .json
// // returns a promise
// .then((dog) => {
//     // another promise object you're returning
//     // .catch = if error in .then statement catch it and correct it
// //    what you are expecting to happen - grabbing images
// // and putting them on the screen
//     dog.forEach(breed => {
//         doggo(breed)


console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // event that loads the HTML doc. itself..add eventlistener to entire doc.
    fetchImages()
    // what you are pulling and what you are firing after the content has loaded
    fetchBreeds()
    // calling the function for challenge 2

    let dropdown = document.querySelector('#breed-dropdown')
    // put here so it can fire all the time
    dropdown.addEventListener('change', filterBreeds)
})

// ## Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


const fetchImages = () => {
    
    fetch(imgUrl)
    //TODO: on page load, fetches the images using the url above 
    .then(res => res.json())
    // .then returns a promise...
    // a promise is a process that is happening... a.k.a a returned object in which you attach a callback
    //TODO: parses the response as `JSON`
    .then(data => data.message.forEach(url => renderImage(url)))
    // grab list called data, in data inside the message and for each of those messages
    // look at renderImages function, convert to JSON, fetch that
    // }//TODO: adds image elements to the DOM **for each** 🤔 image in the array
}
const renderImage = (url) => {
    let imageDiv = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = url
    imageDiv.appendChild(img)
}

// Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []

const fetchBreeds = () => {
    fetch(breedUrl)
    //TODO: on page load, fetches all the dog breeds using the url above 
    .then(res => res.json())
    
    .then(data => {
        for (breed in data.message) {
            // console.log(data.message[breed])
            if (data.message[breed].length === 0) {
                allBreeds.push(breed)
                 } else {
                 for (variation of data.message[breed]) {
                     allBreeds.push(`${variation} ${breed}`)
                 }
                }
            }
        renderBreeds(allBreeds)
    })
    
}


//TODO: Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when the user clicks on any one of the `<li>`s, the font color of that `<li>` changes. This can be a color of your choosing.

const renderBreeds = (breeds) => {
   // Challenge 3
    //TODO: adds the breeds to the page in the `<ul>` provided in `index.html`
    breeds.forEach(breed => {
        let breedUl = document.querySelector('#dog-breeds')
        let li = document.createElement('li')

        li.innerText = breed
        
        breedUl.appendChild(li)
        li.addEventListener('click', changeColor)
    })
}

const changeColor = event => {
    event.target.style.color = 'purple'
}


const filterBreeds = event => {
    console.log(event.target.value)
    // should give you a letter when clicked
    let breedUl = document.querySelector('#dog-breeds')

    let filteredBreeds = allBreeds.filter(breed => breed [0] === event.target.value)

    breedUl.innerHTML = ''

    renderBreeds(filteredBreeds)
}

// Challenge 4

// TODO: add JavaScript so that the user can filter breeds that start with a particular letter
