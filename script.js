let button = document.querySelector(`#searchButton`)
let image = document.querySelector(`#signImg`)
let sign = document.querySelector(`#sign`)
let date = document.querySelector(`#date`)
let description = document.querySelector(`#description`)
let dropDown = document.querySelector(`#dropDown`)
let textInput = document.querySelector(`#inputBar`)
let stars = document.querySelector(`#stars`)

async function getData(zodiacSign) {
  zodiacSign = zodiacSign.toLowerCase()

event.preventDefault()

  fetch(`https://ohmanda.com/api/horoscope/${zodiacSign}`)
  .then(res => res.json())
  .then(res => {
      sign.innerHTML = `${res.sign}`.toUpperCase() 
      date.innerText = `Today: ${res.date}`
      description.innerText = `${res.horoscope}`
    if (zodiacSign.toLowerCase() == `aquarius`) {
      image.src= `assets/aquarius.png`
    }else if (zodiacSign.toLowerCase() == `pisces`) {
      image.src= `assets/pisces.png`
    }else if (zodiacSign.toLowerCase() == `aries`) {
      image.src= `assets/aries.png`
    }else if (zodiacSign.toLowerCase() == `taurus`) {
      image.src= `assets/taurus.png`
    }else if (zodiacSign.toLowerCase() == `gemini`) {
      image.src= `assets/gemini.png`
    }else if (zodiacSign.toLowerCase() == `cancer`) {
      image.src= `assets/cancer.png`
    }else if (zodiacSign.toLowerCase() == `leo`) {
      image.src= `assets/leo.png`
    }else if (zodiacSign.toLowerCase() == `virgo`) {
      image.src= `assets/virgo.png`
    }else if (zodiacSign.toLowerCase() == `libra`) {
      image.src= `assets/libra.png`
    }else if (zodiacSign.toLowerCase() == `scorpio`) {
      image.src= `assets/scorpio.png`
    }else if (zodiacSign.toLowerCase() == `sagittarius`) {
      image.src= `assets/sag.png`
    }else if(zodiacSign.toLowerCase() == `capricorn`) {
      image.src= `assets/cap.png`
    }else{image.src == ``}
  })
  .catch( err =>{
    console.log(`Error!`, err)
  }
)
}

button.addEventListener(`click`, (event) => {
  event.preventDefault()
  getData(textInput.value)
})

textInput.addEventListener(`keypress`, (event) => {
  if (event.key === `Enter`) {
    event.preventDefault()
    button.click()
  }
})

dropDown.addEventListener(`change`, (event) => {
  event.preventDefault()
  textInput.value = ``
  getData(dropDown.value)
})

//I used this website to figure out how to toggle my background image https://stackoverflow.com/questions/31565045/toggle-background-image-html

stars.addEventListener('click',function() {
  document.body.classList.toggle('starBackground');
});