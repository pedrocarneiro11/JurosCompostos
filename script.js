// Usar função for

function JurosCompostos () {
    var MontanteInicial = document.getElementById(valorInicial).innerHTML; 
    var TaxaJuros = document.getElementById(taxaJuros).innerHTML;
    var Duracao = document.getElementById(duracao).innerHTML;
    var MontanteFinal;
    'String mesesOuAnos';
    
    MontanteFinal = MontanteInicial*[(1+TaxaJuros)**Duracao];
    console.log(MontanteFinal);
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



