const ul = document.querySelector('.items')

var form = document.getElementById('my-form')

form.addEventListener('submit', store)

function store(e) {
  e.preventDefault()
  // console.log('entered')

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value

  var person1 = {
    name: name,
    email: email,
  }

  localStorage.setItem('person1', JSON.stringify(person1))

  console.log(person1)
  console.log(name)
  console.log(email)
}

// ul.children[0].innerHTML = '<h4 style="color:green">DEMO</h4>'

// ul.children[1].innerHTML = '<h4 style="color:yellow" >Satya</h4>'

window.onload = function () {
  // alert('loaded')
  var user = JSON.parse(localStorage.getItem('person1'))
  document.getElementById('pname').innerHTML = user.name
  document.getElementById('pemail').innerHTML = user.email
  console.log(user)
}
