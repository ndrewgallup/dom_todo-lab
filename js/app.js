//create cached element reference for input
const inp = document.getElementById('tasks')
//create cached element reference for button
const btn = document.getElementById('submit-button')
//create cached element reference for ul
const uL = document.getElementById('todo-list')


//addEventListener to btn
btn.addEventListener('click', function(evt) {
  //create new li element
  const newLi = document.createElement('li')
  //set text of newLi to text of inp
  newLi.innerText = inp.value 
  //protect from empty input click
  if (inp.value !== ""){
  //reset inp text field to empty string
  inp.value=""
  //add newLi to the page inside ul
  uL.appendChild(newLi)

  console.log(newLi)
  }
})

