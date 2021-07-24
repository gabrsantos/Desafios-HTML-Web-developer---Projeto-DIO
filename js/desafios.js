var Desafios = function () {
    var desafio_1 = function(){

        $('#btn_desafio_1').on('click', function (e) {
            e.preventDefault();
            alert('desafio1');
            validaCampo($('#inputDesafio1').val());
        });
        
    }


    function validaCampo(str){

        return;

    }

    return {
        init: function () {
            desafio_1();
        }
    };
}();