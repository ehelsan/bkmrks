
let myBookmarks = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const listEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
  myBookmarks.push(inputEl.value)
  inputEl.value = ""
  renderList()
})

function renderList(){
  let listItems = ""
  for (let i = 0; i < myBookmarks.length; i++){
    listItems += `
    <li>
      <a target='_blank' href='${myBookmarks[i]}'> 
        ${myBookmarks[i]}
      </a>
    </li>
    `
  }
  listEl.innerHTML = listItems
}
