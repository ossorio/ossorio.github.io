function getURLParameter(sParam){
    	var sPageURL = window.location.search.substring(1);
    	var sURLVariables = sPageURL.split('&');
    	for (var i = 0; i < sURLVariables.length; i++){
        	var sParameterName = sURLVariables[i].split('=');
        	if (sParameterName[0] == sParam){
            return sParameterName[1];
        	}
    	}
	}
 	 
 	 function setSelectedIndex(s, valsearch){
      // Recorre todos los items en la lista desplegable
      for (i = 0; i< s.options.length; i++){ 
        if (s.options[i].value == valsearch){
          // Se ha encontrado el item. Se ajusta su valor y se sale del bucle
          s.options[i].selected = true;
          break;
        }
      }
      return;
    }
 
 	 // Se determina la URL de retorno correcta (Emulador o reloj)
    function getQueryParam(variable, defaultValue) {
      var query = location.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1]);
        }
      }
      return defaultValue || false;
    } 	
 	
 	
 	function enviaDatosAPebble(){
    	// Obtiene los datos de configuracion de los elementos de la IU
    	var dropdownFreqUpdateWeather = document.getElementById('freqUpdateWeather');
		var textFreqUpdateWeather = dropdownFreqUpdateWeather.options[dropdownFreqUpdateWeather.selectedIndex].text;

    	// Construye un objeto de datos que sera 
    	var options = {
      'freqUpdateWeather': parseInt(textFreqUpdateWeather)
    	};

	 
    var return_to = getQueryParam('return_to', 'pebblejs://close#');

	 // Se codifican y envian los datos cuando se cierra la pagina
    document.location = return_to + encodeURIComponent(JSON.stringify(options));
}
