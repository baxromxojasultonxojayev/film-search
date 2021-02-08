let buttonCast = document.querySelector('.search-genre')
let castFilm = 

buttonCast.onclick = function(){


  getGenres(InputFormValue)
}


function getGenres(name, cast){
  let sorted = []
  for(let item of kinolar){
    let filmCast = item.title.toLowerCase().includes(name)
    if(filmCast && cast == item.cast){
      sorted.push(item)
    }
  }
  return sorted
}