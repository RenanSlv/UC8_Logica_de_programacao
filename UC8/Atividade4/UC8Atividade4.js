const entrada = require('prompt-sync')({sigint: false})

let dataAtual = new Date()
let nomeEvento = null

//pedir data ao usuário e verificar se a data é após o dia atual ou não
//se for após perminitir o cadastro
do{
    //salva a data do evento digitada pelo usuário
    let pegaDataEvento = entrada('Qual a data do evento DD-MM-YYYY ? ')
    //quebra data enviada pelo usuário e salva em um array
    let dataEvento = pegaDataEvento.split('-')

    //separa adata atual por ano, mes e dia
    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth();
    let dia = dataAtual.getDate();

    // verifica se a data enviada pelo usuário é ao menos no dia seguinte e cadastra, caso constrario recusa
    if(ano > dataEvento[2]){
        console.log('Cadastro não permitido por data inválida ')

    }else if(ano < dataEvento[2]){
        nomeEvento = entrada('Qual o nome do evento ? ')

    }else{
        if(mes+1 > dataEvento[1]){
            console.log('Cadastro não permitido por data inválida ')

        }else if(mes+1 < dataEvento[1]){
            nomeEvento = entrada('Qual o nome do evento ? ')

        }else{
            if(dia < dataEvento[0]){
                nomeEvento = entrada('Qual o nome do evento ? ')

            }else {
                console.log('Cadastro não permitido por data inválida ')
            }    
        } 
    }
}while(nomeEvento == null)

console.log('Evento cadastrado com sucesso ')

let listaParticipantes = []
let listaPalestrantes = []
let i = 0

//cadastro para lista de participante e palestrantes
while(listaParticipantes.length < 10 || listaPalestrantes[0] == undefined){
    //Mostra a lista de Palestrantes
    if(listaPalestrantes[0] == undefined){
        console.log('Lista de palestrantes vazia ')
    }else {
        for(i = 0; i < listaPalestrantes.length; i++){
            console.log(listaPalestrantes[i])
        }

    }
    //Mostra a lista de participantes
    if(listaParticipantes[0] == undefined){
        console.log('Lista de participantes vazia ')
    }else {
        for (i = 0; i < listaParticipantes.length; i++){
            console.log(listaParticipantes[i])
        }
    }

    // Cadastra 1.Participante 2.Palestrante
    let cadastro1ou2 = entrada('Cadastrar (1) Participante (2) Palestrante ')
    if(cadastro1ou2 == 1){
        if(listaParticipantes.length >= 10){
            console.log('Cadastro não permitido por ter excedido o limite ')
        }else {
            let dataNascimentoParticipante = entrada('Qual a idade do participante ? ')
            if(dataNascimentoParticipante >= 18){
                listaParticipantes.push('Participante' + (listaParticipantes.length+1))
                console.log('Participante cadastrado')   
            
            }else {
                console.log('Cadastro não permitido por ser menor de idade ')
            }
            
        }

    }else if(cadastro1ou2 == 2){
        listaPalestrantes.push('Palestrante' + (listaPalestrantes.length+1))
        console.log('Palestrante cadastrado ')

    }else {
        console.log('Erro !')

    }
}


console.log('Lista Final de participantes e palestrantes do enveto ' + nomeEvento + ' : ')
//Mostra a lista de Palestrantes
if(listaPalestrantes[0] == undefined){
    console.log('Lista de palestrantes vazia ')
}else {
    for(i = 0; i < listaPalestrantes.length; i++){
        console.log(listaPalestrantes[i])
    }

}
//Mostra a lista de participantes
if(listaParticipantes[0] == undefined){
    console.log('Lista de participantes vazia ')
}else {
    for (i = 0; i < listaParticipantes.length; i++){
        console.log(listaParticipantes[i])
    }
}