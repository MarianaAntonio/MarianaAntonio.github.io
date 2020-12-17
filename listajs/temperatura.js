function funcaotemp( )
{
    var temperatura= document.getElementById("temp").value;
    temperatura= parseFloat(temperatura);
    
    
    var resultado = graus(temperatura);
    alert("corresponde a " + resultado +  "graus celsius");

}

    function graus(f)
    {
        return ((f - 32 ) / 9) * 5;
    }