const Textarea = document.querySelector("#text");
const Title = document.querySelector("#titre");
const btnAjouter = document.querySelector("#Ajouter");
const form = document.querySelector("#form");

function addTask() {

    const titleValue = Title.value;
    const textValue = Textarea.value;

    
    if (titleValue === "" || textValue === "") {
        alert("Écris un titre !");
        return;
    }
    const task = document.createElement("section");

    task.style.width = "90%";
    task.style.height = "auto";
    task.style.display = "flex";
    task.style.flexDirection = "column";
    task.style.alignItems = "start";
    task.style.background = "rgb(53, 53, 53)";
    task.style.marginBottom = "1rem";
    task.style.marginTop = "2rem";
    task.style.borderLeft = "5px solid rgb(0, 119, 255)";
    task.style.gap = "20px";
    task.style.fontFamily = "sans-serif";
    task.style.color = "white";
    task.style.padding = "10px 20px";



    // Titre & Description
    const Titre = document.createElement("h4");
    Titre.textContent = "Titre : " + titleValue;

    const description = document.createElement("p");
    description.style.fontSize="14px"
    description.textContent ="Description : " +  textValue;

    //const button supprimer
    const supprimer=document.createElement("button")

    supprimer.style.width="120px"
    supprimer.textContent="Supprimer"
    supprimer.style.background="red"
    supprimer.style.height="30px"
    supprimer.style.color="white"
    supprimer.style.border="none"
    

    supprimer.addEventListener("click", ()=>{
        task.remove();
    })

    //Button modifier

    const modifier = document.createElement("button")

    modifier.style.width="120px"
    modifier.textContent="Modifier"
    modifier.style.background="green"
    modifier.style.height="30px"
    modifier.style.color="white"
    modifier.style.border="none"

    modifier.addEventListener("click",(event)=>{
        event.preventDefault();
       const NewTitre=prompt("Modifier votre titre")
       const Newdescription=prompt("Modifier votre description")
       NewTitre.innerText=titleValue
       Titre.textContent = "Titre : " + NewTitre;
       task.style.display="flex"

        Newdescription.innerText=textValue
        description.textContent ="Description : " +  Newdescription;
        task.style.display="flex"

    })


    
    task.appendChild(Titre);
    task.appendChild(description);
    task.appendChild(supprimer)
    task.appendChild(modifier)
    form.appendChild(task);


    // reset champs
    Title.value = "";
    Textarea.value = "";
}

btnAjouter.addEventListener("click", addTask);




