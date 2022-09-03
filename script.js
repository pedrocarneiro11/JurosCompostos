// Usar função for

function JurosCompostos() {

    var ValorInicial, TaxaJuros, Duracao, MensalAnual, MesAnos;

    ValorInicial = document.getElementById('valorInicial').value;
    TaxaJuros = document.getElementById('taxaJuros').value;
    Duracao = document.getElementById('duracao').value;
    MensalAnual = document.getElementById('SelectMensalAnual').value;
    MesAnos = document.getElementById('SelectMesAnos').value;

    if(MesAnos == "Meses") {
        Duracao = Duracao;
        console.log(Duracao + ' meses');
    } else {
        Duracao = Duracao * 12;
        console.log(Duracao + ' meses');
    }

    console.log("Valor inicial: " + ValorInicial);
    console.log("Taxa de juros: " + TaxaJuros + "%");
    console.log("Mensal ou anual: " + MensalAnual);
    console.log("Meses ou anos: " + MesAnos);
 
}


/*
Declara MontanteInicial OK
Declara TaxaJuros OK
Determina se a taxa é mensal ou anual OK
Declara Duracao OK
se Duracao == meses, mantem e meses OK
se Duracao == anos, converte para meses OK
se TaxaJuros == mensal, mantem em mensal OK
se TaxaJuros == anual, converte para mensal OK
MontanteFinal = MontanteInicial*[(1+TaxaJuros)^Duracao]
Entrega MontanteFinal
 */


