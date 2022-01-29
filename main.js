console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)

console.log(document.doctype)
console.log(document.head)
console.log(document.body)

console.log(document.links)
console.log(document.images)

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

itemlist.children[1].style.backgroundColor = 'orange'

itemlist.firstElementChild.textContent = 'This is our First Child !!'
itemlist.lastElementChild.textContent = 'Reached our Last Child !!'

console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)

console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color = 'red'

var newdiv = document.createElement('div')
newdiv.className = 'hello'
newdiv.id = 'hello1'
newdiv.setAttribute('title', 'Hello Div')

// console.log(newdiv)

var newDivText = document.createTextNode('Hello_World')
newdiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
container.insertBefore(newdiv, h1)

console.log(newdiv)
