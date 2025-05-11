
let myBookmarks = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const listEl = document.querySelector("#ul-el")

let bookmarksFromLocalStorage = JSON.parse(localStorage.getItem("myBookmarks"))


inputBtn.addEventListener("click", function(){
  myBookmarks.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
  render(myBookmarks)
})

deleteBtn.addEventListener("click", function(){
  localStorage.clear()
  myBookmarks = []
  render(myBookmarks)
})

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myBookmarks.push(tabs[0].url)
    localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
    render(myBookmarks)
  })
})

if (bookmarksFromLocalStorage) {
  myBookmarks = bookmarksFromLocalStorage
  render(myBookmarks)
}

function render(bookmarks){
  let listItems = ""
  for (let i = 0; i < bookmarks.length; i++){
    listItems += `
    <li>
      <a target='_blank' href='${bookmarks[i]}'> 
        ${bookmarks[i]}
      </a>
    </li>
    `
  }
  listEl.innerHTML = listItems
}
