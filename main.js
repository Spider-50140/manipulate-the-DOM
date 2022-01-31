// var headerTitle = document.getElementById('header-title')

// headerTitle.innerHTML = '<h3>Hello</h3>'
var header = document.getElementById('main-header')
header.style.borderBottom = 'solid 3px #000'

var title = document.getElementsByClassName('title')
console.log(title[0])
title[0].style.fontWeight = 'bold'
title[0].style.color = 'green'

var items = document.getElementsByClassName('list-group-item')
for (var i = 0; i < 4; i++) {
  items[i].style.fontWeight = 'bold'
}

// Dom Traversing

var itemlist = document.querySelector('#items')

console.log(itemlist.parentNode)

itemlist.parentNode.style.backgroundColor = 'lightblue'

console.log(itemlist.children)

var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

console.log(form)
console.log(itemlist)
console.log(filter)

form.addEventListener('submit', addItem)

function addItem(e) {
  e.preventDefault()
  console.log('entered')

  var newItem = document.getElementById('item').value
  var li = document.createElement('li')
  li.className = 'list-group-item'
  li.appendChild(document.createTextNode(newItem))
  var deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
  deleteBtn.appendChild(document.createTextNode('X'))
  li.appendChild(deleteBtn)
  itemList.appendChild(li)
}

itemList.addEventListener('click', removeItem)

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}
