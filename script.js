let button = document.querySelector(`#searchButton`)




//req and res
//request and response

async function getData (event) {
  let textInput = document.querySelector(`#inputBar`).value

event.preventDefault()

  fetch(`http://ohmanda.com/api/horoscope/${textInput}`)
  .then(res => res.json())
  .then(res => {
      console.log(res)

      let sign = document.querySelector(`#sign`)
      sign.innerHTML = `${res.sign}`
      
      let date = document.querySelector(`#date`)
      date.innerText = `${res.date}`

      let description = document.querySelector(`#description`)
      description.innerText = `${res.horoscope}`
      
  })
  .catch( err =>{
    console.log(`Error!`, err)
  }
)
}

button.addEventListener(`click`, getData)

