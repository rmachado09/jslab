console.log("JavaScript carregado com sucesso!");

/*let quantidade = 3;

console.log(quantidade);

quantidade = 5;

console.log(quantidade);*/

const nomeCurso = "Desenvolvimento de Interfaces Web";

console.log(nomeCurso);

/*const nome = "Carlos";
const idade = 24;
const aprovado = true;
const endereco = undefined;
const observacao = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovado);*/

console.log(typeof "Olá");
console.log(typeof 42);
console.log(typeof false);

/*const nome = "Ana";
const idade = 21;

const mensagem =
    `Nome: ${nome} | Idade: ${idade}`;

console.log(mensagem);*/

/*const preco = 120;
const quantidade = 3;
const percentualDesconto = 10;

const subtotal = preco * quantidade;

/*console.log(subtotal);
const desconto = subtotal * percentualDesconto / 100;

const total = subtotal - desconto

console.log (`Subtotal: ${subtotal}`);
console.log (`Desconto: ${desconto}`);
console.log (`Total: ${total}`);*/

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const resultado1 = 10 + 5 * 2;
const resultado2 = (10 + 5) * 2;

console.log(resultado1);
console.log(resultado2);

/*const idade = 18;

console.log(idade > 18);
console.log(idade >= 18);
console.log(idade < 18);
console.log(idade <= 18);*/

/*const quantidade = 10;

console.log(quantidade === 10);
console.log(quantidade !== 10);
console.log(10 === 10);
console.log(10 === "10");*/

/*const idade = 20;
const possuiIngresso = true;

const podeEntrar =
    idade >= 18 && possuiIngresso;

console.log(podeEntrar);*/

/*const ehProfessor = false;
const ehAluno = true;
const possuiAcesso =
    ehProfessor || ehAluno;

console.log(possuiAcesso);

const bloqueado = false;

console.log(!bloqueado);*/

const nomeProduto = "celular";
const preco = 1000;
const quantidade = 5;
const percentualDesconto = 10;
const disponibilidade = true;

/*const subtotal = preco * quantidade;
const desconto = subtotal * (percentualDesconto / 100);
const valorFinal = subtotal - desconto;

console.log(`Produto: ${nomeProduto}`);
console.log(`Preço unitário: ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Percentual de desconto: ${percentualDesconto}%`);
console.log(`Disponível: ${disponibilidade ? "Sim" : "Não"}`);

console.log(`Subtotal: ${subtotal}`);
console.log(`Desconto: ${desconto}`);
console.log(`Valor Final: ${valorFinal}`);*/

console.log (typeof nomeProduto)
console.log (typeof preco)
console.log (typeof disponibilidade)


const nota = 60;
const frequencia = 70;
if (nota >= 70 && frequencia >= 80) {
    console.log("Nota e frequência suficientes");
} else if (nota < 70 && frequencia >= 80) {
    console.log("Nota insuficiente");
}
else if (nota >= 70 && frequencia < 80) {
    console.log("Frequência insuficiente");
}
else { 
    console.log("Nota e frequência insuficientes")
}


const prioridade = "baixa";
const atrasado = true;
if (prioridade === "alta" && atrasado) {
    console.log ("ATENÇÃO IMEDIATA");
} else { 
    console.log ("Acompanhamento normal")
}

const idade = 17;
const possuiCadastro = true;
const bloqueado = false;

if (idade >= 18 && possuiCadastro && !bloqueado) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}


/*console.log("Informação");
console.warn("Atenção");
console.error("Erro");*/



for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}


let soma = 0;

for (let i = 1; i <= 5; i++) {
    soma = soma + i;
}

console.log(soma);


let cont = 0

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log (i)
    }
}

let contador = 1;

while (contador <= 5) {
    console.log(contador);

    contador++;
}

const quantidadePedidos = 8;

for (let i = 1; i <= quantidadePedidos; i++) {
    console.log(`Processando pedido ${i}`)
}

let i = 10;

for (let i = 10; i>= 1; i--) {
    console.log(i);
}

console.log("Fim");


function exibirSaudacao() {
    console.log("Olá!");
}

exibirSaudacao()


function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirNome("Marina");
exibirNome("Carlos");
exibirNome("João");


function calcularTotal(preco, quantidade) {
    return total = preco * quantidade;
}

const totalPedido =
    calcularTotal(50, 3);

console.log(totalPedido);


function calcularDesconto(valor, percentual) {
    return valor * (percentual/100);
}

const valorCompra = 200;

const desconto = 
    calcularDesconto(valorCompra,10);

const totalFinal = valorCompra - desconto;

console.log(desconto);
console.log(totalFinal);


function verificarSituacao(nota, frequencia) {
    if (nota >= 60 && frequencia >= 75) {
        return "Aprovado";
    }

    if (nota < 60 && frequencia < 75) {
        return "Reprovado por nota e por frequência";
    }

    if (nota < 60) {
        return "Reprovado por nota";
    }

    return "Reprovado por frequência";
}

console.log(verificarSituacao(70, 80)); 


