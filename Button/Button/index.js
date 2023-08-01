



let counter = document.querySelector("#counter")
let count = 0
                                     
 counter.addEventListener('click', function() {
  count++
  document.querySelector("#result").innerHTML = count
})