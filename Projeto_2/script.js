/*  Autor:  Kauan Oliveira Rocha
    RA:     24036456-2
*/

// Variáveis da Calculadora
let valorAtual = '0';  // Valor do Display
let primeiroNumero = null;  // Primeiro número digitado
let operadorSelecionado = null;  // Operador
let esperandoSegundoNumero = false;  // Sinaliza aguardo pelo segundo número

// Pega o Display
const display = document.getElementById('display');

// Atualiza o Display
function atualizarDisplay() {
    display.textContent = valorAtual;
}

// Função para Adicionar Numero
function adicionarNumero(numero) {
    // Se aguardando segundo núme, começar um novo número
    if (esperandoSegundoNumero) {
        valorAtual = numero;
        esperandoSegundoNumero = false;
    } else {
        // Se for zero, substituir. Senão adicionar ao final
        valorAtual = valorAtual === '0' ? numero : valorAtual + numero;
    }
    atualizarDisplay();
}

// Função para escolher uma operação
function escolherOperacao(operador) {
    // Se já temos um operador selecionado, não fazer nada
    if (operadorSelecionado !== null) {
        return;
    }
    
    // Guardar o primeiro número e operador
    primeiroNumero = valorAtual;
    operadorSelecionado = operador;
    esperandoSegundoNumero = true;
}

// Função para realizar o cálculo
function calcular() {
    // Se não temos operador, não fazer nada
    if (operadorSelecionado === null) {
        return;
    }
    
    // Converter os números para inteiros
    const numero1 = parseInt(primeiroNumero);
    const numero2 = parseInt(valorAtual);
    let resultado = 0;
    
    // Fazer a operação
    switch (operadorSelecionado) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            // Verificar divisão por zero
            if (numero2 === 0) {
                alert('Não é possível dividir por zero!');
                limpar();
                return;
            }
            resultado = Math.round(numero1 / numero2);
            break;
    }
    
    // Atualizar o display com o resultado
    valorAtual = resultado.toString();
    atualizarDisplay();
    
    // Resetar o estado para começar um novo cálculo
    operadorSelecionado = null;
}

// Função limpa (CLEAR)
function limpar() {
    valorAtual = '0';
    primeiroNumero = null;
    operadorSelecionado = null;
    esperandoSegundoNumero = false;
    atualizarDisplay();
}

// Adicionar evento aos botões de números
document.getElementById('btn0').addEventListener('click', function() { adicionarNumero('0'); });
document.getElementById('btn1').addEventListener('click', function() { adicionarNumero('1'); });
document.getElementById('btn2').addEventListener('click', function() { adicionarNumero('2'); });
document.getElementById('btn3').addEventListener('click', function() { adicionarNumero('3'); });
document.getElementById('btn4').addEventListener('click', function() { adicionarNumero('4'); });
document.getElementById('btn5').addEventListener('click', function() { adicionarNumero('5'); });
document.getElementById('btn6').addEventListener('click', function() { adicionarNumero('6'); });
document.getElementById('btn7').addEventListener('click', function() { adicionarNumero('7'); });
document.getElementById('btn8').addEventListener('click', function() { adicionarNumero('8'); });
document.getElementById('btn9').addEventListener('click', function() { adicionarNumero('9'); });

// Adicionar eventos aos botões de operação
document.getElementById('btnAdd').addEventListener('click', function() { escolherOperacao('+'); });
document.getElementById('btnSubtract').addEventListener('click', function() { escolherOperacao('-'); });
document.getElementById('btnMultiply').addEventListener('click', function() { escolherOperacao('*'); });
document.getElementById('btnDivide').addEventListener('click', function() { escolherOperacao('/'); });

// Adicionar evento aos botões calc e clear
document.getElementById('btnEqual').addEventListener('click', calcular);
document.getElementById('btnClear').addEventListener('click', limpar);

// Iniciar Display
atualizarDisplay();