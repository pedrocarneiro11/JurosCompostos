function JurosCompostos() {
    let valor_inicial = document.getElementById("valorInicial").value;
    let taxa = document.getElementById("taxaJuros").value;
    let taxa_percentual = taxa / 100;
    let duracao = document.getElementById("duracao").value;
    let mesAnos = document.getElementById("SelectMesAnos").value; //Meses ou Anos  
    let mensalAnual = document.getElementById("SelectMensalAnual").value; //Mensal ou Anual  
    let valor_final;

    if (mesAnos=="Anos" && mensalAnual == "Mensal") {
        duracao = duracao * 12;
    }

    if (mensalAnual=="Anual") {
        if (mesAnos == "Meses") {
            duracao = duracao / 12;
        }
    }

    valor_final = valor_inicial * Math.pow(1 + taxa_percentual, duracao); 

    document.getElementById("resultado").innerHTML= valor_final.toFixed(2);
  }