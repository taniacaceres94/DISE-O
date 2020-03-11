$(document).ready(function(){

      /*----------------------Cambiar background cada 4 seg------------------------------------*/

      //cambiar la imagen de fondo  SOLO SI ES MAYOR DE 640PX, si es menor no cambia
      /*Sacamos el ancho de la ventana:*/
       var ventana_ancho = $(window).width();
       /*####DUDA PARA MARÍA####
        me funciona pero no, si es menor de 640 no cambia de imagen si cargamos la ventana ya siendo pequeña, como la carguemos siendo
        grande me dice que me peine. Me lo hace a la inversa también.
       */
       console.log(ventana_ancho)
       if(ventana_ancho >= 640){
           //creamos un contador para indicar la posición del array de imagenes
          var i = 0;
          //creamos un array que contendrá todas las imágenes que queramos mostrar
          var arrayImagenes =[
            'img/pic2.png',
            'img/pic1.png',
            'img/pic3.png'
          ];

          //Hacemos una función 'setInterval' que nos permitirá ejecutar algo en un tiempo x.
          setInterval(function(){
            i++;
            if(i === arrayImagenes.length){ //si el contador es igual a la longitud del array, quiere decir que hemos recorrido
             //todo el array, por lo que lo pondremos a 0
                 i = 0;
             }
            
            $(".pagina1").css("background-image", "url("+arrayImagenes[i]+")"); //cambiamos el fondo cada 4 segundos
      
        }, 4000)

       }
     
      

      /*-----Menú desplegable--*/
     

        $('.hamburger').click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.menuppal').toggleClass('is-active');
        });


    /*------------------------Cambiar el fondo de las diferentes ventanas--------------------------------*/
    //Cuando seleccionemos la página "Galería" nos cambiará el background
    $('#paginaExplorar').on("click", function(){
        $("body").css("background-color", "white");
        $("body").css("background-image", "url(img/concrete-wall.png)");
    })

  

    /*--------loading------*/
    $(window).on('load', function() { // makes sure the whole site is loaded 
      $('#status').fadeOut(); // will first fade out the loading animation 
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
      $('body').delay(350).css({'overflow':'visible'});
    })
    /*----------------------*/

      /*---------#####################################PÁGINA 2###########################################------------*/
      if(ventana_ancho <= 780){
        $('.divIzqPag2').css("visibility", "hidden");
      }
      
      var cantidad = $('.divPadre').scrollLeft();
      $('.divIzqPag2').mouseover(function(){
        
        if($('.divPadre').scrollLeft() < 2000){
          cantidad = cantidad+550;
          //$('.divPadre').scrollLeft(cantidad)
          $('.divPadre').animate({
            scrollLeft: cantidad
          }, 1000)
        }
      })

      $('.divDerePag2').mouseover(function(){
        
        if($('.divPadre').scrollLeft() > 0){
          cantidad = cantidad-550;
          //$('.divPadre').scrollLeft(cantidad)
          $('.divPadre').animate({
            scrollLeft: cantidad
          }, 1000)
        }
      })


     
      /*-----------------########## PÁGINA 3 ##########----------------*/

      /*Al hacer click en una de las imagenes nos ocultará la no seleccionada y en cambio aparecerá información acerca del evento,
      también cambia el fondo respecto al pintor*/

      $('#cartel1').click(function(){

        $('#cartel2').animate({right:"-1000px"}, 500);
        //$('#cartel1Oculto').animate({right:"490"}, 500);
       
        setInterval(function(){
          $('#imgFridaInfo').attr("src", "img/infoVan.png");
          $('#cartel2').animate({right:"0px"}, 500);
        },1000)
      })

      $('#cartel2').click(function(){
        $('#cartel1').animate({left:"-1000px"}, 500);
        //$('#cartel1Oculto').animate({right:"490"}, 500);
       
        setInterval(function(){
          $('#imgVanInfo').attr("src", "img/infoFrida.png");
          $('#cartel1').animate({left:"0px"}, 500);
        },1000)
      })



  })