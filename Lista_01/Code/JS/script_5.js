// 24 - Exibir Alert
document.getElementById("btn24").addEventListener("click", function ()
{
    alert("Olá, Mundo!");
});

// 25 - Exibir Mensagem no Console
document.getElementById("btn25").addEventListener("click", function ()
{
    console.log("Meu primeiro script em JavaScript");
});

// 26 - Soma de Duas Variáveis
document.getElementById("btn26").addEventListener("click", function ()
{
    let a = 10, b = 5;
    let c = a + b;
    console.log("Resultado de A+B: " + (c));
});

// 27 - Prompt e Alert com Nome
document.getElementById("btn27").addEventListener("click", function ()
{
    let userName = prompt("Escreva seu Nome:");
    alert("Olá " + userName);
});

// 28 - Conversão String -> Int
document.getElementById("btn28").addEventListener("click", function ()
{
    let userString = "12345678";
    let userInt = parseInt(userString);
    console.log("Resultado: " + userInt);
});

// 29 - Variável Booleana
document.getElementById("btn29").addEventListener("click", function ()
{
    let eBoolean = 0;
    console.log("Valor de Boolean: " + Boolean(eBoolean));
});

// 30 - Mostrar Tipo da Variável
document.getElementById("btn30").addEventListener("click", function()
{
    let var30 = "";
    console.log("Tipo da Variavel: " + typeof(var30));
})

// 31 - Pedir 2 Números e Exibir Soma
document.getElementById("btn31").addEventListener("click", function()
{
    let num1 = parseInt(prompt("Digite o primeiro valor: "));
    let num2 = parseInt(prompt("Digite o segundo valor: "));

    alert("Resultado: " + (num1 + num2));
})

// 32 - Iniciar Variável e modificar valor;
document.getElementById("btn32").addEventListener("click", function()
{
    let numVal = parseInt(prompt("Digite o Valor: "));
    console.log("Valor Inicial: " + numVal);

    numVal = parseInt(prompt("Digite um novo valor: "));
    console.log("Valor Final: " + numVal);
})

// 33 - Par ou Impar?
document.getElementById("btn33").addEventListener("click", function()
{
    let numVal = parseInt(prompt("Digite um valor: "));
    
    if(numVal % 2 == 0)
    {
        console.log("O valor " + numVal + " é par!");
    } else {
        console.log("O valor "+ numVal + " é ímpar");
    }
})

// 34 - Reatribuir valor de Const
document.getElementById("btn34").addEventListener("click", function()
{
    const numVal = 12;
    console.log("Valor: " + numVal);

    console.log("- Variáveis Const não podem ser alteradas através de reatribuição");
    console.log("- Variáveis Const não podem ser re-declaradas");
    console.log("Portanto, será retornado um erro no console ao tentar");
    
    numVal = 18;
})

// 35 - Modificar Valor de Let
document.getElementById("btn35").addEventListener("click", function()
{
    let numVal = 10;
    console.log("Valor Inicial: " + numVal);

    numVal ++;
    console.log("Valor Atualizado: " + numVal);

    numVal += 20;
    console.log("Valor Atualizado: " + numVal);

    numVal -= 10;
    console.log("Valor Final: " + numVal);
})

// 36 - Média de Três Variáveis
document.getElementById("btn36").addEventListener("click", function()
{
    let num1 = parseInt(prompt("Digite o Primeiro Valor:"));
    let num2 = parseInt(prompt("Digite o Segundo Valor:"));
    let num3 = parseInt(prompt("Digite o Terceiro Valor:"));

    alert("Média: " + ((num1 + num2 + num3) / 3));
})

// 37 - Dobro de Um Número
document.getElementById("btn37").addEventListener("click", function()
{
    let numVal = parseInt(prompt("Digite um Valor: "));

    alert("Dobro do Valor: " + (numVal * 2));
})

// 38 - Celsius para Fahrenheit
document.getElementById("btn38").addEventListener("click", function()
{
    let celsius = parseInt(prompt("Digite o temperatura em Celsius:"));

    let fahrenheit = (celsius * 9/5) + 32;

    alert("Fahrenteit: " + fahrenheit);
})

// 39 - Maior ou Menor de Idade?
document.getElementById("btn39").addEventListener("click", function()
{
    let age = parseInt(prompt("Digite sua Idade:"));

    if(age >= 0 && age < 18)
    {
        alert("Você é Menor de Idade");
    } else if(age >= 18){
        alert("Você é Maior de Idade");
    } else {
        alert("Valor Inválido");
    }
})

// 40 - Qual o Maior dos Três Números
document.getElementById("btn40").addEventListener("click", function()
{
    let num1 = prompt("Digite o primeiro valor:");
    let num2 = prompt("Digite o segundo valor:");
    let num3 = prompt("Digite o terceiro valor:");

    if(num1 > num2 && num1 > num3)
    {
        alert("O primeiro valor (" + num1 + ") é maior");
    } else if(num2 > num1 && num2 > num3){
        alert("O segundo valor (" + num2 + ") é maior");
    } else if(num3 > num1 && num3 > num2){
        alert("O terceiro valor (" + num3 + ") é maior");
    }
})

