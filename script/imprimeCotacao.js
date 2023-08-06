// const lista = document.querySelectorAll('[data-lista]');

// function selecionaCotacao(nome, valor) {
//     lista.forEach((listaEscolhida) => {
//         if (listaEscolhida.id == nome) {
//             imprimeCotacao(listaEscolhida, nome, valor);
//         }
//     })
// }

// function imprimeCotacao(lista, nome, valor) {
//     lista.innerHTML = '';
//     const plurais = {
//         "dolar": "dolares",
//         "iene": "ienes"
//     }
//     for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
//         const listaItem = document.createElement('li');
//         listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome : plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`
//         lista.appendChild(listaItem)
//     }
// }

// export default selecionaCotacao;

const listaValorMoeda = document.querySelectorAll('[data-lista]')



export default function atualizaLista(cotacao, moeda) {

    listaValorMoeda.forEach((listaUl) => {

        if (listaUl.id == moeda) {

            listaUl.innerHTML= ' '

            
            for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {

                const itemDaLista = document.createElement('li')

                itemDaLista.innerHTML = `${multiplicador} ${moeda}  = ${(cotacao*multiplicador).toFixed(2)} reais `

                listaUl.appendChild(itemDaLista)

            }    
            

        }

    })

}


