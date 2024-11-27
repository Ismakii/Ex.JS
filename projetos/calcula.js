function calidade() {
  var masc = document.getElementById("masculino");
  var femi = document.getElementById("femenino");
  var res = document.getElementById("resposta");
  if (masc.checked) {
    res.innerHTML = `masculino`;
  } else if (femi.checked) {res.innerHTML = `feminino`;}
  else {
    res.innerHTML = 'Preencha todos os campos'
  }
}
