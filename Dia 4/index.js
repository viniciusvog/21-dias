let fome = prompt("Voce está com fome?")
let dinheiro = prompt("Voce tem dinheiro?")
let aberto = prompt("O restaurante está aberto?")

if (fome === "nao" || dinheiro === "nao"){
    console.log("Hoje a janta será em casa!")
}

if (fome === "sim" && dinheiro === "sim" && aberto === "nao"){
    console.log("Peca um delivery!")
}

if (fome === "sim" && dinheiro === "sim" && aberto === "sim"){
    console.log("Hoje o jantar será no restaurante escolhido! :)")
}