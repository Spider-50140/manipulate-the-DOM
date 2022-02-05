const ul = document.querySelector('.items')

var form = document.getElementById('my-form')

form.addEventListener('submit', store)
var data = []

function store(e) {
  e.preventDefault()
  // console.log('entered')

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value

  var person1 = {
    name: name,
    email: email,
  }
  // person = { ...person, person1 }
  data.push(person1)

  console.log(data)

  localStorage.setItem('person', JSON.stringify(data))

  // console.log(person1)
  console.log(name)
  console.log(email)
}

// ul.children[0].innerHTML = '<h4 style="color:green">DEMO</h4>'

// ul.children[1].innerHTML = '<h4 style="color:yellow" >Satya</h4>'

window.onload = function () {
  // alert('loaded')
  var user = JSON.parse(localStorage.getItem('person'))
  var para = document.getElementById('demo')
  console.log(para)
  for (var i = 0; i < user.length; i++) {
    // document.getElementById('pname').innerHTML = user[i].name
    // document.getElementById('pemail').innerHTML = user[i].email
    para.innerHTML += user[i].name
    para.innerHTML += '<br> '
    para.innerHTML += user[i].email
    para.innerHTML += '<br> '
    // document.appendChild(para).innerHTML = user[i].email
  }

  console.log(user)
}
