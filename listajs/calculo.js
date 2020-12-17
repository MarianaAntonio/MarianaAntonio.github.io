function salario( )
{
    var venda = document.getElementById("vencar").value;
    var valor = document.getElementById("valven").value;
    var salario = document.getElementById("salfix").value;
    var valorcarro  = document.getElementById("valvencar").value;
    venda = parseFloat(venda);
    valor = parseFloat(valor);
    salario = parseFloat(salario);
    valorcarro = parseFloat(valorcarro);
    
    var resultado = calc(venda, valor, salario, valorcarro);
    alert("o seu salario final é" + resultado);

}

    function calc(numcarro, valorporcarro, valortotal, salariofixo)
    {
        return salariofixo + valorporcarro * numcarro + valortotal * 0.05;

    }