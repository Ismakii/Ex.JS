function calidade() {
  var masc = document.getElementById("masculino");
  var femi = document.getElementById("femenino");
  var nascimento = document.getElementById("nasceu").value
  var nasceu = Number(nascimento)
  var res = document.getElementById("resposta");
  if (masc.checked) {
    const agora = new Date();
    const ano = agora.getFullYear()
    const anoatual = Number(ano)
    idade = anoatual - nasceu
    res.innerHTML = `Você é um jovem de ${idade} anos`;
    if (idade < 20 && idade >= 14)
      res.innerHTML = `dfsjdbfisdkh`;
  } else if (femi.checked) {
    res.innerHTML = `feminino`;
  }
  else {
    res.innerHTML = 'Preencha todos os campos'
  }
}
