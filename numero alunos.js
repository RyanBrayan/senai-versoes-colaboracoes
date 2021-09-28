var NumeroDeAlunos= window.prompt("Digite a quantidade de alunos presentes:  ");
for(i=0; i <= NumeroDeAlunos; i++){
    if(i == 0){
        console.log('Este numero é zero');
    } else if (i % 2 == 0){ 
        console.log("Par " + NumeroDeAlunos);
    } else { 
        console.log("Numero é impar " + NumeroDeAlunos);

    }
}
