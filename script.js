document.getElementById('btn').addEventListener('click', myFunction)
function myFunction()  {
  let side = document.getElementById('box').value
  side = parseInt(side)
  let answer = side * side
  answer = parseInt(answer)
  alert(answer)
}
 