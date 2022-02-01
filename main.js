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
  var newdes = document.getElementById('des').value

  // console.log(newItem)
  // console.log(newdes)

  var li = document.createElement('li')
  li.className = 'list-group-item'
  li.appendChild(document.createTextNode(newItem))

  var deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
  deleteBtn.appendChild(document.createTextNode('X'))

  var description = document.createElement('h6')
  description.className = 'description'
  description.appendChild(document.createTextNode(newdes))

  li.appendChild(deleteBtn)
  li.appendChild(description)
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

// filtering part

var filter = document.getElementById('filter')
filter.addEventListener('keyup', filterItems)

function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase()
  // Get lis
  var items = itemList.getElementsByTagName('li')
  var items2 = itemList.getElementsByTagName('li')
  // var desc = itemlist.getElementsByClassName('description')

  // console.log(desc)

  console.log(items)
  // Convert to an array

  Array.from(items).forEach(function (item) {
    // console.log(item)
    var itemName = item.firstChild.wholeText
    // console.log(itemName)
    var x = itemName.toLowerCase().indexOf(text)
    console.log(x)
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })

  // Array.from(desc).forEach(function (i) {
  //   // console.log(item)
  //   var descame = i.firstChild.wholeText
  //   // console.log(itemName)
  //   var x = descame.toLowerCase().indexOf(text)
  //   console.log(x)
  //   if (x != -1) {
  //     i.style.display = 'block'
  //   } else {
  //     i.style.display = 'none'
  //   }
  // })

  Array.from(items2).forEach(function (i) {
    // console.log(item)
    var descame = i.firstElementChild.innerText
    // console.log(itemName)
    var x = descame.toLowerCase().indexOf(text)
    console.log(x)
    if (x != -1) {
      i.style.display = 'block'
    } else {
      i.style.display = 'none'
    }
  })
}
