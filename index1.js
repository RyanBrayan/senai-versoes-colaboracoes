var lista_participantes = [];
var lista_palestrante  = [];
window.alert('Inicio');

var data = new Date();
var data_mes = data.getMonth() + 1;
var data_dia = data.getDate();
var data_ano = data.getFullYear(); 

var diaEvento = 30;
var mesEvento = 9;
var anoEvento = 2021;

while (data_dia > diaEvento || data_mes > mesEvento ||data_ano > anoEvento ) {  
    window.alert(" Cadastro nao permitido, data do evento já ultrapassada.")
} 
var idade = parseInt(prompt("Informe a sua idade: "));
if(idade >= 18){
var nome = prompt("Digite seu nome: ");
var participante = (prompt("Voce é um participante [S/N]: "));
window.alert('Você foi cadastrado com sucesso, so aguardar a data do evento ' + nome[0].toUpperCase() + nome.substr(1) )
if (participante.substr(1) == "Ss"){
    lista_participantes.push(nome);
} else {
    lista_palestrante.push(nome);
}
} else {
window.alert("Cadastro negado, permitido apenas para maiores de 18 anos.");
}