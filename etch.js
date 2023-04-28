const container = document.getElementById("container")
const bouton = document.querySelector("button")
//Première grille avec nombre * nombre case
let nombre = 16
//il faut maintenant essayer denlever les div à chaque clic.
// 960 width 500 height


// première création de la grille (par défaut)
for (let i = 0; i < nombre; i++) {
    let row = document.createElement("div")
    container.appendChild(row)
    for (let j = 0; j < nombre; j++) {
        let divs = document.createElement("div")
        divs.textContent = ""
        divs.style.height = 500 / nombre
        divs.style.width = 960 / nombre
        divs.classList.add("case")
        row.appendChild(divs)

    }

}






// const cases doit être après la boucle pour que cases puisse sélectionner les divs créés pr la grille.
//Ajoute la classe hovered pour changer de couleur


let cases = document.querySelectorAll("div")


cases.forEach(div => {
    div.addEventListener("mouseover", () =>
        div.classList.add("hovered")


    )
})


// Bouton appuyé => on enlève dabord la grille puis on en crée un autre 
bouton.addEventListener("click", () => {
    for (let i = 0; i < nombre; i++) {


        container.removeChild(container.lastChild)



    }
    console.log("1111")

    nombre = prompt("Nombre de cases?")
    cases = document.querySelectorAll("div")
    for (let i = 0; i < nombre; i++) {
        let row = document.createElement("div")
        container.appendChild(row)
        for (let j = 0; j < nombre; j++) {
            let divs = document.createElement("div")
            divs.textContent = ""
            divs.style.height = 500 / nombre
            divs.style.width = 960 / nombre
            divs.classList.add("case")
            row.appendChild(divs)

            cases = document.querySelectorAll("div")

        }

    }
    cases.forEach(div => {
        div.addEventListener("mouseover", () =>
            div.classList.add("hovered")






        )



    })


})



