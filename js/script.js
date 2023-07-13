let navbar = document.querySelector("nav ul")
let planets = document.querySelectorAll("nav ul li")
let planetsInfo = document.querySelectorAll(".planet")
let planetsInfoType = document.querySelectorAll(".planet .info-type button")
let planetsInfoText = document.querySelectorAll("p.text")
let planetsInfoImg = document.querySelectorAll(".planet-img div")

navbar.addEventListener("mouseover", (event) => {
    planets.forEach((planet) => {
        if(event.target == planet){
            document.documentElement.style.setProperty('--hover-color', `var(--color-${planet.innerText.toLowerCase()})`);
        }
    })
})

navbar.addEventListener("click", (event) => {
    planets.forEach((planet, index) => {
        if(event.target == planet){
            showTab(planetsInfo, index)
        }
    })
})

planetsInfoType.forEach((type, index) => {
    type.addEventListener("click", () => {
        showTab(planetsInfoType, index)
        showTab(planetsInfoText, index)
        showTab(planetsInfoImg, index)
    })
})

function hideTab(tab){
    tab.forEach((info) => {
        info.classList.remove("active")
    })
}
function showTab(tab, index){
    hideTab(tab)
    tab[index].classList.add("active")
    if(tab == planetsInfo){
        showTab(planetsInfoType, index * 3)
        showTab(planetsInfoText, index * 3)
        showTab(planetsInfoImg, index * 3)
        document.documentElement.style.setProperty('--active-color', `var(--color-${tab[index].classList[0]})`);
    }
}