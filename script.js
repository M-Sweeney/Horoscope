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
      
      // let back = document.querySelector(`#back`)
      // back.style.opacity = 100
    
    if (textInput = `aquarius`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.57.43-AM.png`
    }else if (textInput = `pisces`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.57.31-AM.png`
    }else if (textInput = `aries`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.55.45-AM.png`
    }else if (textInput = `taurus`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.55.59-AM.png`
    }else if (textInput = `gemini`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.56.13-AM.png`
    }else if (textInput = `cancer`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.56.43-AM.png`
    }else if (textInput = `leo`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.56.33-AM.png`
    }else if (textInput = `virgo`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.56.23-AM.png`
    }else if (textInput = `libra`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.56.52-AM.png`
    }else if (textInput = `scorpio`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.57.02-AM.png`
    }else if (textInput = `sagittarius`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.57.18-AM.png`
    }else if(textInput = `capricorn`) {
      image.src= `https://tinypic.host/images/2022/10/16/Screen-Shot-2022-10-16-at-11.57.52-AM.png`
    }else{image.src =``}
  })
  .catch( err =>{
    console.log(`Error!`, err)
  }
)
}

button.addEventListener(`click`, getData)
// back.addEventListener(`click`, history.back())
