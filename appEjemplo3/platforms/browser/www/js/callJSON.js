function llamadaServicioFake (){
	
	var entrada = {"dato":"llamada"};
	$.ajax({
	    type: "POST",
	    contentType: "application/json; charset=utf-8",
	    url: "json/pruebaJson.json",
	    dataType: "json",
	    data: JSON.stringify(entrada),
	    success: function (data){
	    	alert(data.dato1+ data.dato2);
	    },
	    error: function (xhr, status, error){
	    	alert("Se ha producido un error: "+ xhr.status+ " " + error);
	    }
	});
}


function llamadaServicioHora() {
	$.ajax({
	    type: "GET",
	    contentType: "application/json; charset=utf-8",
	    url: "http://date.jsontest.com/",
	    dataType: "json",
	    success: function (data){
	    	alert(data.time+"  " +data.milliseconds_since_epoch+ "  " + data.date);
	    },
	    error: function (xhr, status, error){
	    	alert("Se ha producido un error: "+ xhr.status+ " " + error);
	    }
	});
}

function llamadaServicioIp() {
	$.ajax({
	    type: "GET",
	    contentType: "application/json; charset=utf-8",
	    url: "http://code.jsontest.com/",
	    dataType: "script",
	    success: function (data){
	    	data;
	    	console.log(data);
	    },
	    error: function (xhr, status, error){
	    	alert("Se ha producido un error: "+ xhr.status+ " " + error);
	    }
	});
}