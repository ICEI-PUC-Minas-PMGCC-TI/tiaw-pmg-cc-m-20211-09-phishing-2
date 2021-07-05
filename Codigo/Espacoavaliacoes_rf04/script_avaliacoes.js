//MUDAR A AVALIAÇÂO (PARTE DAS ESTRELAS)
function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index_avaliacao.html");
    url = url[0];

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;

    if (estrela == 5) {
        if (s5 == url + "../imagens/starOFF.png") {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starON.png";
            document.getElementById("s4").src = "../imagens/starON.png";
            document.getElementById("s5").src = "../imagens/starON.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starON.png";
            document.getElementById("s4").src = "../imagens/starON.png";
            document.getElementById("s5").src = "../imagens/starON.png";
            avaliacao = 4;
        }
    }

    //ESTRELA 4
    if (estrela == 4) {
        if (s4 == url + "../imagens/starOFF.png") {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starON.png";
            document.getElementById("s4").src = "../imagens/starON.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 4;
        } else {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starON.png";
            document.getElementById("s4").src = "../imagens/starON.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 3;
        }
    }

    //ESTRELA 3
    if (estrela == 3) {
        if (s3 == url + "../imagens/starOFF.png") {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starON.png";
            document.getElementById("s4").src = "../imagens/starOFF.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 3;
        } else {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starON.png";
            document.getElementById("s4").src = "../imagens/starOFF.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 2;
        }
    }

    //ESTRELA 2
    if (estrela == 2) {
        if (s2 == url + "../imagens/starOFF.png") {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starOFF.png";
            document.getElementById("s4").src = "../imagens/starOFF.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starON.png";
            document.getElementById("s3").src = "../imagens/starOFF.png";
            document.getElementById("s4").src = "../imagens/starOFF.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 1;
        }
    }

    //ESTRELA 1
    if (estrela == 1) {
        if (s1 == url + "../imagens/starOFF.png") {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starOFF.png";
            document.getElementById("s3").src = "../imagens/starOFF.png";
            document.getElementById("s4").src = "../imagens/starOFF.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "../imagens/starON.png";
            document.getElementById("s2").src = "../imagens/starOFF.png";
            document.getElementById("s3").src = "../imagens/starOFF.png";
            document.getElementById("s4").src = "../imagens/starOFF.png";
            document.getElementById("s5").src = "../imagens/starOFF.png";
            avaliacao = 0;
        }
    }

    document.getElementById('rating').innerHTML = avaliacao;

}
//COMENTARIOS
function leDados() {
    let strDados = localStorage.getItem('bd');
    let objDados = {};
    

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            contatos: [{nome:"Mais funcionalidades"},
                {nome:"Achei legal, mas deveria ter uma pontuação"},
                {nome:"Aumente as listas de sites seguros!!!"}
            ]
        }

    }
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('bd', JSON.stringify(dados));
    
}

function incluirContato() {
    let objDados = leDados();
    
    let strNome = document.getElementById('campoNome').value;
    let novoContato = {
        nome: strNome,
    };
    objDados.contatos.push(novoContato);

    salvaDados(objDados);
}

function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();
    for (i = 0; i < objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} <\p>`
    }

    tela.innerHTML = strHtml;


}

//botao config
document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('btnIncluirContato').addEventListener('click', incluirContato);
