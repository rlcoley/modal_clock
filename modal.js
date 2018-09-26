function makeModal() {
  var mod = document.createElement('div');
  mod.style.marginTop = "10%"
  mod.style.marginLeft = "35%"
  mod.style.width = "400px"
  mod.style.height = "400px"
  mod.style.backgroundColor = "black"
  mod.style.position = "relative"

  document.body.appendChild(mod);

  var close = document.createElement("div");
  close.innerHTML = "X"
  close.style.color = 'white'
  close.style.textAlign = 'center'
  close.style.width = '10px'
  close.style.height = '10px'
  close.style.position = "absolute"
  close.style.right = "0px"
  // close.style.backgroundColor = 'white';
  close.style.border = '2px solid white'
  close.style.padding = "10px";
  mod.appendChild(close)

  close.addEventListener('click', byeBye)
  function byeBye() {
    mod.style.display = "none";
  }

  var signUp = document.createElement("div");
  signUp.innerHTML = "Sign up now 30% off Wrestlemania 35"
  signUp.style.color = "#FFA83F"
  mod.appendChild(signUp)

  var logo = document.createElement("div")
  logo.style.backgroundImage = "url('logo.png')";
  logo.style.backgroundSize = "cover"
  logo.style.height = "100%";
  logo.style.width = "100%";
  logo.style.position = "relative";
  mod.appendChild(logo)
}

function start() {
  setTimeout(function() {
  makeModal()
}, 1000)
}

window.addEventListener('load', start)




// display none
