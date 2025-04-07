// Criacao do array de objetos
let namesArray = [];

// Funcao para adicionar nome e idade ao array
document.getElementById("addAction").addEventListener("click", function()
{
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    namesArray.push({'Nome' : name, 'Idade' : age});
    console.log(namesArray);
})

// Função para checar se o valor de entrada são letras
function checkLetter(value)
{
    return (/[a-zA-Z]/).test(value);
}

// Função para checar se o valor de entrada são números
function checkNum(value)
{
    if (isNaN(value))
    {
        return false;
    } else {
        return true;
    }
}

// Função para checar se o valor de entrada está contido no array
function checkNameArray(data)
{
    for(let x = 0; x < namesArray.length; x++)
    {
        if(namesArray[x].Nome === data)
        {
            return x;
        }
    }

    return false;
}

// Funcionalidade do Botão Verificar (Função para procurar o objeto no array)
document.getElementById("verifyAction").addEventListener("click", function() // Pegar o evento clique no botão "Verificar"
{
    let data = document.getElementById("searchInput").value; // Pega o valor no campo de input
    
    if(checkLetter(data))
    {

        let searchIndex = checkNameArray(data);

        if(searchIndex >= 0 && searchIndex !== false)
        {
            console.log(searchIndex);
        } else {
            alert("Nome não encontrado no array!");
        }

    } else {

        alert("Entrada Inválida!\nPara localizar um objeto, utilize o nome e clique em Verificar.\nPara remover um objeto utilize o número de índice e clique em remover");

    }
})

// Funcionalidade do Botão Remover (Função para remover o objeto do array pelo índice)
document.getElementById("removeAction").addEventListener("click", function()
{
    let data = document.getElementById("searchInput").value; // Pega o valor no campo de input

    if(checkNum(data)) // Verifica se o valor de entrada é número
    {

        // Deleta o objeto indicado pelo índice "data" e imprime novamente o array
        namesArray.splice(data, 1);
        console.log(namesArray);

    } else {
        
        alert("Entrada Inválida!\nPara remover um objeto utilize o número de índice\nPara localizar um objeto, utilize o nome.");

    }

})