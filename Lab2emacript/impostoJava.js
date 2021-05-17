var imposto = () =>{
    
    let salario= parseFloat(document.getElementById("salario").value);
     
    if(salario < 1903.98){
        var taxa = 0.00;
    }
    else if(salario == 1903.99 || salario <= 2826.65){
        var taxa = (salario * 0.075) - 142.8;
    }
    else if(salario == 2826.66 || salario <= 3751.05){
        var taxa = (salario * 0.15) - 354.8;
    }
    else if(salario == 3751.06 || salario <= 4664.68){
        var taxa = (salario * 0.225) - 636.13;
    }
    else{
        var taxa = (salario * 0.275) - 869.36;
    }
    document.getElementById("result").innerHTML = taxa;
}