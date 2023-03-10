function getData(){
    var idCard = 1
    data.events.map(evento => evento.id = idCard++)

    var id = location.search.split("?id=").filter(Number)

    var selectID = Number(id[0])
    console.log(selectID)

    var evento = data.events.find((evento) => {
        return evento.id == selectID
    })

var templateHTML = `
<div class="card event__card border-0 text-center">
    <div class="col">
        <div class="card" style="margin-left: 90px">
            <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
            <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <p class="card-text">${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <p class="card-text">${evento.category}</p>
                    <p class="card-text">${evento.capacity}</p>
                    <p class="card-text">${evento.assistance}</p>
            </div>
            <div class="d-flex flex-row justify-content-end">
                    <a href="./index.html" class="btn btn-primary">Home</a>
            </div>               
        </div>
    </div>
</div>`


document.getElementById('tarjetasDetail').innerHTML= templateHTML
}
getData ()