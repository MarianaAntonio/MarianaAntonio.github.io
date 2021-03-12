$(function(){ 
    $("#resposta1").click(function(){
        let resp1= $('input[name="op1"]:checked').val();
        if (resp1 == "a1" || resp1 == "b1" || resp1 == "c1" || resp1 == "e1"){
            $("#result1").text("Resposta errada!");
            $("#result1").css('color', '#FF6347');
            $("#color5").css('background-color', '#00CD66');
            if(resp1 == "a1")
                $("#color2").css('background-color', '#FF6347');
            if(resp1 == "b1")
                $("#color3").css('background-color', '#FF6347');
            if(resp1 == "c1")
                $("#color4").css('background-color', '#FF6347');
            if(resp1 == "e1")
                $("#color").css('background-color', '#FF6347');
        }
        else if(resp1 == "d1"){
            $("#result1").text("Resposta certa!");
            $("#result1").css('color', '#00CD66');
            $("#color5").css('background-color', '#00CD66');
        }
    })
    $("#resolucao1").click(function(){
        $("#resp1").html("A resposta é a letra <strong>d)</strong></br>Um gás real aproxima-se do ideal quanto mais alta for sua temperatura e menor sua pressão.");
    })
    $("#resposta2").click(function(){
        let resp1= $('input[name="op2"]:checked').val();
        if (resp1 == "a2" || resp1 == "b2" || resp1 == "c2" || resp1 == "e2"){
            $("#result2").text("Resposta errada!");
            $("#result2").css('color', '#FF6347');
            $("#color9").css('background-color', '#00CD66');
            if(resp1 == "a2")
                $("#color6").css('background-color', '#FF6347');
            if(resp1 == "b2")
                $("#color7").css('background-color', '#FF6347');
            if(resp1 == "c2")
                $("#color8").css('background-color', '#FF6347');
            if(resp1 == "e2")
                $("#color10").css('background-color', '#FF6347');
        }
        else if(resp1 == "d2"){
            $("#result2").text("Resposta certa!");
            $("#result2").css('color', '#00CD66');
            $("#color9").css('background-color', '#00CD66');
        }
    })
    $("#resolucao2").click(function(){
        $("#resp2").append($("<img>").attr('src', 'questao2_quimica.gif'));
    })
    $("#resposta3").click(function(){
        let resp1= $('input[name="op3"]:checked').val();
        if (resp1 == "a3" || resp1 == "e3" || resp1 == "c3" || resp1 == "d3"){
            $("#result3").text("Resposta errada!");
            $("#result3").css('color', '#FF6347');
            $("#color12").css('background-color', '#00CD66');
            if(resp1 == "a3")
                $("#color11").css('background-color', '#FF6347');
            if(resp1 == "d3")
                $("#color14").css('background-color', '#FF6347');
            if(resp1 == "c3")
                $("#color13").css('background-color', '#FF6347');
            if(resp1 == "e3")
                $("#color15").css('background-color', '#FF6347');
        }
        else if(resp1 == "b3"){
            $("#result3").text("Resposta certa!");
            $("#result3").css('color', '#00CD66');
            $("#color12").css('background-color', '#00CD66');
        }
    })
    $("#resolucao3").click(function(){
        $("#resp3").html("A resposta é a letra <strong>b)</strong></br> Dados:</br>n = 1 mol</br>V = ?</br>T = 25 ºC = 298 K</br>R = 0,082 atm.L. mol-1 . K-1.</br>P = 10 atm</br></br>Usando a equação de estado dos gases, temos:</br>P . V = n . R . T</br></br>V = n . R . T/P</br></br>V = (1 mol) . (0,082 atm.L. mol-1 . K-1) . (298 K)/(10atm)</br></br>V = 2,44 L");
    })
})