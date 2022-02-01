const ul = document.querySelector('.items')

var form = document.getElementById('my-form')

form.addEventListener('submit', store)

function store(e) {
  e.preventDefault()
  // console.log('entered')

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value

  localStorage.setItem('personname', name)
  localStorage.setItem('personemail', email)

  console.log(name)
  console.log(email)
}

// ul.children[0].innerHTML = '<h4 style="color:green">DEMO</h4>'

// ul.children[1].innerHTML = '<h4 style="color:yellow" >Satya</h4>'
