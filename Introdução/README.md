# Introdução ao JavaScript

JavaScript é uma linguagem de programação usada para criar interatividade em páginas web. Ele é executado no lado do cliente, ou seja, no navegador do usuário.

## Variáveis

As variáveis são usadas para armazenar valores em JavaScript. Elas são declaradas usando a palavra-chave `var`, `let` ou `const`.

Exemplo:

```javascript
var idade = 20;
let nome = "João";
const PI = 3.14;
```

## Operadores

Os operadores são usados para realizar operações matemáticas e lógicas em JavaScript.

Exemplo:

```javascript
var x = 10;
var y = 5;

var soma = x + y; // 15
var subtracao = x - y; // 5
var multiplicacao = x * y; // 50
var divisao = x / y; // 2
var resto = x % y; // 0
var potencia = x ** y; // 100000
var incremento = x++; // 11
var decremento = x--; // 9
var negacao = !x; // false
var igualdade = x == y; // false
var desigualdade = x != y; // true
var igualdadeEstrita = x === y; // false
var desigualdadeEstrita = x !== y; // true
var maiorQue = x > y; // true
var menorQue = x < y; // false
var maiorOuIgualQue = x >= y; // true
var menorOuIgualQue = x <= y; // false
var e = x && y; // true
var ou = x || y; // true
var concatenacao = x + y; // 105
var atribuicao = x = y; // 5
var atribuicaoAdicao = x += y; // 15
var atribuicaoSubtracao = x -= y; // 5
var atribuicaoMultiplicacao = x *= y; // 50
var atribuicaoDivisao = x /= y; // 10
var atribuicaoResto = x %= y; // 0
var atribuicaoPotencia = x **= y; // 100000
```

## Condicional

O condicional é usado para executar um bloco de código se uma determinada condição for verdadeira.

Exemplo:

```javascript
var idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

## Laço de repetição

O laço de repetição é usado para executar um bloco de código várias vezes.

Exemplo:

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;
while (i < 10) {
    console.log(i);

    i++;
}

var i = 0;
do {
    console.log(i);

    i++;
} while (i < 10);
```

## Funções

As funções são usadas para executar um bloco de código quando são chamadas.

Exemplo:

```javascript
function soma(x, y) {
    return x + y;
}

var resultado = soma(10, 5); // 15
```

## Arrays

Os arrays são usados para armazenar vários valores em uma única variável.

Exemplo:

```javascript
var frutas = ["maçã", "banana", "laranja"];

var fruta = frutas[0]; // maçã
```

## Objetos

Os objetos são usados para armazenar vários valores em uma única variável.

Exemplo:

```javascript
var pessoa = {
    nome: "João",
    idade: 20
};

var nome = pessoa.nome; // João
```

## Classes

As classes são usadas para criar objetos.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

var pessoa = new Pessoa("João", 20);

var nome = pessoa.nome; // João
```

## Métodos

Os métodos são usados para executar um bloco de código quando são chamados.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

var pessoa = new Pessoa("João", 20);

pessoa.apresentar();
```

## Encapsulamento

O encapsulamento é usado para proteger os dados de um objeto.

Exemplo:

```javascript

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade) {
        this.idade = idade;
    }
}

var pessoa = new Pessoa("João", 20);

pessoa.setNome("Maria");

pessoa.apresentar();
```

## Herança

A herança é usada para estender uma classe.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);

        this.curso = curso;
    }

    apresentar() {
        console.log("Olá, meu nome é " + this.nome + " e eu estudo " + this.curso);
    }
}

var aluno = new Aluno("João", 20, "Ciência da Computação");

aluno.apresentar();
```

## Métodos estáticos

Os métodos estáticos são usados para executar um bloco de código quando são chamados sem precis de instanciar uma classe.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    static apresentar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}
Pessoa.apresentar();

```

## Métodos de instância

Os métodos de instância são usados para executar um bloco de código quando são chamados sem precisar instanciar uma classe.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

Pessoa.prototype.apresentar();
```

## Métodos de classe

Os métodos de classe são usados para executar um bloco de código quando são chamados sem precisar instanciar uma classe.

Exemplo:

```javascript

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    static apresentar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

Pessoa.apresentar();
```

## Métodos de protótipo

Os métodos de protótipo são usados para executar um bloco de código quando são chamados sem precisar instanciar uma classe.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

Pessoa.prototype.apresentar = function() {
    console.log("Olá, meu nome é " + this.nome);
}

var pessoa = new Pessoa("João", 20);

pessoa.apresentar();
```

## Callback

O callback é usado para executar um bloco de código quando uma ação for concluída.

Exemplo:

```javascript
function somar(x, y, callback) {
    var resultado = x + y;

    callback(resultado);
}

somar(10, 5, function(resultado) {
    console.log(resultado); // 15
});
```

## Promises

As promises são usadas para executar um bloco de código quando uma ação for concluída.

Exemplo:

```javascript
function somar(x, y) {
    return new Promise(function(resolve, reject) {
        var resultado = x + y;

        resolve(resultado);
    });
}

somar(10, 5).then(function(resultado) {
    console.log(resultado); // 15
});
```

## Async/Await

O async/await é usado para executar um bloco de código quando uma ação for concluída.

Exemplo:

```javascript
async function somar(x, y) {
    var resultado = x + y;

    return resultado;
}

async function main() {
    var resultado = await somar(10, 5);

    console.log(resultado); // 15
}

main();
```

## Módulos

Os módulos são usados para dividir um programa em vários arquivos.

Exemplo:

```javascript
// modulo.js

export function somar(x, y) {
    return x;
}

// main.js

import { somar } from "./modulo.js";

var resultado = somar(10, 5);

console.log(resultado); // 15
```

## Exceções

As exceções são usadas para lidar com erros.

Exemplo:

```javascript
try {
    var resultado = 10 / 0;
} catch (e) {
    console.log(e); // Erro: Divisão por zero
}

```
