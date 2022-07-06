/**
 * Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 */

function tratamentoNota (nota) {
    if (nota % 5 > 2){
        let novaNota = nota - (nota % 5) + 5
        return novaNota
    } else {
        return nota
    }
}

function sistemaNota (nota) {
    if (nota < 0 || nota > 100){
        return 'Nota inválida'
    } 
    else if (nota >= 40 ) {
        const resultado = tratamentoNota(nota)
        return console.log(`Aluno aprovado com a nota ${resultado}`) 
    } else {
        return console.log('Aluno reprovado')
    }
    
}


sistemaNota(100)
sistemaNota(30)
sistemaNota(37)
sistemaNota(38)
sistemaNota(88)
sistemaNota(87)
sistemaNota(61)