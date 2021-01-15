function menor( )
{
    var n1 = document.getElementById("entrada1").value;
    var n2 = document.getElementById("entrada2").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    var resultado = comp(n1, n2);
}
 function comp (num1, num2)
 {
    
    if(num1>num2)
    alert(+ num1 + "é maior que" + num2 );
    else
    alert(+ num2 + "é maior que" + num1 );
 
}
