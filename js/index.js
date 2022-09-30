const contenedor = document.getElementById("contenedor");
const button_add = document.getElementById("add_button");
var name_pokemon = "null";
var desc = "null";
var image = "null";

button_add.addEventListener("click",function(){
    console.log("Funciona")

    name_pokemon = document.getElementById("floating_name").value;
    desc = document.getElementById("floating_desc").value;
    image = document.getElementById("floating_url").value;

    contenedor.innerHTML+=`
    <div class="col">
        <div class="card h-100">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name_pokemon}</h5>
                <p class="card-text">${desc}</p>
            </div>
        </div>
    </div>
    `

    document.getElementById("floating_name").value = "";
    document.getElementById("floating_desc").value = "";
    document.getElementById("floating_url").value = "";

});