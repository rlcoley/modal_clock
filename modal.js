function makeModal() {
  var mod = document.createElement('div');
  mod.style.marginTop = "10%"
  mod.style.marginLeft = "35%"
  mod.style.width = "400px"
  mod.style.height = "400px"
  mod.style.backgroundColor = "lightgrey"
  mod.style.position = "relative"
  // mod.style.magrinLeft = "500px";
  // mod.innerHTML = "Yizzer";
  document.body.appendChild(mod);

  var close = document.createElement("div");
  close.innerHTML = "X";
  close.style.textAlign = 'center'
  close.style.width = '10px'
  close.style.height = '10px'
  close.style.position = "absolute"
  close.style.right = "0px"
  // close.style.backgroundColor = 'white';
  close.style.border = '2px solid'
  close.style.padding = "10px";
  mod.appendChild(close)

  close.addEventListener('click', byeBye)
  function byeBye() {
    mod.style.display = "none";
  }

  // var close = document.createElement("div");
}

function start() {
  setTimeout(function() {
  makeModal()
}, 3000)
}

window.addEventListener('load', start)




// display none
