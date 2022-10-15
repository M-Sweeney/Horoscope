let button = document.querySelector(`#searchButton`)
let image = document.querySelector(`#signImg`)

//req and res
//request and response

async function getData (event) {
  let textInput = document.querySelector(`#inputBar`).value.toLowerCase()

event.preventDefault()

  fetch(`http://ohmanda.com/api/horoscope/${textInput}`)
  .then(res => res.json())
  .then(res => {
      console.log(res)

      let sign = document.querySelector(`#sign`)
      sign.innerHTML = `${res.sign}`
      
      let date = document.querySelector(`#date`)
      date.innerText = `Today: ${res.date}`

      let description = document.querySelector(`#description`)
      description.innerText = `${res.horoscope}`
      
      let back = document.querySelector(`#back`)
      back.style.opacity = 100
    
    if (textInput = `aries`) {
      image.src= `https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg`
    }
  })
  .catch( err =>{
    console.log(`Error!`, err)
  }
)
}

button.addEventListener(`click`, getData)
// back.addEventListener(`click`, history.back())
