let num1 = Number(prompt("Digite um numero:"))
let num2 = Number(prompt("Digite outro numero"))
let opera = Number(prompt("Qual operacao matemática voce quer realizar?" + " \n1 = / \n2 = * \n3 = + \n4 = -"))

switch(opera){
        case 1:
            console.log("O resultado é: " + (num1 / num2))
            break;
        case 2:
            console.log("O resultado é: " + (num1 * num2))
            break;
        case 3:
            console.log("O resultado é: " + (num1 + num2))
            break;
        case 4:
            console.log("O resultado é: " + (num1 - num2))
            break;            
}