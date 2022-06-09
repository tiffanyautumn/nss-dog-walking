import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js" 
import { getCities } from "./database.js"

const walkers = getWalkers()
const theWalkersCities = getWalkerCities()
const cities = getCities()




document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const availableCities = citiesOfWalker(walker)
                    const cityNames = createWalkersCitiesString(assignments)
                    window.alert(`${walker.name} services ${cityNames}`)
                }
            }
        }
    }
)

//define a fn that will get all objects in the walkerCities Array that are for the
//walker that was clicked on 
//returns an array of matching obj
//will take in the walker name as parameter

const assignments = []
const citiesOfWalker = (walker) => {
    //empty array
    
    //need to iterate walkerscities for matching walkerid
    for (const city of theWalkersCities) {
        if ( walker.id === city.walkerId) {
            assignments.push(city) //adds city object to array
        }
    } return assignments
}

//define a fn that will take in the thisWalkersCities Array and use the cityId to find
//the matching city names and return a string with all the cities names

const createWalkersCitiesString = (assignments) => {
    let walkersCitiesString = "" //empty let for string
    for (const assignment of assignments) { //blocker did not originally iterate the assignment
        for (const city of cities) {
         if (city.id === assignment.cityId) {
            walkersCitiesString += `
            ${city.name}`
        }
    } 
 }return walkersCitiesString
}

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

