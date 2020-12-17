function hipotenusa( )
{
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    
    
    var resultado = calc(n1, n2);
    alert("A hipotenusa é " + resultado);

}

    function calc(n1, n2)
    {
       return Math.sqrt(Math.pow(n1,2)+ Math.pow(n2,2));
    }