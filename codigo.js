function sumar(){
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");

	var vacios = validarVacios(num1,num2);
	if(vacios){
		var ban = validarNumeros(num1, num2);
		if(ban)
			var ope = document.getElementById("res").innerHTML = " de la suma es: " + (parseInt(num1.value)+parseInt(num2.value));
	}
	
};
function restar(){
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	
	var vacios = validarVacios(num1,num2);
	if(vacios){
		var ban = validarNumeros(num1, num2);
		if(ban)
			var ope = document.getElementById("res").innerHTML = " de la resta es: " + (parseInt(num1.value)-parseInt(num2.value));
	}
};

function dividir(){
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");

	var vacios = validarVacios(num1,num2);
	if(vacios){
		var ban = validarNumeros(num1, num2);
		if(ban){
			if(parseInt(num2.value)==0){
				alert("Por favor digite un numero mayor a cero");
				num2.focus();
			}
			else
				var ope = document.getElementById("res").innerHTML = " de la divición es: " + (parseInt(num1.value)/parseInt(num2.value));
		}
	}
};

function multiplicar(){
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	
	var vacios = validarVacios(num1,num2);
	if(vacios){
		var ban = validarNumeros(num1, num2);
		if(ban)
			var ope = document.getElementById("res").innerHTML = " de la multiplicación es: " + (parseInt(num1.value)*parseInt(num2.value));
	}
};

function validarNumeros(num1 , num2){
	var ban = true;
	var numeros = /[0-9]$/;

	if(!numeros.exec(num1.value)){
		var error = document.getElementById("num1Erro").innerHTML = "Solo se permite numeros";
		num1.focus();
		ban = false;
	}
	else if(!numeros.exec(num2.value)){
		var error = document.getElementById("num2Erro").innerHTML = "Solo se permite numeros";
		num2.focus();
		ban = false;
	}
	return ban;
}
function validarVacios(num1, num2){

	var ban = true;
	if(num1.value.length<=0){
		var error = document.getElementById("num1Erro").innerHTML = "Este campo no puede estar vacio";
		num1.focus();
		ban = false;
	}
	else if(num2.value.length<=0){
		var error = document.getElementById("num2Erro").innerHTML = "Este campo no puede estar vacio";
		num2.focus();
		ban = false;
	}
	return ban;

}

window.onload = function(){

	var botonSumar = document.getElementById("sumar");
	var botonDividir = document.getElementById("dividir");
	var botonRestar = document.getElementById("restar");
	var botonMultiplicar = document.getElementById("multiplicar");

	botonSumar.onclick	= sumar;
	botonDividir.onclick = dividir;
	botonMultiplicar.onclick = multiplicar;
	botonRestar.onclick = restar;
;}
