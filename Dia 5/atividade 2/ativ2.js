let opera = Number(prompt("O que voce deseja fazer? " + "\n1: abastecer com Gasolina (R$5/1L) \n2: abastecer com Alcool (R$3/1L) \n3: calibrar os Pneus"))
let valor
let quantia

switch(opera){
        case 1:
            valor = parseInt(prompt("Qual o valor desejado?"))
            quantia = valor / 5
            console.log("Foram abastecidos " + quantia + "L de Gasolina")
            break;
        case 2:
            valor = parseInt(prompt("Qual o valor desejado?"))
            quantia = valor / 3
            console.log("Foram abastecidos " + quantia + "L de Alcool")
            break;
        case 3:
            console.log("Pneus calibrados com sucesso. Tenha uma boa viagem!")        
}