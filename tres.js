function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let tempCorporal;
	let sexo;
	let precio = 600;
	let total;
	let contViudo = 0; 
	let contMujerS= 0;
	let respuesta;
	let contpasajeros = 0;


	do
	{
		nombre = prompt("Ingrese el nombre del pasajero");
		estadoCivil=prompt("Ingrese el estado civil del pasajero");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error.Esta ingresando mal el estado civil");
		}
		edad = parseInt(prompt("Ingrese la edad del pasajero mayor a 17"));
		while(edad > 17 )
		{
			edad = parseInt(prompt("Error.Esta ingresando una edad fuera del rango"));
		}

		tempCorporal = parseInt(prompt("Ingrese la temperatura corporal del pasajero positivo"));
		while(tempCorporal >=0 )
		{
			tempCorporal = parseInt(prompt("Error.Esta ingresando una temperatura no valida"));

		}
		sexo = prompt("Ingrese el sexo de la persona");
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("Error. Esta ingresando un sexo equivocado");
		}

		//punto A
		if( estadoCivil == "viudo" && edad > 60 )
		{
			contViudo++;
		}

		//punto B
		if(edad > 17 && edad < 30 && estadoCivil == "soltero" )
		{
			contMujerS++;
		} 

		//punto C
		contpasajeros++;
		total = precio * contpasajeros;
		
		

		

	}while(respuesta == "s");

	//respuesta A 
	console.log("La cantidad de personas viudas son : " + contViudo );
	//respuesta B
	console.log("El nombre y la edad de la mujer mas soltera es : " + nombre + contMujerS);
	//respuesta de C 
	console.log("El viaje total sin descuento es: " + total);
}
