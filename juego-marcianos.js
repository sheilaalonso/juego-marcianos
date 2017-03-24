
$("document").ready(function(){

//Your code here
    
    $("button").click(function(){
    
        //
        
        function animacionmarciano1(){
            
            $("#marciano1").animate({rigth: "1200px",bottom:"300px"},5000);
            $("#marciano1").animate({right: "0px",bottom:"300px"},5000);
            $("#marciano1").animate({right: "1200px",bottom:"300px"},5000,animacionmarciano1 );
            
        }
          animacionmarciano1();
        
        
         ///
        function animacionmarciano2(){
           $("#marciano2").animate({left: "1200px",bottom:"400px"},3000);
           $("#marciano2").animate({left: "0px",bottom:"400px"},3000);
           $("#marciano2").animate({left: "1200px",bottom:"400px"},2000,animacionmarciano2 );
        }
        animacionmarciano2();
           
        ///
        
        function animacionmarciano3(){
            
       
           $("#marciano3").animate({right: "1200px",top:"350px"},3000);
            $("#marciano3").animate({right: "0px",top:"350px"},3000);
             $("#marciano3").animate({right: "1200px",top:"350px"},2000,animacionmarciano3 );
         }
        animacionmarciano3();
        ///
        function animacionmarciano4(){
           $("#marciano4").animate({right: "900px",top:"450px"},3000);
            $("#marciano4").animate({right: "0px",top:"450px"},3000);
             $("#marciano4").animate({right: "900px",top:"450px"},3000,animacionmarciano4 );
        }
        animacionmarciano4();
            
        
        
        //
        function animacionmarciano5(){
           $("#marciano5").animate({right: "1200px",top:"500px"},3000);
             $("#marciano5").animate({right: "0px",top:"500px"},3000);
            $("#marciano5").animate({right: "1200px",top:"500px"},3000,animacionmarciano5 );
        }
        animacionmarciano5();
        
        
        //
        function animacionmarciano6(){
           $("#marciano6").animate({left: "1200px",top:"300px"},3000);
            $("#marciano6").animate({left: "0px",top:"300px"},3000);
             $("#marciano6").animate({left: "1200px",top:"300px"},3000,animacionmarciano6 );
        }
        animacionmarciano6();
            
                
                
     
  
    
        });
//funcion clik para desaprecer marciano y que aparezca boom
     $("#marciano1,#marciano2,#marciano3,#marciano4,#marciano5,#marciano6").click(function(){
     $(this).css('backgroundImage', 'none').html('<span class="explosion"><img src="img/boom3.png"></span>').fadeOut(500);
         
    });
     
     $('#marciano1,#marciano2,#marciano3,#marciano4,#marciano5,#marciano6').mouseover(function(){
        
        $('#marciano').stop(true);
        $(this).stop(true);
    });
$('#marciano').click(puntos)
    
   var puntos = $('.marcador').text();
      $('.marcador').html();
         $('.marcador').val();
    
     $('#marcador-salida').text(Number(puntos) + 1);
     
});

