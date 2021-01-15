function primo( )
{
        var numero=document.getElementById("numero").value;
		numero = parseInt(numero);

		var resultado= prim(numero);

		alert("O numero" + numero + "é" + resultado +);
}

function prim(n1)
{
	for(i=2;i<n1;i++)
	{
		if(n1/i) % 1==0)
		return false;
	}
    return true;

}
