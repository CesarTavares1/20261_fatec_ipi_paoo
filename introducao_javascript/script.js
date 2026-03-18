//promises
function calculoRapidinho(numero){

    return numero >= 0 ? Promise.resolve((numero + 1) * (numero / 2)) : Promise.reject("Somente números positivos por favor")
}
const resultado = calculoRapidinho(100)

resultado
.then((res) => console.log(res))
.catch(erro => console.log(erro))

const resultado2 = calculoRapidinho(-500)
resultado2.then(res => console.log(res)).catch(erro => console.log(erro))


//somar os valores 1, 2, 3 ..., n, sendo um valor passado como parâmetro
//defini-la com o nome calculoDemorado
// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         let res = 0
//         for(let i = 1; i <= n; i++) res += i
//         resolve(res)
//     })
// }

// const resultado = calculoDemorado(100)
// //then e catch
// resultado
// .then((res) => {console.log(res)})
// .catch(erro => console.log(`Falhou: ${erro}`))
// console.log('Fim do script principal')
// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'
// //função callback
// const exibirConteudo = (erro, conteudo) => {
//     console.log('A')
//     if(erro){
//         console.log(`Deu erro: ${erro}`)
//     }
//     else{
//         console.log(conteudo.toString())
//         const dobro = Number(conteudo.toString()) * 2
//         const finalizar = (erro) => {
//             console.log(erro ? "Deu erro tentando salvar o dobro" : 'Salvou o dobro com sucesso')
//             console.log("C")
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log("D")

//     }
// }

// fs.readFile(nomeArquivo, exibirConteudo)
// console.log('B')

//represente uma calculadora como objeto JS, ela somente sabe somar e subtrair dois valores

//agende a execução da soma para daqui 5 segundos
//agende a execução da subtração para daqui meio segundo
//claro, exiba os valores no final
//no formato: 2 + 3 = 5
//1 - 1 = 0

// function demorada(tempo){
//     const atualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     console.log(`Tempo: ${tempo}`)
//     return d
// }

// setTimeout(() => {demorada(2000)}, 2000)
// setTimeout(() => {demorada(1000)}, 1000)

// setTimeout(() => {
//     console.log("Executada pela setTimeout...")
// }, 0)

// const a = new Date().getTime() + 5000
// while(new Date().getTime() <= a);
// console.log('Terminando o script principal')

// const a = 7 + 1 * 4
// const b = 8 * 1

// setTimeout(() => {
//     const d = demorada()
// }, 1000)

// const e = a + b
// console.log(`e: ${e}`)



// const a = 7 + 6
// const b = 7 + 1

// const d = demorada()

// const e = 2 + b + a
// console.log(`e: ${e}`)


// const a = 2 + 7
// const b = 6 + 5
// console.log(a + b)

// console.log('Eu primeiro')
// console.log('Agora eu....')
// console.log("Sempre vou ser a última...:(")






// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     //callback
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//             const dobro = Number(conteudo.toString()) * 2
//             console.log(`Dobro: ${dobro}`)
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log(`Deu erro tentando salvar o dobro`)
//                 }
//                 else{
//                     console.log('Salvou o dobro com sucesso')
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//             console.log('C')
//         }
//         console.log("A")
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log("B")
// }

// abrirArquivo('arquivo.txt')

// function demorada(tempo){
//     console.log(`Demorada: ${tempo}ms`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     console.log(`d: ${d}`)
// }

// setTimeout(() => demorada(2000), 2000)
// setTimeout(() => demorada(1000), 1000)
// console.log('Chegou ao fim do script principal')

// setTimeout(() => {
//     console.log('Dentro da timeout')
// }, 0)

// const a = new Date().getTime() + 10000
// while(new Date().getTime() <= a);
// console.log('fora da timeout')
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     console.log(`d: ${d}`)
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// setTimeout(() => {
//     const d = demorada()
// }, 500)

// const e = a + b
// console.log(`e: ${e}`)

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre sou a última...')


//Objetos Javascript
//uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 20
//Uma concessionária tem CNPJ e um endereço. Ela possui alguns carros em estoque. Cada carro
//tem marca, modelo e ano de fabricação.
// let calculadora = {
//     somar: (a, b) => a + b,
//     subtrair: function(a, b){return a - b}
// }

// let res1 = calculadora.somar(1, 2)
// console.log(res1)
// console.log(calculadora.subtrair(2, 1))
// console.log(calculadora['subtrair'](2, 1))

