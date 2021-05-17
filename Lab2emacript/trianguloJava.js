var triangulo = () =>{
    
    let linha1 = parseFloat(document.getElementById("linha1").value);
    let linha2 = parseFloat(document.getElementById("linha2").value);
    let linha3 = parseFloat(document.getElementById("linha3").value);

    if ((linha2 + linha3 <= linha1) || (linha1 + linha3 <= linha2) || (linha1 + linha2 <= linha3)){
        var result = "Erro";
    }
    else{
        if(linha1 == linha2 && linha1 == linha3 && linha2 == linha3){
                var result = "Equilátero";
            }
        if(linha1 == linha2 && linha1 != linha3 && linha2 != linha3 || linha1 == linha3 && linha1 != linha2 && linha3 != linha2 || linha2 == linha3 && linha2 != linha1 && linha3 != linha1){
                var result = "Isósceles";       
            }
        if(linha1 != linha2 && linha1 != linha3 && linha2 != linha3 ){
                var result = "Escaleno";          
            }
        if(linha1 <= 0 || linha2 <= 0 || linha3 <= 0){
                var result = "Erro";
            }
    }
    document.getElementById("result").innerHTML = result;
}