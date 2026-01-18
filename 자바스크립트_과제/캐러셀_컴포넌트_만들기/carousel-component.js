const gameLists = document.querySelectorAll('.recommend-game-list')
const nextButton = document.querySelector('.next-button')
const backButton = document.querySelector('.back-button')
const pageButton = document.querySelector('.page-button span')
let pageNumber = 0
const MAX_PAGES = 3

const pageConversion = () => {
  gameLists[0].classList.remove('active')
  gameLists[1].classList.remove('active')
  gameLists[2].classList.remove('active')

  if (pageNumber === 0) {
    gameLists[0].classList.add('active')
  } else if (pageNumber === 1) {
    gameLists[1].classList.add('active')
  } else if (pageNumber === 2) {
    gameLists[2].classList.add('active')
  }

  pageButton.textContent = (pageNumber + 1) + "/" + MAX_PAGES
  
}

nextButton.addEventListener('click', () => {
  if (pageNumber < MAX_PAGES - 1) { 
    pageNumber++; 
    pageConversion()
  }
})

backButton.addEventListener('click', () => {
  if (pageNumber > 0) { 
    pageNumber--; 
    pageConversion()
  }
})
pageConversion()