// let concessionaria = {
//     cnpj: '00.000.000/0001-00',
//     endereco: {
//         logradouro: 'Avenida B',
//         numero: 1,
//         bairro: 'Vila J'
//     },
//     veiculos: [
//         {
//             marca: 'Ford', 
//             modelo: 'Fiesta', 
//             ano: 2000,
//             proprietarios: [
//                 {
//                     nome: 'João',
//                     telefone: 65656565
//                 },
//                 {
//                     nome: Maria,
//                     telefone: 98989898
//                 }
//             ]
//         },
//         {
//             marca: 'Honda',
//             modelo: 'HR-V',
//             ano: 2020,
//             proprietarios: [
//                 {
//                     nome: 'Ana',
//                     telefoen: 67474747
//                 }
//             ]
//         }
//     ]
// }
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 20,
//         bairro: 'Vila J'
//     }
// }
// console.log(`${pessoa.nome} mora na ${pessoa.endereco.logradouro}.`)
// console.log(`${pessoa['nome']} tem ${pessoa[`idade`]} anos. Ela mora na ${pessoa.endereco['logradouro']}, número ${pessoa['endereco'].numero}.`)
//uma pessoa cujo nome é João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// //closure
// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2}
// }
// let res = eAgora()
// res.f1()
// res.f2()
// function saudacoesFactory(saudacao, nome){
//     let outra
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// let olaJoao = saudacoesFactory('Oi', 'João')
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()
// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()
// let umaFuncao = function(){
//     console.log("Fui armazenada numa variável")
// }
// umaFuncao()

// function f (funcao){
//     funcao()
// }

// f(umaFuncao)

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada pela g')
//         return () => console.log ("E agora?")
//     }
//     return outraFuncao
// }


// f(g()()())

// f(g())

// const gResult = g()
// gResult()
// g()()


// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) =>{return ac + v})
// console.log(soma)
// // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const algumComecaComA = nomes.some(n => n.startsWith('A'))
// console.log(algumComecaComA)
// const todosComecamComA = nomes.every(n => n.startsWith('A'))
// console.log(todosComecamComA)
//[A, A, R, A, C]
// const res = nomes.map(nome => nome.charAt(0))
// console.log(res)
//reescrever a linha 3 usando todo syntax sugar que as arrow functions oferecem
// const apenasComA = nomes.filter(n => n.startsWith('A'))
// console.log(apenasComA)


//funções
// //arrow function
// const dobrar = n => 2 * n
// console.log(dobrar(6))
// const triplicar = (n) => {
//     console.log("Vamos calcular o triplo de " + n)
//     return 3 * n
// }
// console.log(triplicar(5))
//escreva uma função que decida se um valor é par ou não

// const hello = nome => console.log('Oi, ' + nome)
// hello('Ana')
// const hello = () => {console.log('Oi')}
// hello()
// const dobrar = function(n){
//     return 2 * n
// }
// console.log(dobrar(2))
// console.log(dobrar(undefined))

// const triplicar = function(n = 5){
//     return 3 * n
// }
// const resultado = triplicar(10)
// console.log(resultado)
// console.log(triplicar(undefined))

// const produto = function(a, b){
//     console.log(a * b)
// }
// produto(4, 3)
// function somar(a, b){
//     return a + b
// }
// console.log(somar(2, 3))

//functions e arrow functions
// function hello(){
//     console.log('Oi')
// }
// hello(undefined)
// function hello(nome){
//     console.log('Oi, ' + nome)
// }
// hello('Ana')
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 'abc'
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }
//comparação por igualdade
//Java: ==, Python: ==
//Javascript: == ou ===(usamos apenas esse)
//null e undefined
//exemplos:
//a = null
//b = undefined
// lista = []
// lista2 = lista
// console.log(lista2 === lista)
// console.log([] == [])
// console.log(false == [])
// console.log(null == undefined): true
// console.log(null == null): true
// console.log(1 === [1]): false
//console.log(1 == [1]): true
// console.log(true == 1): true
// console.log(1 === '1'): false
// console.log(1 == '1'): true
// console.log(1 === 1): true
// console.log(1 == 1): true

//coerção explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + Number(n2)
// console.log(`${n1} + ${n2} = ${n3}`)


//coerção implicita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(`${n1} + ${n2} = ${n3}`)

//tipos
//js é dinamicamente tipa

// let a = 2
// console.log(typeof(a))
// a = true
// console.log(typeof(a))

// s  = "abc"
// String s = "abc";

// listaDeLista = [[], [], [], 2]

// List <List <String>> lista = new ArrayList <List<String>>();
//declaração de variáveis
//const, let e var
//içamento(hoisting)
//null undefined
// var idade = 18
// console.log(`Oi, ${nome}.`)
// if(idade >= 18){
//   let nome = 'Maria'
//   console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }
// console.log("Até mais, " + nome + '.')
// String linguagem = "Javascript";
// String linguagem = "Java";
// var linguagem = 'Javascript'
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = 'Java'
// console.log('Aprendendo ' + linguagem)
// console.log('Antes do for')
// for (const i = 0; i < 10; i = i + 1){
//   console.log('for com const...')
// }
// console.log('Depois do for')

// let nome = 'Maria'
// console.log(nome)
// nome = `Meu nome é ${nome}.`
// console.log(nome)

// const nome = 'José'
// console.log(nome)
// nome = 'José Silva'
// console.log(nome)

// console.log('Hello, JS!')