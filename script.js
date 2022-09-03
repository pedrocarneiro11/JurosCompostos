function JurosCompostos() {

    var ValorInicial, TaxaJuros, TaxaCalc, Duracao, MensalAnual, MesAnos;

    var ValorFinal;

    var parte1; var parte2; var parte3;

    ValorInicial = document.getElementById('valorInicial').value;
    TaxaJuros = document.getElementById('taxaJuros').value;
    Duracao = document.getElementById('duracao').value;
    MensalAnual = document.getElementById('SelectMensalAnual').value;
    MesAnos = document.getElementById('SelectMesAnos').value;

    TaxaCalc = TaxaJuros/100;

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

    parte1 = 1 + TaxaCalc; 
    console.log("parte 1: " + parte1);

    parte2 = Math.pow(parte1, Duracao); 
    console.log("parte 2: " + parte2);

    ValorFinal = (ValorInicial*parte2);
    console.log("Valor final: " + ValorFinal);

    // taxa de juros para calculo será a TaxaCalc

    
 
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

MontanteFinal = MontanteInicial*[(1+TaxaJuros)^Duracao] OK
Entrega MontanteFinal Ok
 */


