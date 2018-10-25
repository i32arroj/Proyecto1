
    $(document).ready(function(){
        document.getElementById("myResul").style.display="none"; // Ocultar de primer plano "Resultados"
        document.getElementById("myResul1").style.display="none";
        })


      
      function mostrar(){ //Función que muestra los resultados
            var ciudad = $('#ciudadSeleccionada').val();
            //Utilizar variable ciudad para extraer JSON
            //Mostra resultados
            results(ciudad); // Ejecutar función Results para obtener los datos según la ciudad
            document.getElementById("myResul").style.display="block"; // Mostrar resultados al pulsar "Buscar"
            document.getElementById("myPrin").style.display="none"; // Ocultar eleccion de ciudad al "Buscar"
            document.getElementById("myResul1").style.display="block";
        }

        function mostrardos(){ //Función que muestra los resultados
            var ciudad = $('#ciudadSeleccionadados').val();
            //Utilizar variable ciudad para extraer JSON
            //Mostra resultados
            results(ciudad); // Ejecutar función Results para obtener los datos según la ciudad
            document.getElementById("myResul").style.display="block"; // Mostrar resultados al pulsar "Buscar"
            document.getElementById("myPrin").style.display="none"; // Ocultar eleccion de ciudad al "Buscar"
            document.getElementById("myResul1").style.display="block";
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
                        if(ciudad=="Málaga"){
                            ciudad="malaga";
                            results(ciudad);
                        }
                            
                
                        //Llamar a la función mostrar pasánsole la variable ciudad
                        
             
                    });
                     
                });
               
            }
             
    function results(city) {
        $.get("datos.json",function(data){
            var encontrados;
               for(var i=0;i<data.length;i++){
                 if (data[i].provincia==city){
                     if(city=="Malaga"){
                        data[i].provincia="Málaga";
                     } else if (city == "Almeria")
                     {
                        data[i].provincia="Almería";
                     } else if(city=="Cadiz") {
                        data[i].provincia="Cádiz";
                     } else if(city=="Cordoba") {
                        data[i].provincia="Córdoba";
                     } else if( city=="Jaen"){
                        data[i].provincia="Jaén";
                     }
                    
                  encontrados+="<tr><td>"+data[i].combustible+"</td><td>"+data[i].provincia+"</td><td>"+data[i].ciudad+"</td><td>"+data[i].nombgasolinera+"</td><td>"+data[i].precio+"</td><td><a href="+data[i].url+">"+data[i].direccion+"</a></td></tr>";
               }}
      
            $("#filas").html(encontrados);
             
            });
        };
              
        
             
     