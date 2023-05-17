
//1.conectarnos a la ruta /listar_especies
//2. Recorrer el json
//2.1 agregar una fila en la tabla por cada objeto retornado en el JSON

import EspecieAPI from "./EspecieApi.js";

const miEspecie=new EspecieAPI();

miEspecie.listarEspecies();



