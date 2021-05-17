var calculadora = () =>{
    
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let select = document.getElementById("select").value;
      
    if(select == 1){
            var result = numero1 + numero2;
        }
    else if(select == 2){
            if(numero1 > numero2)
                var result = numero1 - numero2;
            
            else
                var result = numero2 - numero1;
        }
    else if(select == 3){
            var result = numero1 * numero2;
        }
    else{
            var result = numero1/numero2;
        }

    document.getElementById("result").innerHTML=result;
}