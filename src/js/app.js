import 'normalize.css'
import '../css/main.css'
import FastClick from 'fastclick'

FastClick.attach(document.body);

function playAudio(keycode) {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`)
  if(!audio) return

  audio.currentTime = 0 // rewind
  audio.play()
}

function playAudioOnKey(e) {
  const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`)
  if(!pad) return 

  if(e.type === 'keydown') {
    pad.classList.add('is-active')
    playAudio(e.keyCode)
  } 
  else pad.classList.remove('is-active')
}

function playAudioOnMouse(e) {
  if(e.type === 'mousedown') {
    e.target.classList.add('is-active')
    playAudio(e.target.dataset.key)
  } 
  else e.target.classList.remove('is-active')
}

window.addEventListener('keydown', playAudioOnKey, false)
window.addEventListener('keyup', playAudioOnKey, false)

const pads = document.querySelectorAll('.pad')

pads.forEach((pad) => {
  pad.addEventListener('mousedown', playAudioOnMouse, false)
  pad.addEventListener('mouseup', playAudioOnMouse, false)
})
