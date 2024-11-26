function Velocidade(){
    var vel = document.getElementById('velo').value
    var res = document.getElementById('res')
    vel = Number(vel)
    if (vel > 80){
        res.innerHTML = `Sua velocidade é de ${vel}, <strong>MULTADO</strong>`;
    }
    else{
        res.innerHTML = `Sua velocidade é de ${vel}, Boa viagem`
    }
}