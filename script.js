function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = (document.getElementById(`txtano`))
  var res = (document.querySelector(`div#res`))

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente.`)
  } else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada ${idade}`  (Isso é pra testar essa parte do código)
    var genero = ``
    var img = document.createElement('img')
    img.setAttribute('id', 'fotos')
    if ( fsex[0].checked) {
      genero = `Homem`
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', './images/bebe Homem.png')
      } else if (idade <21) {
        //jovem
        img.setAttribute('src', './images/Homem Jovem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', './images/Homem Adulto.png')
      } else {
        //Idoso
        img.setAttribute('src', './images/Homem Idoso.png')
      }
    } else if ( fsex[1].checked) {
      genero = `Mulher`
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', './images/bebe menina.png')
      } else if (idade <21) {
        //jovem
        img.setAttribute('src', './images/Mulher Jovem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', './images/Mulher Adulto.png')
      } else {
        //Idoso
        img.setAttribute('src', './images/Mulher Idoso.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}