// 41 - Loop for 1 a 10
document.getElementById("btn41").addEventListener("click", function()
{
    for(let x = 1; x <= 10; x++)
    {
        console.log(x);
    }
})

// 42 - Loop while 10 a 1
document.getElementById("btn42").addEventListener("click", function()
{
    let x = 10;
    while(x >= 1)
    {
        console.log(x);
        x --;
    }
})

// 43 - Pedir Num até que seja maior que 10
document.getElementById("btn43").addEventListener("click", function()
{
    let num;
    do
    {
        num = parseInt(prompt("Digite um valor:"));
    } while(num <= 10);
})

// 44 - For para tabuada do 7 (Console)
document.getElementById("btn44").addEventListener("click", function()
{
    for(let x = 1; x <= 10; x++)
    {
        console.log("7 x " + x + " = " + (7 * x));
    }
})

// 45 - While para calcular soma de nums de 1 a 100
document.getElementById("btn45").addEventListener("click", function()
{
    let x = 1;
    let sum = 0;
    while(x <= 100)
    {
        sum += x;
        x ++;
    }
    alert("Soma de 1 até 100: " + sum);
})

// 46 - Loop pares de 1 a 50
document.getElementById("btn46").addEventListener("click", function()
{
    for(let x = 0; x <= 50; x++)
    {
        if(x % 2 == 0)
        {
            console.log(x);
        }
    }
})

// 47 - For para percorrer um array
document.getElementById("btn47").addEventListener("click", function()
{
    const numArray = ["SAAB", "Sukhoi", "McDonnel Douglas"];
    let len = numArray.length

    for(let x = 0; x < len; x++)
    {
        console.log(numArray[x]);
    }
})

// 48 - Array de Cinco nomes | 49 - Adicionar Nome ao Final do Array
document.getElementById("btn48").addEventListener("click", function()
{
    const nameArray = ["Alberto", "Bruno", "Carlos", "David", "Erick"];
    let len = nameArray.length

    console.log("Primeiro e Ultimo Nome no array:");
    console.log(nameArray[0]);
    console.log(nameArray[len-1]);

    let name = prompt("Digite um nome para adicionar:");
    nameArray.push(name);

    console.log(nameArray);
})

// 50 - Função com dois nums de parâmetros e retorna soma
function sumNum(value1, value2)
{
    return (value1 + value2);
}

document.getElementById("btn50").addEventListener("click", function()
{
    let num1 = parseInt(prompt("Digite o primeiro valor:"));
    let num2 = parseInt(prompt("Digite o segundo valor:"));

    console.log(sumNum(num1, num2));
})

// 51 - Saudação Personalizada (1 Função com 1 Parâmetro)
function helloBro(name)
{
    return("Eaeee " + name);
}

document.getElementById("btn51").addEventListener("click", function()
{
    let value = prompt("Digite seu Nome:");

    console.log(helloBro(value));
})

// 52 - Média de Array (1 Função com *3* Parâmetros)
function numAverage(values, size)
{
    let sum = 0;

    for(let x = 0; x < size; x++)
    {
        sum += values[x];
    }

    let average = sum / size;
    return average;
}

document.getElementById("btn52").addEventListener("click", function()
{
    const numArray = [];
    let stop = 0;
    let x = 0;

    do
    {
        let num = parseInt(prompt("Digite um valor:"));

        if(num == 0)
        {
            stop ++;
        } else {
            numArray[x] = num;
            x ++;
        }

    }while(stop != 1);

    let len = numArray.length;

    console.log(numAverage(numArray, len));
})

// 53 - Botão Alert
function exibitAlert()
{
    alert("Hmm, acho q já fiz isso em vários exercícios...\nSerá q tá errado?");
}

// 54 - Mudar Conteudo de <p>
document.getElementById("btn54").addEventListener("click", function()
{
    document.getElementById("trocaEu").innerHTML = "Adios";
})

// 55 - Alternar Cor da <div>
document.getElementById("btn55").addEventListener("click", function()
{
    document.getElementById("trocaDiv").style.backgroundColor = "#B2FFA8";
})

// 56 - Input nome e Saída em Campo Abaixo
document.getElementById("btn56").addEventListener("click", function()
{
    let name = document.getElementById("nameInput").value;
    document.getElementById("nameOutput").innerHTML = name
})

// 57 - Contador dentro de um <span>
let counter = 0;
document.getElementById("btn57").addEventListener("click", function()
{
    counter ++;

    document.getElementById("counter").innerHTML = "Cliques: " + counter;
})

// 58 - Esconder e Exibir texto
document.getElementById("btn58").addEventListener("click", function()
{
    let x = document.getElementById("show");
    
    if(x.style.display == "block")
    {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
})

// 59 - Alterar a imagem ao passar por cima
function changeImage()
{
    document.getElementById("changeIMG").src="../../Images/bonnie_direct.jpg";
}

// 60 - Mudar o tema da Página
let darkTheme = 0;
document.getElementById("btn60").addEventListener("click", function()
{
    if(darkTheme == 0){
        document.getElementById("mainBody").setAttribute('data-bs-theme', "dark");
        darkTheme = 1;
    } else if(darkTheme == 1){
        document.getElementById("mainBody").setAttribute('data-bs-theme', "light");
        darkTheme = 0;
    }
})