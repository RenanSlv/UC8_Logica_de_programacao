//switch-case


//exemplo de codificação de um jantar usando if/else
const alimentoSelecionado = 'churrasco'

if(alimentoSelecionado === 'churrasco'){
    console.log('vamos jantar ' + alimentoSelecionado)
}else if(alimentoSelecionado === 'macarrão'){
    console.log('vamos jantar ' + alimentoSelecionado)
}else {
    console.log('o item não consta no cardápio')
}



//mesmo exemplo de codificação de jantar usando switch-case
switch (alimentoSelecionado) {
    case 'churrasco':
        console.log('vamos jantar ' + alimentoSelecionado)
        break;
    case 'macarrão':
        console.log('vamos jantar ' + alimentoSelecionado)
        break;
    default:
        console.log('o item não consta no cardápio')
        break;
}