$(function(){ 
    $("#calcular").click(function(){
        let soluto =$("#soluto1").val();
        let solvente =$("#solvente1").val();
        let solutoi= 120;
        let result= solutoi * solvente;
        if(result == soluto){
            /*saturada*/
            $("#calculo").html(solutoi + " (g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente + " (L) de H2O</br>" + "</br>x = " + result + " g de K2CR2O7");
            $("#resposta").html("A solução é <strong>saturada</strong>, pois a quantidade de soluto fornecida, " + soluto + " g, é exatamente igual a quantidade de soluto necessária, " + result + " g, para dissolver a " +
            solvente +" litro (s) de água.");
        }
        else if(result > soluto){
            /*insaturada*/
            $("#calculo").html(solutoi + " (g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente + " (L) de H2O</br>" + "</br>x = " + result + " g de K2CR2O7");
            $("#resposta").html("A solução é <strong>insaturada</strong>, pois a quantidade soluto fornecida, " + soluto +" g, é menor que a quantidade de soluto necessária, " + result +" g, para dissolver a " + 
            solvente +" litro (s) de água.");
        }
        else{
            let copfundo= soluto-result;
            /*saturada com corpo de fundo*/
            $("#calculo").html(solutoi + " (g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente + " (L) de H2O</br>" + "</br>x = " + result + " g de K2CR2O7");
            $("#resposta").html("A solução é <strong>saturada com corpo de fundo</strong>, pois a quantidade de soluto fornecida, " + soluto + " g, é maior que a quantidade de soluto necessária, " + result + " g, para dissolver a "+ 
            solvente + " litro (s) de água.</br> Tendo corpo de fundo de " + copfundo + " g de K2CR2O7.");
        }
    })
    $("#calcular2").click(function(){
        let soluto2 =$("#soluto2").val();
        let solvente2 =$("#solvente2").val();
        let solutoi= 120;
        let result2= soluto2/solvente2;
        if((soluto2 * 294.19) > (solutoi * solvente2)){
            $("#calculo2").html("M = " + soluto2 + "/" + solvente2 +"</br>M = " + result2 + "mol/L" + "</br></br>Considerando 294.19 g/mol a massa molar do bricomato de potássio e levando em conta a quantidade de soluto que seria necessária de acordo com a quantidade de solvente: </br></br>Teríamos " + soluto2 + " . 294.19 = " + soluto2 * 294.19 + "g de soluto e </br>" + solutoi + "(g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente2 + " (L) de H2O</br>" + "x = " + solutoi * solvente2 + " g de K2CR2O7 necessários");
            $("#resposta2").html("A concentração molar é " + result2 + " mol/L" + " e há corpo de fundo pois a quantidade de soluto que o solvente vai precisar para que o soluto dissolva será igual a " + solutoi * solvente2 + " g e a quantidade de soluto fornecido é " + soluto2 * 294.19 + " g.");
        }
        else{
            $("#calculo2").html("M = " + soluto2 + "/" + solvente2 +"</br>M = " + result2 + " mol/L");
            $("#resposta2").html("A concentração molar é " + result2 + "mol/L" + " e não há corpo de fundo.");
        }
    })
})