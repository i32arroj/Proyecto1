 
      function mostrar(){ //Función que muestra los resultados
            var ciudad = $('#ciudadSeleccionada').val();
            //Utilizar variable ciudad para extraer JSON
            //Mostra resultados
        }
        
         function mostrarUbicacion() //Función que muestra rsultados según la localización
            {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latitud = position.coords.latitude;
                    var longitud = position.coords.longitude;
                    $.ajax({
                        dataType: "json",
                        url: "http://nominatim.openstreetmap.org/reverse",
                        type: "get",
                        data: {format: "json", lat: latitud, lon: longitud}
                    }).done(function (data) {
                        ciudad = data.address.city;
                        $(".ciudad").html(ciudad);
                        
                        //Se convierte el valor devuelto por openstreetmap
                        if(ciudad=="Málaga")
                            ciudad="malaga";
                        else
                        if(ciudad=="Sevilla")
                            ciudad="sevilla";
                        else
                        if(ciudad=="Córdoba")
                            ciudad="cordoba";
                        else
                        if(ciudad=="Huelva")
                            ciudad="huelva";
                        else
                        if(ciudad=="Cádiz")
                            ciudad="cadiz";
                        else
                        if(ciudad=="Jaen")
                            ciudad="jaen";
                        else
                        if(ciudad=="Almería")
                            ciudad="almeria";
                        else
                        if(ciudad=="Granada")
                            ciudad="granada";
                
                        //Llamar a la función mostrar pasánsole la variable ciudad
                       
             
                    });
                     
                });
               
            }
     