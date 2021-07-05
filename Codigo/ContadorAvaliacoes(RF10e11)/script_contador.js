var avaliacoesPositivas = 0;

function salvaAvaliacao(){
    avaliacoesPositivas++;
    localStorage.setItem('db', avaliacoesPositivas);
    console.log(avaliacoesPositivas);
}
function leAvaliacoes(){
    let avaliacao = localStorage.getItem('db');
    return avaliacao;
}

function imprimeAvaliacoes() {
    
    let tela = document.getElementById('tela');
    let strHtml = '';
    let avaliacoesPositivas = leAvaliacoes();

    strHtml += `<p>${avaliacoesPositivas} <\p>`


    tela.innerHTML = strHtml;

}

document.getElementById('btnSim').addEventListener('click', imprimeAvaliacoes);
