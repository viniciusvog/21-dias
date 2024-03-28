let fome = prompt("Voce está com fome?")
let dinheiro = prompt("Voce tem dinheiro?")
let restaurante = prompt("O restaurante está aberto?")

if (fome === "nao" || dinheiro === "nao"){
    console.log("Hoje a janta será em casa!")
}

if (fome === "sim" && dinheiro === "sim" && restaurante === "nao"){
    console.log("Peca um delivery!")
}

if (fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    console.log("Hoje o jantar será no restaurante escolhido! :)")
}