function JurosCompostos() {
    let valor_inicial = document.getElementById("valorInicial").value;
    let taxa = document.getElementById("taxaJuros").value;
    let taxa_percentual_mensal = taxa / 100;
    let duracao = document.getElementById("duracao").value;
    let mesAnos = document.getElementById("SelectMesAnos").value; //Meses ou Anos  
    let valor_final

    if (mesAnos=="Meses") {
        console.log("1")
    } else if (mesAnos=="Anos") {
        console.log("2")
    }

    valor_final = valor_inicial * Math.pow(1 + taxa_percentual_mensal, duracao);

    console.log(valor_inicial);
    console.log(taxa);
    console.log(duracao);
    console.log(valor_final); 
    console.log(mesAnos); 

    document.getElementById("resultado").innerHTML= valor_final;
  }