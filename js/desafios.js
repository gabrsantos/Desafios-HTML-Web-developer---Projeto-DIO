var Desafios = function () {
    var desafio_1 = function(){

        $('#btn_desafio_1').on('click', function (e) {
            e.preventDefault();
            if(validaCampo($('#inputDesafio1').val())){
                console.log('b');
            }else{
                alert('Contém números ou letras inválidas'); 
            }
        });

    }

    var desafio_2 = function(){

        $('#btn_desafio_2').on('click', function (e) {
            e.preventDefault();
            validaCampo($('#inputDesafio2').val());
        });
        
    }

    var desafio_3 = function(){

        $('#btn_desafio_3').on('click', function (e) {
            e.preventDefault();
            validaCampo($('#inputDesafio3').val());
        });
        
    }

    var desafio_4 = function(){

        $('#btn_desafio_4').on('click', function (e) {
            e.preventDefault();
            validaCampo($('#inputDesafio4').val());
        });
        
    }

    var desafio_5 = function(){

        $('#btn_desafio_5').on('click', function (e) {
            e.preventDefault();
            validaCampo($('#inputDesafio5').val());
        });
        
    }


    function validaCampo(str){

        if(!isNaN(parseFloat(str))){
            var limpaString = str.replace(/ /g, '');
            var numArray = limpaString.split(',')
            searchLetters = numArray.every(isLetter);
            
            return searchLetters;
            
        }else{
            return alert('erro');
        }

    }


    function isLetter(currentValue, index, numArray) {
        return currentValue >= -10000;
      }

    return {
        init: function () {
            desafio_1();
            desafio_2();
            desafio_3();
            desafio_4();
            desafio_5();
        }
    };
}();