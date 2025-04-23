
let myBookmarks = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener("click", function(){
  myBookmarks.push(inputEl.value)
})

