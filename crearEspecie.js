

import EspecieAPI from "./EspecieApi.js";

const miEspecie=new EspecieAPI();

const miBoton=document.getElementById("btnProcesar");

//miEspecie.guardarEspecie();

miBoton.addEventListener('click',
async (event)=>{
  
  event.preventDefault();
  miBoton.disabled=true;
  await miEspecie.guardarEspecie();
}
);

