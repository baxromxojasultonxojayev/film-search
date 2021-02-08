
let SearchSelect = document.querySelector('.choose-year')
let FormElement = document.querySelector('.film-search')
let InputForm = document.querySelector('.film-name')
let ListFilm = document.querySelector('.list-film')


// buttonGenre.onclick = () =>


FormElement.addEventListener('submit', function(event){
  
  event.preventDefault()
  document.body.classList.add('modal')
  ListFilm.textContent = ''

  let InputFormValue = InputForm.value;
  let SearchSelectValue = SearchSelect.value;

  let newMovies = getMovies(InputFormValue, SearchSelectValue);

  randerData(newMovies)
})

function randerData(arr){
  
  if(arr.length){
    for(let item of arr){
      let newElementLi = document.createElement('li')
      newElementLi.textContent = item.title
      ListFilm.appendChild(newElementLi)
    }
  }
}


function getMovies(name,year){
  let filtered = []
  for(let kino of kinolar){
    let kinoNameLowerCase = kino.title.toLowerCase().includes(name)
    if(kinoNameLowerCase && year == kino.year){
      filtered.push(kino)
    } 
  }
  return filtered;
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