const tarjetasHome = document.getElementById("cards")

let tarjetasCargadas = crearTarjetas(data.events);

function crearTarjetas(lista){
    let tarjetas = "";

    for (let evento of lista){
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
  }
    return tarjetas;
}

function details(id) {
  window.location.href = `./details.html?id=${id}`;
}

tarjetasHome.innerHTML = tarjetasCargadas;

// CHECKBOX

const checkBoxHome = document.getElementById("checkBox")

let datosEventos = data.events;

let checkBoxCargados = displayCheckBox();


function displayCheckBox() {

    let checkCategory = document.getElementById("checkBox")
    console.log(checkCategory)
    let allCategory = datosEventos.map(eventoCheck => eventoCheck.category)
    console.log(allCategory)
    let arrayCheckbox = new Set(allCategory) // crea un obejto en valor de la variable y le asigna propiedades sacando los valores repetidos

    let checkBox = [...arrayCheckbox] // crea los un array con los valores de arrayCheckbox


    let templateCheckBox = ""

    checkBox.forEach(category => { // recorre el array para retornar el valor impreso en el html

        templateCheckBox += `
 <label>
 <input type=checkbox value="${category}">
 ${category}</label>`

    })

    checkCategory.innerHTML = templateCheckBox

}
displayCheckBox()

let checkBoxes = document.querySelectorAll('input[type=checkbox]') // a partir de  la variable llama a todos los selectores de tipo input
checkBoxes.forEach(check => check.addEventListener("click", (event) => {
    let checkOk = event.target.checked;

    if (checkOk) { // toma el valor de la variable si esta chekeado devuelve un valor true
        selectedCheck.push(event.target.value)

        arraySearch() // Funcion que filtra al array.
    } else {
        selectedCheck = selectedCheck.filter(uncheck => uncheck !== event.target.value)

        arraySearch() // Funcion que filtra al array.
    }

   
}))

// var search = document.getElementById("label-search")

// search.addEventListener("keyup", (event) => {
//         wrintingSearch = event.target.value
//         arraySearch() // Llamador de la funcion

//     })
//     // Paso que combina los checkbox y input search con sus condiciones definidas
// function arraySearch() {

//     let searchData = []

//     if (selectedCheck.length > 0 && wrintingSearch !== "") {
//         selectedCheck.map(categorys => {
//             searchData.push(...datosEventos.filter(eventos => eventos.name.toLowerCase().includes(wrintingSearch.trim().toLowerCase()) &&
//                 eventos.category == categorys))

//         })

//     } else if (selectedCheck.length == 0 && wrintingSearch !== "") {
//         searchData.push(...datosEventos.filter(eventos => eventos.name.toLowerCase().includes(wrintingSearch.trim().toLowerCase())))
//     } else if (selectedCheck.length > 0 && wrintingSearch === "") {
//         selectedCheck.map(categorys => searchData.push(...datosEventos.filter(eventos => eventos.category == categorys)))
//     } else {
//         searchData.push(...datosEventos)

//     }


//     displayCardEvents(searchData)
// }
// arraySearch()



// function displayCardEvents(array) {

//     var templateCard = ""
//     if (array.length > 0) {

//         array.forEach(eventoHome => {
//             templateCard += `<div class=" card-index card card-body ">
//    <img src="${eventoHome.image}" class="card-img-top" alt="feriaComidas">

//   <h5 class="card-title">${eventoHome.name}</h5>
//   <p class="card-text">${eventoHome.description}</p>
//    <p class="card-text">Date: ${eventoHome.date}</p>
//    <p class="card-text">Category:  ${eventoHome.category}</p>
//    <div class="card-footer">
//          <a href="./details.html?id=${eventoHome._id}" class="btn btn-primary card-style">See more...</a>
//      <p class="card-text">$${eventoHome.price}</p>
     
//   </div>
// </div>`

//             document.getElementById('cards').innerHTML = templateCard

//         });

//     } else {
//         document.getElementById('cards').innerHTML = templateCard = `<p class="card-text">NOT FOUND RESULT!</p>`
//     }


// }
// return datosEventos
// }
// data = await getDataEvents()