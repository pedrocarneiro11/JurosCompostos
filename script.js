function JurosCompostos() {

    var ValorInicial, TaxaJuros, TaxaCalc, Duracao, MensalAnual, MesAnos;

    var Juros, ValorFinal;

    var parte1; var parte2; var parte3;

    ValorInicial = document.getElementById('valorInicial').value;
    TaxaJuros = document.getElementById('taxaJuros').value;
    Duracao = document.getElementById('duracao').value;
    MensalAnual = document.getElementById('SelectMensalAnual').value;
    MesAnos = document.getElementById('SelectMesAnos').value;
    TaxaCalc = TaxaJuros/100;

    if (MesAnos == "Meses" && MensalAnual == "Mensal") {
        Duracao = Duracao;
        console.log(Duracao + ' meses');
        parte1 = 1 + TaxaCalc;
        console.log('parte 1: ' + parte1);
        parte2 = parte1**Duracao;
        console.log('parte 2: ' + parte2);
    } 
    
    else if (MesAnos == "Meses" && MensalAnual == "Anual") {
        Duracao = Duracao / 12; // Converter duracao para anos
        console.log(Duracao + ' anos');
        parte1 = 1 + TaxaCalc;
        console.log('parte 1: ' + parte1);
        parte2 = parte1**Duracao;
        console.log('parte 2: ' + parte2);
        // a partir daqui, mesAnos sera anos e MensalAnual será anual

        
    } else if (MesAnos == "Anos" && MensalAnual == "Mensal") {
        Duracao = Duracao*12; // Converter duracao para meses
        console.log(Duracao + ' meses');
        parte1 = 1 + TaxaCalc;
        console.log('parte 1: ' + parte1);
        parte2 = parte1**Duracao;
        console.log('parte 2: ' + parte2);
        // a partir daqui, mesAnos sera anos e MensalAnual será anual
        
    } else if (MesAnos == "Anos" && MensalAnual == "Anual") {
        Duracao = Duracao;
        console.log(Duracao + ' anos');
        parte1 = 1 + TaxaCalc;
        console.log('parte 1: ' + parte1); 
        parte2 = parte1**Duracao;
        console.log('parte 2: ' + parte2);       
    }

    parte3 = parte2 - 1;
    console.log('parte 3: ' + parte3);

    Juros = ValorInicial * parte3;
    ValorFinal = parseInt(ValorInicial) + parseInt(Juros);
    console.log('Valor final: ' + ValorFinal);
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


