let sign = document.querySelector(`#sign`)
let button = document.querySelector(`#searchButton`)




//req and res
//request and response

async function getData (event) {
  let textInput = document.querySelector(`#inputBar`).value

event.preventDefault()


  const URL = `http://ohmanda.com/api/horoscope/leo`;
  fetch(URL)
  .then(res => res.json())
  .then(res => {
      console.log(res)
      
      
      
  })
}






  // fetch(`https://aztro.sameerkumar.website/?sign=${textInput}&day=today`)
  // .then(res => {
  //   return res.json()
  //   console.log(`success`)
  // })
  // .then( res => {
  //   console.log(res.sprites)
  //   console.log(`height ` + res.height)
  //   let pokemonName = document.querySelector(`#pokemonName`)
  //   pokemonName.innerText = res.name.toUpperCase()
  //   document.querySelector(`#image`).src=
  // }
//)
//   .catch( err =>{
//     console.log(`Error!`, err)
//   }
// )
// }

//1 attach event to button
button.addEventListener(`click`, getData)

//2 read the input bar variable/value

// 3 find html element we want to populate

//4 populate element and render data on screen
