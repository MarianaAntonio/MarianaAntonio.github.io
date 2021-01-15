
function sala( )
{
    var n1= document.getElementById("num1").value;
    var n2 = document.getElementById("num1").value;
    n1= parseFloat(n1);
    n2 = parseFloat(n2);
    
    
    var resultado = salario(n1, n2);
    alert("o seu atual salario é " + resultado);

}

    function salario(num1, num2)
    {
        return num1*(num2/100)+num1;

    }