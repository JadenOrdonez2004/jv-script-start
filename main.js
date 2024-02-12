const header = document.querySelector("#header")
const image = document.querySelector("#image")

document.querySelector("#chanterelle-button").addEventListener("click", function() {
    alert("you clicked a button")
    header.innerHTML = "Chanterelle"
    image.src = "chanterelle.jpg"
    document.querySelector("#credit").innerHTML = "Neil Leclerc"
})

document.querySelector("#oyster-button").addEventListener("click", function() {
    alert("you clicked a button")
    header.innerHTML = "Oyster"
    document.querySelector("#image").src = "oyster.jpg"
    document.querySelector("#credit").innerHTML = "Neil Leclerc"
})

document.querySelector("#fly-agaric-button").addEventListener("click", function() {
    alert("you clicked a button")
    header.innerHTML = "Fly-agaric"
    document.querySelector("#image").src = "fly-agaric.jpg"
    document.querySelector("#credit").innerHTML = "Neil Leclerc"
})