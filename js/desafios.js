var Desafios = function () {

    var desafio_1 = function(){

        $("#resposta_desafio_1").html('</br>');

        $('#btn_desafio_1').on('click', function (e) {
            e.preventDefault();
            if(validaCampo($('#inputDesafio1').val())){
                value = formataString($('#inputDesafio1').val());
                $("#resposta_desafio_1").html(respDesafio1(value));
            }else{
                alert('Contém números ou letras inválidas!!'); 
            }
        });

    }

    var desafio_2 = function(){

        $("#resposta_desafio_2").html('</br>');

        $('#btn_desafio_2').on('click', function (e) {
            e.preventDefault();
            if(validaCampo($('#inputDesafio2').val())){
                value = formataString($('#inputDesafio2').val());
                respDesafio2(value[0]) == false ? alert('Número não é inteiro e positivo!!')
                                                : $("#resposta_desafio_2").html(respDesafio2(value[0]));
            }else{
                alert('Número não é inteiro ou é um caractere inválido!!'); 
            }
        });
        
    }

    var desafio_3 = function(){

        $("#resposta_desafio_3").html('</br>');

        $('#btn_desafio_3').on('click', function (e) {
            e.preventDefault();
            if(validaCampo($('#inputDesafio3').val())){
                value = formataString($('#inputDesafio3').val());
                respDesafio3(value) == false ? alert("Precisa ter 5 números, separados por vírgulas!!")
                                             : $("#resposta_desafio_3").html(respDesafio3(value));
            }else{
                alert('Contém números ou letras inválidas!!');
            }
        });
        
    }

    var desafio_4 = function(){

        $("#resposta_desafio_4").html('</br>');

        $('#btn_desafio_4').on('click', function (e) {
            e.preventDefault();
            if(validaCampo($('#inputDesafio4').val())){
                value = formataString($('#inputDesafio4').val());
                respDesafio4(value) == false ? alert('Número precisa ser inteiro, positivo, maior que zero e menor que 1000000!!')
                                             : $("#resposta_desafio_4").html(respDesafio4(value));               
            }else{
                alert('Número não é inteiro ou é um caractere inválido!!'); 
            }
        });
        
    }

    var desafio_5 = function(){

        $("#resposta_desafio_5").html('</br>');

        $('#btn_desafio_5').on('click', function (e) {
            e.preventDefault();
            if(validaCampo($('#inputDesafio5km').val()) && validaCampo($('#inputDesafio5l').val())){
               valuekm = formataString($('#inputDesafio5km').val());
               valuel = formataString($('#inputDesafio5l').val());  
               respDesafio5(valuekm, valuel) == false ? alert('Valores precisam ser positivos!!')
                                                      : $("#resposta_desafio_5").html(respDesafio5(valuekm, valuel));   
            }
        });
        
    }

    var funcoes_desafios = function(){

        $('#btn_topo').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 'slow');
        });

    }


    function validaCampo(str){
        if(!isNaN(parseFloat(str))){
            nums = formataString(str);
            
            return searchLetters = nums.every(isLetter);            
        }else{
            return;
        }

    }

    function formataString(str){
        var limpaString = str.replace(/ /g, '');

        return numArray = limpaString.split(',');
    }


    function isLetter(currentValue, index, numArray) {
        return currentValue >= -10000;
    }

    function respDesafio1(value){
        let total = 0;
        let i = 0;
        let valores = value;
        
        while (i <= value){

            if (valores[i] >= 0){
                total = total + 1;
            }
          
            i = i + 1;
        }

        return (total + " valores positivos");
    }

    function respDesafio2(value){
        let valor = value;
        var nums = [];

        if(value > 0){
            for (let num = 2; num <= valor; num++) {

                if(num != 0 && num % 2 == 0){
                nums.push(num);
                }

            }
            return result = nums.join("</br>");
        }else{
            return false;
        }
    }

    function respDesafio3(value){
        if(value.length == 5 && value.every((e)=> e != '')){   
            numero = Array(value);

            numero[0] = value[0];
            numero[1] = value[1];
            numero[2] = value[2];
            numero[3] = value[3];
            numero[4] = value[4];

            function numpar(numero){ return numero % 2 == 0 };
            function numimp(numero){ return numero % 2 != 0 };
            function numpos(numero){ return numero > 0 };
            function numneg(numero){ return numero < 0 };

            pares = numero.filter(numpar);
            impares = numero.filter(numimp);

            positivos = numero.filter(numpos);
            negativos = numero.filter(numneg);

            var pares = pares.length + " valor(es) par(es)</br>";
            var impares = impares.length + " valor(es) impar(es)</br>";
            var positivos = positivos.length + " valor(es) positivo(s)</br>";
            var negativos = negativos.length + " valor(es) negativo(s)</br>";

            return (pares + impares + positivos + negativos);
        } else{
            return false;
        }
    }

    function respDesafio4(value){

        if(value > 0 && value <= 1000000){

            let valor = parseInt(value);
            let nota100 = 0;
            let nota50 = 0;
            let nota20 = 0;
            let nota10 = 0;
            let nota5 = 0;
            let nota2 = 0;
            let nota1 = 0;
            let novoValor;

            novoValor = valor;
            nota100 = Math.trunc(valor / 100);
            valor %= 100;
            nota50 = Math.trunc(valor / 50);
            valor %= 50;
            nota20 = Math.trunc(valor / 20);
            valor %= 20;
            nota10 = Math.trunc(valor / 10);
            valor %= 10;
            nota5 = Math.trunc(valor / 5);
            valor %= 5;
            nota2 = Math.trunc(valor / 2);
            valor %= 2;
            nota1 = valor;

            var rValor = 'Valor: ' + novoValor + '</br>';
            var rNota100 = nota100 + ' nota(s) de R$ 100,00</br>';
            var rNota50 = nota50 + ' nota(s) de R$ 50,00</br>';
            var rNota20 = nota20 + ' nota(s) de R$ 20,00</br>';
            var rNota10 = nota10 + ' nota(s) de R$ 10,00</br>';
            var rNota5 = nota5 + ' nota(s) de R$ 5,00</br>';
            var rNota2 = nota2 + ' nota(s) de R$ 2,00</br>';
            var rNota1 = nota1 + ' nota(s) de R$ 1,00</br>';

            return (rValor + rNota100 + rNota50 + rNota20 + rNota10 + rNota5 + rNota2 + rNota1);
        }else{
            return false;
        }
    }

    function respDesafio5(valuekm, valuel){

        if(valuekm > 0 && valuel > 0){
            let X = parseInt(valuekm);
            let Y = parseFloat(valuel);

            let total = (X / Y).toFixed(3);

            return (total + " km/l");
        }else{
            return false;
        }
    }

    return {
        init: function () {
            funcoes_desafios();
            desafio_1();
            desafio_2();
            desafio_3();
            desafio_4();
            desafio_5();
        }
    };
}();