
let SearchSelect = document.querySelector('.choose-year')
let FormElement = document.querySelector('.film-search')
let InputForm = document.querySelector('.film-name')
let ListFilm = document.querySelector('.list-film')
let infoElement = document.querySelector('.info')
let infoTitle = document.querySelector('.info-title')
let infoYear = document.querySelector('.info-year')
let infoCast = document.querySelector('.info-cast')
let infoGenres = document.querySelector('.info-genres')

FormElement.addEventListener('submit', event =>{
  event.preventDefault()
  ListFilm.textContent = ''
  let inputFormValue = InputForm.value
  let searchSelectValue = SearchSelect.value

  let newMovies = getMovies(inputFormValue,searchSelectValue)
  randerData(newMovies)
})

function randerData(arr){
  if(arr.length){
    for(let item of arr){
      let newElementLi = document.createElement('li')
      newElementLi.textContent = item.title
        newElementLi.addEventListener('click', event =>{
        infoTitle.textContent = item.title
        infoYear.textContent = item.year
        infoCast.textContent = item.cast
        infoGenres.textContent = item.genres
      })
      ListFilm.appendChild(newElementLi)
    }
  }
}

function getMovies(name, year){
  let filtered = []
  for(let kino of kinolar){
    let kinoNameLowerCase = kino.title.toLowerCase().includes(name)
    if(kinoNameLowerCase && year == kino.year){
      filtered.push(kino)
    }
  }
  return filtered
}





function relasedYears(){
  year = []
  for(let item of kinolar){
    let indexOfitem = year.indexOf(item.year)
    if(indexOfitem == -1){
      year.push(item.year)
    }
    // console.log(item.year);
  }

  year = year.sort(function(a,b){
    return a - b
  })

  for(let years of year){
    // console.log(years);
    let newOptionELement = document.createElement('option')
    newOptionELement.setAttribute('option', years)
    newOptionELement.textContent = years
    SearchSelect.appendChild(newOptionELement)
  }
  // console.log(year);
}

relasedYears()