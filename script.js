
alert("Chegou aqui");

$(function(){

    verificarCliqueMenu();

    function verificarCliqueMenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
            
            $.ajax({
                'beforeSend': function(){
                    console.log("Estamos chamando o beforeSend");
                },
                'timeout': 10000,                
                'url':href,
                'error': function(){
                    console.log("ocorreu um erro");
                },
                'success': function(data){
                    console.log(data);
                }
            })
            return false;
        })
    }

});


    
