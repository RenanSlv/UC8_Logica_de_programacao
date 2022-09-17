//Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar o seguintes resultados:

// se o número for par, escreve 'par' e o número correspondente.
// se o número for ímpar, escreva 'ímpar' e o número correspondente.
// se o número for zero, escreva 'zero' e o número correspodente.

let alunosPresentes = 15

for(let aluno = 0 ; aluno <= alunosPresentes; aluno++){
    if(aluno == 0){
        console.log('zero ' + aluno)

    }else if(aluno % 2 == 0){
        console.log('par ' + aluno)

    }else {
        console.log('impar '+ aluno)
    }

}