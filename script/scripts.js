import atualizaLista from './imprimeCotacao.js';





const graficoDolar = document.getElementById('graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dolar hoje',
            data: [],
            borderWidth: 1
        }]
    },
});

const graficoIene = document.getElementById('graficoIene')

const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene hoje',
            data: [],
            borderWidth: 1
        }]
    },
});

const graficoBitcoin = document.getElementById('graficoBitcoin');

const graficoParaBitcoin = new Chart(graficoBitcoin, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Bitcoin hoje',
            data: [],
            borderWidth: 1
        }]
    },
});

function setDate() {

    const date = new Date()

    const horario = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return horario

}


function updateGraph(grafico, legenda, cotacao) {

    grafico.data.labels.push(legenda)

    grafico.data.datasets.forEach((dataset) => {

        dataset.data.push(cotacao)

    });

    grafico.update();


    //removendo primeira info p/ não mostrar mais de 6 
    if (grafico.data.labels.length >= 6){

        removeData(grafico)

    }


}


function removeData(grafico) {

    grafico.data.labels.shift();

    grafico.data.datasets.forEach((dataset) => {

        dataset.data.shift();

    });

    grafico.update();
}

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage('usd');

workerDolar.addEventListener("message", event => {
    let tempo = setDate();
    let valor = event.data.ask;
    atualizaLista(valor, 'dolar');
    updateGraph(graficoParaDolar, tempo, valor)
})


let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage('iene');

workerIene.addEventListener("message", event => {
    let tempo = setDate();
    let valor = event.data.ask;
    atualizaLista(valor, 'iene');
    updateGraph(graficoParaIene, tempo, valor)
})



let workerBitcoin = new Worker('./script/workers/workerBitcoin.js');
workerBitcoin.postMessage('bitcoin');

workerBitcoin.addEventListener("message", event => {
    let tempo = setDate();
    let valor = event.data.ask;
    atualizaLista(valor, 'bitcoin');
    updateGraph(graficoParaBitcoin, tempo, valor)
})




