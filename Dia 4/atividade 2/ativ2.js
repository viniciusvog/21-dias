let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let cartaMotorista = prompt("Voce tem carteira de motorista?")
let carro = prompt("Voce tem carro?")

if (idade < 18 || cartaMotorista === "nao"){
    console.log(nome + ", voce nao pode dirigir!")
}

if (idade >= 18 && cartaMotorista === "sim" && carro === "nao"){
    console.log(nome + ", voce pode dirigir mas nao tem um carro.")
}

if (idade >= 18 && cartaMotorista === "sim" && carro === "sim"){
    console.log(nome + ", voce pode dirigir!")
}