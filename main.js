const ul = document.querySelector('.items')

var form = document.getElementById('my-form')

form.addEventListener('submit', store)

function store(e) {
  e.preventDefault()
  // console.log('entered')

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value

  var person = {
    name: name,
    email: email,
  }
  if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]')
  }

  var prevdata = JSON.parse(localStorage.getItem('data'))
  prevdata.push(person)

  localStorage.setItem('data', JSON.stringify(prevdata))

  adddata(person)
}

function adddata(object) {
  const ul = document.getElementById('users')
  const li = document.createElement('li')
  li.appendChild(
    document.createTextNode(object.name + ' ' + object.email + ' ')
  )

  const editbutton = document.createElement('input')
  editbutton.type = 'button'
  editbutton.value = 'Edit'

  const deletebutton = document.createElement('input')
  deletebutton.type = 'button'
  deletebutton.value = 'delete'

  editbutton.addEventListener('click', () => {
    document.getElementById('name').value = object.name
    document.getElementById('email').value = object.email
    li.remove()
  })

  deletebutton.addEventListener('click', () => {
    const { name, email } = object
    var arr = JSON.parse(localStorage.getItem('data'))

    arr = arr.filter(function (item) {
      return item.name !== name
    })
    localStorage.setItem('data', JSON.stringify(arr))
    li.remove()
  })

  li.appendChild(editbutton)
  li.appendChild(deletebutton)

  ul.appendChild(li)
}

window.onload = function () {
  // alert('loaded')
  var user = JSON.parse(localStorage.getItem('data'))
  for (var i = 0; i < user.length; i++) {
    const { name, email } = user[i]
    object = {
      name: name,
      email: email,
    }
    adddata(object)
  }
  console.log(user)
  console.log(user[2].name)
}
