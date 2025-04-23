
let myBookmarks = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const listEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
  myBookmarks = []
  myBookmarks.push(inputEl.value)
  for (let i = 0; i < myBookmarks.length; i++){
    listEl.innerHTML += "<li>" + myBookmarks[i] + "</li>"
  }
})

