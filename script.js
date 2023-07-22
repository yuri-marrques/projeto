function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light") //faz a mesma coisa do if
  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else{
  //  html.classList.add('light')
  //}

  //pegar a tag image
  const img = document.querySelector("#profile img")
  //substituir a image
  if (html.classList.contains("light")) {
    //se tiver light, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta e fundo azul."
    )

  }else{
    //se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }


}
