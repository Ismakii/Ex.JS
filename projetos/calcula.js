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
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/little-boy-112878/" alt="Imagem de criança">`;
    } else if (idade < 20 && idade >= 14) {
      res.innerHTML = `Você é um homem jovem de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/young-man-123456/" alt="Imagem de jovem">`;
    } else if (idade >= 20 && idade < 50) {
      res.innerHTML = `Você é homem adulto de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/adult-man-654321/" alt="Imagem de adulto">`;
    } else {
      res.innerHTML = `Você é um homem idoso de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/elderly-man-987654/" alt="Imagem de idoso">`;
    }
  } else if (femi.checked) {
    const agora = new Date();
    const ano = agora.getFullYear();
    const anoatual = Number(ano);
    idade = anoatual - nasceu;
    imgArea.innerHTML = "";
    if (idade > 0 && idade < 14) {
      res.innerHTML = `Você é uma garota de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/girl-111222/" alt="Imagem de criança">`;
    } else if (idade < 20 && idade >= 14) {
      res.innerHTML = `Você é uma mulher jovem de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/young-woman-654987/" alt="Imagem de jovem">`;
    } else if (idade >= 20 && idade < 50) {
      res.innerHTML = `Você é uma mulher adulta de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/adult-woman-321654/" alt="Imagem de adulta">`;
    } else {
      res.innerHTML = `Você é uma mulher idosa de ${idade}`;
      imgArea.innerHTML = `<img src="https://www.pexels.com/photo/elderly-woman-987654/" alt="Imagem de idosa">`;
    }
  } else {
    res.innerHTML = "Preencha todos os campos";
  }
}
