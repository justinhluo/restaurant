import asada from "./images/asada.png";
import carnitas from "./images/carnitas.png";
import pastor from "./images/pastor.png";
import asada2 from "./images/asada2.png";
import carnitas2 from "./images/carnitas2.png";
import pastor2 from "./images/pastor2.png";
import asada3 from "./images/asada3.png";
// import carnitas3 from "./images/carnitas3.png";
import pastor3 from "./images/pastor3.png";
function createItem(image, label) {
    const item = document.createElement("div");
    const img = document.createElement("img");
    img.src = image;
    const caption = document.createElement("div");
    caption.textContent = label;
    caption.classList.add("caption");
    item.appendChild(img);
    item.appendChild(caption);
    return item;
}

function renderMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("div");
    title.textContent = "Menu";
    content.appendChild(title);

    const tacos = document.createElement("div");
    tacos.textContent = "Tacos";
    tacos.classList.add("sub-heading");
    content.appendChild(tacos);

    const tacoPics = document.createElement("div");
    tacoPics.classList.add("image-container");
    tacoPics.appendChild(createItem(asada, "Asada taco: $3.50"));
    tacoPics.appendChild(createItem(carnitas, "Carnitas taco: $3.50"));
    tacoPics.appendChild(createItem(pastor, "Pastor taco: $3.50"));
    
    content.append(tacoPics);

    const burritos = document.createElement("div");
    burritos.textContent = "Burritos";
    burritos.classList.add("sub-heading");
    content.appendChild(burritos);

    const burritoPics = document.createElement("div");
    burritoPics.classList.add("image-container");
    burritoPics.appendChild(createItem(asada2, "Asada burrito: $13.50"));
    burritoPics.appendChild(createItem(carnitas2, "Carnitas burrito: $13.50"));
    burritoPics.appendChild(createItem(pastor2, "Pastor burrito: $13.50"));
    content.append(burritoPics);
    
    const quesadillas = document.createElement("div");
    quesadillas.textContent = "Quesadillas";
    quesadillas.classList.add("sub-heading");
    content.appendChild(quesadillas);
    const quesadillaPics = document.createElement("div");
    quesadillaPics.classList.add("image-container");
    quesadillaPics.appendChild(createItem(asada3, "Asada quesadilla: $10.50"));
    // quesadillaPics.appendChild(createItem(carnitas3, "Carnitas quesadilla: $10.50"));
    quesadillaPics.appendChild(createItem(pastor3, "Pastor quesadilla: $10.50"));
    content.append(quesadillaPics);

}





export {renderMenuPage};