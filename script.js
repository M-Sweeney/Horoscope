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
      sign.innerHTML = `${res.sign}`.toUpperCase()
      
      let date = document.querySelector(`#date`)
      date.innerText = `Today: ${res.date}`

      let description = document.querySelector(`#description`)
      description.innerText = `${res.horoscope}`
      
    
    if (textInput.toLowerCase() == `aquarius`) {
      image.src= `assets/aquarius.png`
    }else if (textInput.toLowerCase() == `pisces`) {
      image.src= `assets/pisces.png`
    }else if (textInput.toLowerCase() == `aries`) {
      image.src= `assets/aries.png`
    }else if (textInput.toLowerCase() == `taurus`) {
      image.src= `assets/taurus.png`
    }else if (textInput.toLowerCase() == `gemini`) {
      image.src= `assets/gemini.png`
    }else if (textInput.toLowerCase() == `cancer`) {
      image.src= `assets/cancer.png`
    }else if (textInput.toLowerCase() == `leo`) {
      image.src= `assets/leo.png`
    }else if (textInput.toLowerCase() == `virgo`) {
      image.src= `assets/virgo.png`
    }else if (textInput.toLowerCase() == `libra`) {
      image.src= `assets/libra.png`
    }else if (textInput.toLowerCase() == `scorpio`) {
      image.src= `assets/scorpio.png`
    }else if (textInput.toLowerCase() == `sagittarius`) {
      image.src= `assets/sag.png`
    }else if(textInput.toLowerCase() == `capricorn`) {
      image.src= `assets/cap.png`
    }else{image.src ==``}
  })
  .catch( err =>{
    console.log(`Error!`, err)
  }
)
}

button.addEventListener(`click`, getData)
// back.addEventListener(`click`, history.back())
