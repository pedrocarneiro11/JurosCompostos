// Usar função for

function JurosCompostos() {

    var ValorInicial, TaxaJuros, Duracao, MensalAnual, MesAnos;

    ValorInicial = document.getElementById('valorInicial').value;
    TaxaJuros = document.getElementById('taxaJuros').value;
    Duracao = document.getElementById('duracao').value;
    MensalAnual = document.getElementById('SelectMensalAnual').value;
    MesAnos = document.getElementById('SelectMesAnos').value;


    console.log(ValorInicial);
    console.log(TaxaJuros);
    console.log(Duracao);
    console.log(MensalAnual);
    console.log(MesAnos);

 
}




/* Declara MontanteInicial
Declara TaxaJuros
Determina se a taxa é mensal ou anual
Declara Duracao
se Duracao == meses, mantem e meses
se Duracao == anos, converte para meses
se TaxaJuros == mensal, mantem em mensal
se TaxaJuros == anual, converte para mensal
MontanteFinal = MontanteInicial*[(1+TaxaJuros)^Duracao]
Entrega MontanteFinal
 */

// document.getElementById

/*
    var v;

document.getElementById('dest_one_key').addEventListener('change', function(event) {
    v = event.target.value;
    console.log('Value: ' + v);
});
    */

/*
    var TaxaJuros = document.getElementById("taxaJuros").innerHTML;
    var Duracao = document.getElementById("Duracao").innerHTML; */