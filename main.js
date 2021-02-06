

let FormElementFilm = document.querySelector('.film-search')
let input = document.querySelector('.film-name')
// let underList = document.querySelector('.list-film')

FormElementFilm.onsubmit = function(event){
  event.preventDefault()
  
    let wordFilm = document.createElement('li')
    wordFilm.classList.add('item-film')
    
    word = document.createElement('p')
    word.classList.add('name-film')
    // word.textContent = input.value
    wordFilm.appendChild(word)
    
    
    let underlist = document.querySelector('.list-film')
    function getMovies(nameMovie){
      underList = []
      
      nameMovie = nameMovie.toLowerCase()
      for(let item of kinolar){
        word = item.title.toLowerCase()
        if(word.includes(nameMovie)){
          underList.push(item)
        }
        // nameMovie.textContent = input.value
        // underList.appendChild(a)
      }
      
      return underList
      
    }


    console.log(getMovies('Spider'));
    
  return underlist.push(getMovies(nameMovie))

} 




// let listFilm = document.querySelector('.list-film')
// let itemFilm = document.querySelector('.item-film')
// // let formFilmsearch = document.querySelector('.film-search')
// // let input = document.querySelector('.film-name')

// // function getMovies(newNameMovie){
// //   newNameMovie = newNameMovie.toLowerCase()
// //   let a = []
// //   for(let item of kinolar){
// //     movieName = item.title.toLowerCase()
// //     if(movieName.includes(newNameMovie)){
// //       a.push(item)
// //     }
// //   }
// //   return a
// // }

// let input = document.querySelector('.film-name')
// let formFilmsearch = document.querySelector('.film-search')

// formFilmsearch.onsubmit = function(event){
//   event.preventDefault()

//   let filmitem = document.createElement('li')
//   filmitem.classList.add('item-film')
//   // console.log(filmitem);

//   let filmName = document.createElement('p')
//   filmName.classList.add('name-film')
//   filmName.textContent = input.value
//   console.log(filmName);

//   // function getMovies(newNameMovie){
//   //   newNameMovie = newNameMovie.toLowerCase()
//   //   let a = []
//   //   for(let item of kinolar){
//   //     movieName = item.title.toLowerCase()
//   //     if(movieName.includes(newNameMovie)){
//   //       a.push(item)
//   //     }
//   //   }
//   //   return a
//   // }
  
//   // input.addEventListener('keyup', handleKeyUp)
  
//   // function handleKeyUp(event){
//   //   let soz = event.target.value
//   //   if(soz.length > 2){
//   //     console.log(getMovies(soz));
//   //   }
//   // }
//   filmitem.appendChild(filmName)
//   listFilm.appendChild(filmitem)
// }

// function getMovies(newNameMovie){
//   newNameMovie = newNameMovie.toLowerCase()
//   let a = []
//   for(let item of kinolar){
//     movieName = item.title.toLowerCase()
//     if(movieName.includes(newNameMovie)){
//       a.push(item)
//     }
//   }
//   return a
// }

// input.addEventListener('keyup', handleKeyUp)

// function handleKeyUp(event){
//   let soz = event.target.value
//   if(soz.length > 2){
//     console.log(getMovies(soz));
//   }
// }