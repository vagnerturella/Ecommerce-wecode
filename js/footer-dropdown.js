$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.about-us');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.acount');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.policies');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt4');
    var dropDown = $('.contact');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });