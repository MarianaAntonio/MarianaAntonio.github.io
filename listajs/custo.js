function fabrica( )
{
    var cus= document.getElementById("custo").value;
    cus= parseFloat(cus);
    
    var resultado = calcusto(cus) ;
    alert("o custo " + resultado);

}

    function calcusto(custo)
    {
         return custo + custo * 0.28 + custo * 0.45;
    }