function calidade() {
  var masc = document.getElementById("masculino");
  var femi = document.getElementById("femenino");
  var nascimento = document.getElementById("nasceu").value;
  var nasceu = Number(nascimento);
  var res = document.getElementById("resposta");
  var imgArea = document.getElementById("imagem-area");

  if (masc.checked) {   
    const agora = new Date();
    const ano = agora.getFullYear();
    const anoatual = Number(ano);
    idade = anoatual - nasceu;
    imgArea.innerHTML = "";
    if (idade > 0 && idade < 14) {
      res.innerHTML = `Você é um garoto de ${idade}`;
      imgArea.innerHTML = `<img src="midia/garoto.jpg" alt="Imagem do garoto">`;
    } else if (idade < 20 && idade >= 14) {
      res.innerHTML = `Você é um homem jovem de ${idade}`;
      imgArea.innerHTML = `<img src="midia/jovemhomem.jpg" alt="Imagem de jovem">`;
    } else if (idade >= 20 && idade < 50) {
      res.innerHTML = `Você é homem adulto de ${idade}`;
      imgArea.innerHTML = `<img src="midia/homem.jpg" alt="Imagem de adulto">`;
    } else {
      res.innerHTML = `Você é um homem idoso de ${idade}`;
      imgArea.innerHTML = `<img src="midia/idoso.jpg" alt="Imagem de idoso">`;
    }
  } else if (femi.checked) {
    const agora = new Date();
    const ano = agora.getFullYear();
    const anoatual = Number(ano);
    idade = anoatual - nasceu;
    imgArea.innerHTML = "";
    if (idade > 0 && idade < 14) {
      res.innerHTML = `Você é uma garota de ${idade}`;
      imgArea.innerHTML = `<img src="midia/garota.jpg" alt="Imagem de criança">`;
    } else if (idade < 20 && idade >= 14) {
      res.innerHTML = `Você é uma mulher jovem de ${idade}`;
      imgArea.innerHTML = `<img src="midia/jovemmulher.jpg" alt="Imagem de jovem">`;
    } else if (idade >= 20 && idade < 50) {
      res.innerHTML = `Você é uma mulher adulta de ${idade}`;
      imgArea.innerHTML = `<img src="midia/mulher.jpg" alt="Imagem de adulta">`;
    } else {
      res.innerHTML = `Você é uma mulher idosa de ${idade}`;
      imgArea.innerHTML = `<img src="midia/idosa.jpg" alt="Imagem de idosa">`;
    }
  } else {
    res.innerHTML = "Preencha todos os campos";
  }
}
