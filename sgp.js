//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(Acumulador, PontosDaFase) {
        const novaSoma = Acumulador + PontosDaFase;
    return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
    const foiFinalizada = missao.status === "concluída"; //=== igualdade ESTRITA
    return foiFinalizada
    }

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas
};

function atualizarInventario(inventarioAtual, acao, ) {
    let novoInventario;

    if (acao === "pegar"){
        const inventarioComItemNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItemNovo;
    } else if (acao === "descartar") {

        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
            novoInventario = inventarioAtual;
         }
         return novoInventario; // Retornar a mochila do jogador atualizada
    };

const pontosDoJogador = [400, 50, 250, 77]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação final: ", total);

const missoes = [
    {nome: "Salvar a aldeia", status: "Concluída"},
    {nome: "Encontrar mapa", status: "Em andamento"},
    {nome: "Derrotar o chefão", status: "Falhou"},
    {nome: "Coletar recursos", status: "Concluída"}
];

const concluidas = filtrarMissoesConcluidas(missoes)
console.log("Misões concluídas: ", concluidas);

const mochila = ["Mapa", "Lanterna"];
const mochilaAtualizada = atualizarInventario (mochila,"Pegar", "Bússula");