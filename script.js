function toogleMode() {
  const html = document.documentElement
  const img = document.querySelector('#profile img')
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Daniel com blusa quadriculada')
  }else{
    img.setAttribute('src', './assets/avatar-dark.png')
    img.setAttribute("alt", "Foto de Daniel de terno")
  }
}
