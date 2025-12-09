function getById(id) {
    return document.getElementById(id);
}

let selectTema =getById('selectTema');
let body = getById('body');

let TEMA_CLASSES = ['tema-padrao', 'tema-preto', 'tema-colorido']

selectTema.addEventListener('change', () => {
    let temaEscolhido = selectTema.value; 

    body.classList.remove(...TEMA_CLASSES); //Cria uma cópia rasa de um array
    body.classList.add(`tema-${temaEscolhido}`);
});

let botaoAdicionar =  getById('botaoAdicionar');
let tabela =  getById('tabela_filmes'); 
let colunaNome = getById('colunaNome');
let colunaGenero =  getById('colunaGenero');
let colunaAno =  getById('colunaAno');

botaoAdicionar.addEventListener('click', () => {
    
    let nome = colunaNome.value;
    let genero = colunaGenero.value;
    let ano = colunaAno.value;

    if (nome == '' || genero == '' || ano == '') {
        alert('Preencha todas as colunas');
        return; 
    }
    
    let novaLinha = document.createElement('tr');
    
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${genero}</td>
        <td>${ano}</td>
        <td class="status-cell">Pendente</td>
        <td>
            <button onclick="marcarAssistido(this)">Marcar Assistido</button> 
            <button onclick="excluirLinha(this)">Excluir</button>
        </td>
    `;
    
    tabela.appendChild(novaLinha);
    //limpa os campos
    colunaNome.value = '';
    colunaGenero.value = '';
    colunaAno.value = '';
})

function excluirLinha(botao) {
    let linha = botao.closest('tr'); //encontra o <tr>
    linha.remove(); //remove o <tr\> e toda a linha
}

function marcarAssistido(botao) {
    
    let linha = botao.closest('tr');
    
    let statusCell = linha.querySelector('.status-cell'); //Dentro desta linha específica da tabela, encontre o elemento que tem a classe .status-cell e armazene essa célula na variável statusCell
    
    linha.classList.toggle('assistido');  //aplica o CSS na linha
    
    if (linha.classList.contains('assistido')) {
        statusCell.textContent = 'Assistido';
        botao.textContent = 'Desmarcar';
    } else {
        statusCell.textContent = 'Pendente';
        botao.textContent = 'Assistido';
    }
}