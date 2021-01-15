function experiencia(anos) 
{ 
    var anosEstudo= document.getElementById("anos").value;
    anosEstudo= parseInt(anosEstudo);
    var anosEstudo = 7;
    experiencia(anosEstudo);
    if( anosEstudo<=1)
        return "iniciante";
       
        
    else
    if(anosEstudo >= 1 && anosEstudo <3 )
       return "intermediario";
        
    else
    if(anosEstudo >=3 && anosEstudo <= 6)
        return "avançado";
        

    else
    return "JediMaster";
    
}
