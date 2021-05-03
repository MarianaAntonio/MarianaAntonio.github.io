function fibonacci() {
    var n= document.getElementById("n").value;
	if(n< 0){
            return 0;
        }   
        let s;
        let x1= 0;
        let x2= 1;
        let result= [];
        for(let k= 0; k< n; k++) {
            result.push(x1);
            s= x1;
            x1+= x2;
            x2= s;
        }
    document.getElementById("result").innerHTML=result;
}

