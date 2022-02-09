export default function setTime(e) {
  const timeInput = document.getElementById('time-input')
  let time = localStorage.getItem('time')
  let target = e.target

  if( target.id === 'time-minus') {
    if(time === '5') {
      return false 
    } else {
      time = Number(time) - 5
      localStorage.setItem('time', time)
    }
  }

  if( target.id === 'time-plus') {
    if(time === '30') {
      return false 
    } else {
      time = Number(time) + 5
      localStorage.setItem('time', time)
    }
  }
  timeInput.value = time
}