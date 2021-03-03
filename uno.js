
function mostrar()
{
	// Declaramos variables.
	let tipo;
	let precio;
	let cantidad;
	let tipoInflamables;
	let marca;
	let promedioA;
	let promedioIac;
	let promedioQuat;
	let contA = 0; //contador de alcohol
	let contIac = 0; //contador de IAC
	let contQuat = 0; //contador de QUAT
	let acuA = 0; //acumulador de Alcohol
	let acuIac = 0; 
	let acuQuat = 0;
	let contIg = 0; //contador de ignifugo
	let contCom = 0; //contador de combustible
	let contExp = 0; //contador de explosivos
	let precioMin;
	let maxTipoInflamable;
	let maxTipo;
	let maxMarca;
	let precioMax;
	let flag = 1;
	let flagProduc = 1;

	// Empezamos con pedir los productos 5 veces

	for(let i=0; i<5; i++)
	{
		tipo = prompt("Ingrese el tipo del producto a seleccionar, Alcohol / IAC / QUAT");
		while(tipo != "alcohol" && tipo != "iac" && tipo != "quat")
		{
			tipo = prompt("Error.Estas ingresando mal el tipo de producto seleccionado, reingreselo");
		}

		precio = parseInt(prompt("Ingrese el precio del producto entre 100 y 300: "));
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("Error.No esta ingresando un precio acorde a lo pedido,reingreselo"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de unidades que no supere las 1000"));
		while(cantidad <=0 || cantidad > 1000 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("Error.Esta cantidad de unidades que desea llevar no es valida,reingreselo"));
		}

		tipoInflamables = prompt("Ingrese el tipo de inflamables respecto al producto Ignifugo / combustible / explosivo");
		while(tipoInflamables != "ignifugo" && tipoInflamables != "combustible" && tipoInflamables != "explosivo")
		{
			tipoInflamables = prompt("Error.Esta ingresando un tipo de inflamable incorrecto.Reingreselo");
		}

		marca = prompt("Ingrese la marca del producto");

		//aca termine de ingresar los datos del producto
		
		//Resuelvo el punto A
		if(acuA > acuIac && acuA > acuQuat )
		{
			promedioA = acuA / contA;
		}
		else if (acuIac > acuA && acuIac > acuQuat)
		{
			promedioIac = acuIac / contIac;
		}
		else
		{
			promedioQuat = acuQuat / contQuat;
		}

		//resuelvo el punto B
		if(contIg > contCom && contIg > contExp)
		{
			maxTipoInflamable = "ignifugo";
		}
		else if(contCom > contIg && contCom >contExp )
		{
			maxTipoInflamable = "combustible";
		}
		else
		{
			maxTipoInflamable = "explosivo";
		}

		//resuelvo el C

		if(tipo == "iac" && precio <= 200 )
		{
			if(flag || precio < precioMin)
			{
				precioMin = precio;
				flag = 0;
			}
			acuIac = acuIac + cantidad;
			acuIac++;
		}

		//Resuelvo el punto D

		if(tipo == "alcohol" )
		{
			if(flagProduc || precio > maxTipo)
			{
				precioMax = precio;
				maxMarca = marca;
				flagProduc = 0;
			}
			acuA = acuA + cantidad;
			acuA ++;

		}
		else if ( tipo == "iac")
		{
			acuIac = acuIac + cantidad;
			acuIac++;
		}
		else
		{
			acuQuat = acuQuat + cantidad;
			acuQuat++;
		}


		//respuesta de los puntos

		console.log("El promedio de la cantidad por tipo de producto es : "+ promedioQuat + promedioIac + promedioA);
		console.log("El tipo de inflamables con mas cantidad de unidad es : " + maxTipoInflamable);
		console.log("Las unidades de Iac con precio menos de 200 son : " + precioMin);
		console.log("El tipo mas caro de los productos es : " + maxTipo + "Y la marca mas cara es: " + maxMarca);








		
		


	}

	

}


