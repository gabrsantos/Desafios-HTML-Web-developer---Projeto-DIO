function desafio(){

    $('#btn_desafio_1').on('click', function(e){
        e.preventDefault();
        let str = $('#inputDesafio1').val();
        let num = parseInt(str);

        if(str == ''){
            alert('Nenhum número foi digitado.');
        }else if(isNaN(num)){
            alert('Não é um número válido '+num);
        }else{
          alert('É um número válido!! '+num);
        }

    });
    
}