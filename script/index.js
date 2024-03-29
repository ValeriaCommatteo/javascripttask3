const tarjetasHome = document.getElementById("cards")

// let tarjetasCargadas = crearTarjetas(data.events);

function crearTarjetas(lista){
    let tarjetas = "";

    lista.forEach(evento => {
      tarjetas +=`
      <div class="card event__card border-0 text-center">
        <div class="col">
            <div class="card h-100" style="margin-left: 90px">
                <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: ${evento.name}</h5>
                    <p class="card-text">Description: ${evento.description}</p>
                    <p class="card-text">Date: ${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <input type="button"  onclick="details('${evento._id}')" value="Ver más" class="btn mt-auto">      
                </div>
            </div>
        </div>
    </div> `
    });

    // return tarjetas;
    tarjetasHome.innerHTML = tarjetas;
}

// crearTarjetas(data.events)

function details(id) {
  window.location.href = `./details.html?id=${id}`;
}