
// 1 obtener los datos del formulario.
// 2 conectarnos a la ruta de la API
// 3 mostrar los mensajes correspondientes

class EspecieAPI{
    
    //método guardarEspecie()
    async guardarEspecie(){
        //paso1
        const fNombre= document.getElementById("nombre").value;
        const fClasificacion=document.getElementById("clasificacion").value;
        const fEsperanza_vida=document.getElementById("esperanza_vida").value;
        const fPeso_promedio=document.getElementById("peso_promedio").value;
        
        //paso2
        const datos={
           nombre:fNombre,
           clasificacion:fClasificacion,
           esperanza_vida:fEsperanza_vida,
           peso_promedio:fPeso_promedio,
        };

      //TO DO:Falta gestionar errores

        await fetch(
            "http://localhost:3000/crear_especie",
            {
                method:"POST"
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );

         console.log("El registro se insertó correctamente");
    }


    async listarEspecies(){

        //paso1 
        //La API no debería estar sin protección
        let especies= await fetch("http://localhost:3000/listar_especies");
        especies=await especies.json();

        const miTabla=document.getElementById("tabla_especies");

        //paso2
        especies.forEach(
            (especie)=>{
                //paso 2.1
                const fila=miTabla.insertRow();
                fila.insertCell().innerText=especie.id_especie;
                fila.insertCell().innerText=especie.nombre;
                fila.insertCell().innerText=especie.clasificacion;
                fila.insertCell().innerText=especie.esperanza_vida;
                fila.insertCell().innerText=especie.peso_promedio;
            }
        );
    }
}

//Convertir esta clase en un módulo
export default EspecieAPI;