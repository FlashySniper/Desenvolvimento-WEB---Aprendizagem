//soma dos termos pares

somaPares = Number(0)
aux = Number(0)
fibonacci = Number(1)


while(somaPares < 50000){
    if(fibonacci % 2 == 0){
        somaPares += fibonacci
    }
    fibonacci += aux
    aux += fibonacci
    console.log(fibonacci)
    console.log(somaPares)
}

msg = `A soma dos termos pares de Fibonacci menores que 50.000 é: ${somaPares}`

document.getElementById("superSoma").innerHTML = msg