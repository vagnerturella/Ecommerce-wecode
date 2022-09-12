$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.dep1');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.dep2');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });