const result = document.getElementById('root')
const button = document.getElementById('button')

button.addEventListener('click',($event) =>{
    $event.preventDefault();
    result.innerHTML = getRandomArbitrary(1,100)
})




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  