function initElement() {
	var p = document.getElementById("foo");
	p.onclick = showAlert;
};

function showAlert(event) {
	alert("onclick Event detected!");
}
	  
	function calculaLapso(tsInicio, tsFin) {
	  return tsFin - tsInicio;
	}

	function setInnerH(obj) {
	  document.getElementById(obj).innerHTML = new Date().getTime(); 
	}

	function setAmountInInnerH(obj, str) {
	  document.getElementById(obj).innerHTML = str; 
	}

	function displayTimeStamp() {
	  return new Date().getTime();
	}

	function setTodosInners(obj, obj2, obj3) {
		str = new Date().getTime(); 
		setAmountInInnerH(obj, str); 
		setAmountInInnerH(obj2, str); 
		setAmountInInnerH(obj3, str); 
	}

	  function initBody(d) {
		d = new Date().getTime();
		var str = d.toString(); 
		
		return d; 
	  }
	  
	  function f_CargarBotonesDeNumeros(){
		document.getElementById('btn1').innerHTML = document.getElementById('demo3').innerHTML[0]; //" - " + document.getElementById('demo3').innerHTML[0] + " - "; 
		document.getElementById('btn2').innerHTML = document.getElementById('demo3').innerHTML[1]; //" - " + document.getElementById('demo3').innerHTML[1] + " - "; 
		document.getElementById('btn3').innerHTML = document.getElementById('demo3').innerHTML[2]; //" - " + document.getElementById('demo3').innerHTML[2] + " - "; 
		document.getElementById('btn4').innerHTML = document.getElementById('demo3').innerHTML[3]; //" - " + document.getElementById('demo3').innerHTML[3] + " - "; 
		document.getElementById('btn5').innerHTML = document.getElementById('demo3').innerHTML[4]; //" - " + document.getElementById('demo3').innerHTML[4] + " - "; 
		document.getElementById('btn6').innerHTML = document.getElementById('demo3').innerHTML[5]; //" - " + document.getElementById('demo3').innerHTML[5] + " - "; 
		f_ActivarBotonesCifras(); 
		document.getElementById('btnEmpezar').disabled = true;
	  }
	  
	  function f_ActivarBotonesCifras() {
		document.getElementById('btn1').disabled = false;
		document.getElementById('btn2').disabled = false;
		document.getElementById('btn3').disabled = false;
		document.getElementById('btn4').disabled = false;
		document.getElementById('btn5').disabled = false;
		document.getElementById('btn6').disabled = false;		
	  }

	  function f_DesactivarBotonesCifras() {
		document.getElementById('btn1').disabled = true;
		document.getElementById('btn2').disabled = true;
		document.getElementById('btn3').disabled = true;
		document.getElementById('btn4').disabled = true;
		document.getElementById('btn5').disabled = true;
		document.getElementById('btn6').disabled = true;		
	  }
	  
	  function f_Reiniciar(){
		f_CargarBotonesDeNumeros(); 
		document.getElementById('btnEmpezar').disabled = true;
		f_ActivarBotonesCifras(); 
		
		//document.getElementById('pResultado').innerHTML = ""; 
		document.getElementById('pResultado').value = ""; 
		document.getElementById('btnEnviar').disabled = true; 
	  }
	  
	  function clkNumeros(id){
		//document.getElementById('pResultado').innerHTML = document.getElementById('pResultado').innerHTML + id.innerHTML ; 
		document.getElementById('pResultado').value = document.getElementById('pResultado').value + id.innerHTML ; 
		id.innerHTML = "X"; 
		id.disabled = true; 
		document.getElementById('btnEnviar').disabled = false; 
	  }

	  function boolEstaOrdenada(str){
		var bRes = true; 
		
		if ( str.length !== 6 ){
			alert("INcorrecto! Faltan cifras.");
			return false; 
		}
		
		for (var i = 0; i < 5; i++) {
			if (str[i] > str[i+1]){
				//Resultado incorrecto. Devolver FALSE
				alert("SORRY: el orden es INCORRECTO.");
				return false; 
			}
		}
		alert("CORRECTO!!");
		return bRes; 
	  }
