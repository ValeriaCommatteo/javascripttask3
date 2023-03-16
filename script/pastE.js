const pastE = document.getElementById("pastE");

const DateBase = new Date(data.currentDate); 

let tarjetasCargadas = "";

let tarjetasPastE = data.events.filter((eventos) => new Date(eventos.date) < DateBase);

      tarjetasPastE.forEach((evento) => (tarjetasCargadas +=
        `<div class="card event__card border-0 text-center">
            <div class="col">
              <div class="card h-100" style="margin-left: 90px">
                <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: ${evento.name}</h5>
                    <p class="card-text">Description: ${evento.description}</p>
                </div>
               </div>
            </div>
        </div>  `) )

pastE.innerHTML = tarjetasCargadas;

//Categorias
function cargarCategorias(arrayCat){
  let categorias = "";
  for (let i=0;i<arrayCat.length;i++){
      categorias +=  crearCheckbox(arrayCat[i],i);
  }
  return categorias
}

function crearCheckbox(cat,i){
  return `
  <div class="form-check form-check-inline m-0">
      <input class="form-check-input valoresCheck" type="checkbox" name="categorias" id="categoria${i}" value="${cat}"   />
      <label class="form-check-label" for="categoria${i}">${cat}</label>
  </div>`
}
function filtrarCheckbox(events,checkbox){
  let eventfiltrados = [];
  if(checkbox.length > 0){
      checkbox.forEach((categoria)=>{
          events.forEach((event)=>{
              if(event.category==categoria){
                  eventfiltrados.push(event);
              }
          });        
      });
  }else{
      eventfiltrados = events;
  }
  return eventfiltrados;
}

function buscar(){
  let eventosEncontrados = [];
  let eventCheckbox = filtrarCheckbox(data.events,categoriaSelect);
  eventosEncontrados = eventCheckbox.filter((event)=>{
      return eventosFiltrados = (event.name.toLowerCase().includes(buscador.value.toLowerCase()));
  });
  return eventosEncontrados;
}

//quiero sacar los duplicados del array
function eliminarDuplicados (array){
  let unicos = []
  for(let i = 0 ; i< array.length; i++){
      if (!unicos.includes(array[i])){
          unicos.push(array[i])
      }
  }
  return unicos
}

let categoriaSelect = []

//tarjetas
//Aca se cargan las tarjetas de los eventos
const contTarjeta = document.querySelector("#containerCard");
let tarjetasGeneradas = generarTarjetas(data.events);
contTarjeta.innerHTML = tarjetasGeneradas;

//Checkbox
// Aca se cargan los checkbox de cada categoria
const categorias = document.getElementById('category')
//voy obtener un array de categorias
let categoriasFiltradas = eliminarDuplicados(data.events.map((cat)=> cat.category));
let catGeneradas = cargarCategorias(categoriasFiltradas);
categorias.innerHTML = catGeneradas;

//Implementaré un método de filtrado por checkbox
let checks = document.querySelectorAll('.valoresCheck');
//escucho los eventos de cada uno de los checkbox
checks.forEach((e)=>{
  e.addEventListener('change', ()=>{
      if (e.checked){//agrego elemento a la lista o lo saco
          categoriaSelect.push(e.value);
      }else{
          categoriaSelect.splice(categoriaSelect.indexOf(e.value),1);
      }
      let eventosEncontrados = buscar();
      contTarjeta.innerHTML = generarTarjetas(eventosEncontrados);
  });
});

//Buscador
let buscador = document.getElementById('search');
buscador.addEventListener('keyup',()=> { 
  let eventosEncontrados = buscar();
  contTarjeta.innerHTML = generarTarjetas(eventosEncontrados);
});