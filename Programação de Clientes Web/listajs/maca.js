function vendamaca( )
{
    var n1= document.getElementById("num1").value;
    n1= parseInt(n1);
    
    
    var resultado = calvenda(n1) ;
    alert("Sua compra deu:" + resultado + "reais");

}

    function calvenda(n1)
    {
         if(n1>=12)
         var venda= n1 * 1.0;
         else
         var venda= n1 * 1.3;
         return venda; 
    }