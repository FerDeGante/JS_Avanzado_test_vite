import JSConfetti from 'js-confetti'


export function setupCounter(element) {
  const jsConfetti = new JSConfetti()
  const cf = () => {
    jsConfetti.addConfetti()
  }

  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () =>   
  cf(),
  setCounter(counter + 1))

   setCounter(0)
}
