export default function setVolume() {
  const volumeButton = document.querySelector(".volume-button")
  const volumeSlider = document.querySelector(".volume-slider")

  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width
    const newVolume = e.offsetX / parseInt(sliderWidth)
    localStorage.setItem('volumeLevel', newVolume)
  
    document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%'
  }, true)

  volumeButton.addEventListener("click", () => {
    const volumeEl = document.querySelector(".volume-container .volume")
    let muted = localStorage.getItem('volumeMuted') 
    if (muted) {
      if (muted === 'Mute') {localStorage.setItem('volumeMuted', 'Medium')} 
      else {localStorage.setItem('volumeMuted', 'Mute')}
    } else { localStorage.setItem('volumeMuted', 'Mute') }
    if (muted === 'Medium') {
      volumeEl.classList.remove("icono-volumeMedium")
      volumeEl.classList.add("icono-volumeMute")
    } else {
      volumeEl.classList.add("icono-volumeMedium")
      volumeEl.classList.remove("icono-volumeMute")
    }
  }, true)
}

