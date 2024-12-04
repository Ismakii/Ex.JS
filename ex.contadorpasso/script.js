const res = document.getElementById("res")

/*function contar(){
    const inicial = document.getElementById("inicio")
    const passo = document.getElementById("passo")
    const fim = document.getElementById("fim")
    const inicialv = Number(inicial.value)
    const passov = Number(passo.value)
    const fimv = Number(fim.value)

    for(let i = inicialv; i <= fimv; i += passov)
        res.innerHTML += `--> ${i}`

}*/

function contar(){
    const inicial = Number(document.getElementById("inicio").value)
    const passo = Number(document.getElementById("passo").value)
    const fim = Number(document.getElementById("fim").value)
    if(passo === 0 || (!inicial) || (!passo) || (!fim)){
        alert("Preencha os campos e certifique-se que o passo seja diferente de zero")
    }
    else{
        for(let i = inicial; i <= fim ; i += passo)
        res.innerHTML += `${i} -->`
    res.innerHTML += "Fim. 😀"
}
    
}
 

