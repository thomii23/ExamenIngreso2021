function mostrar()
{
  let cursada;
  let cantMaterias;
  let sexo;
  let notaProm;
  let edad;
  let respuesta;
  let promMax;
  let nomProm;
  let nombre;
  let nomlibre;
  let edadMin;
  let totalmat;
  let matMax;
  let nombreMax;
  let edadMax;
  let acumpromMasculino = 0;
  let acumpromFemenino = 0;
  let acumpromNobinario = 0;
  let promMasculino;
  let promFemenino;
  let promNobinario;
  let alumMasculino;
  let alumFemenino;
  let alumNobinario;

  do
  {
    nombre = prompt("ingrese su nombre: ");
    cursada = prompt("ingrese tipo de cursada('libre', 'presencial', 'remota'): ");
    cantMaterias = prompt("ingrese cantidad de materias(mas de 0, menos de 8): ");
    sexo = prompt("ingrese sexo (femenino/masculino/no binario: ");

    while(sexo != "m" && sexo != "f" && sexo != "n")
    {
    sexo = prompt("Error. ingrese sexo (femenino/masculino/no binario: ");
    }

    notaProm = parseInt(prompt("ingrese la nota promedio entre 0 y 10: "));
    while(!(notaProm>=0 && notapProm<=10))
    {
    notaProm = parseInt(prompt("Error. Ingrese la nota promedio entre 0 y 10: "));
    }

    edad = parseInt(prompt("ingrese la edad:"));
    while( edad>= 0 && isNaN(edad))
    {
    edad = parseInt(prompt("error. Ingrese edad."))
    }
    
    if(sexo != "Masculino")
  
    
    if(prom>prommax)
    {
      promMax = prom;
      nomprom = nombre;
    }
      
    


    if(cursada == "libre")

    if(edad<edadMin)
    {
      edadMin = edad;
      nomlibre = nombre;
    }

  

    if(sexo == "m")
    {
    acumpromMasculino += notaprom;
    alumMasculino++;
    }
    
    else if(sexo == "f")
    {
    acumpromFemenino += notaprom;
    alumFemenino++;
    }
    
    else
    {
    acumpromNobinario += notaprom
    alumNobinario++;
    }

    promMasculino = acumpromMasculino / alumMasculino;
    promFemenino = acumpromFemenino / alumFemenino;
    promNobinario = acumpromNobinario / alumNobinario;

    if(cursada != "remota")
    
    totalmat + cantmaterias;
    if(totalmat>matMax)
    {
      matMax = totalmat;
      nombreMax = nombre;
      edadMax = edad;
    }
  
  
    respuesta = prompt("Desea seguir ingresando productos?  s/n");
    
  }
    while( respuesta == "s")
    
  
    
  
    console.log("El nombre del mejor promedio no m es:" + nomProm );
    console.log("El nombre del más joven de los alumnos que la dan libre es:" + nomlibre );
    console.log("El promedio de nota por sexo es: masculino:" + promMasculino + "femenino:" + promFemenino + "no binario:" + promNobinario );
    console.log("La edad y el nombre del que curse más materias de forma no remota es:" + nombreMax + "y tiene" + edadMax + "años.");
  


}
