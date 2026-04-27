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
}