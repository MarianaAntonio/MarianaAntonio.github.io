function med( )
{
    var not1= document.getElementById("nota1").value;
    var not2= document.getElementById("nota2").value;
    var not3= document.getElementById("nota3").value;
    not1= parseInt(not1);
    not2= parseInt(not2);
    not3= parseInt(not3);
    
    
    var resultado = calmedia(not1, not2, not3) ;
    alert("Sua media é" + resultado);

}

    function calmedia(n1, n2, n3)
    {
         return (n1 * 2 + n2 * 3 + n3 * 5) / 10; 
    }