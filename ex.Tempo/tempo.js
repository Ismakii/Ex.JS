function gerartempo() {
  var natela = document.getElementById("tempo");
  var tempo = new Date();
  var horas = tempo.getHours();
  var res = document.getElementById("img");
  if (horas <= 12 && horas >= 5) res.innerHTML = `manhã`;
  else if (horas <= 18 && horas > 12) {
    res.innerHTML = `Tarde`;
  } else {
    res.innerHTML = `Noite`;
  }
}
document.addEventListener("DOMContentLoaded", gerartempo);
