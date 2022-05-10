//console.log("Welcome to the main module")

//import function createPlan() 
import { createPlan } from "./plan.js";
//import { plantSeeds} from "./tractor.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js"
//import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";
import  { plantSeeds } from "./tractor.js"
import { harvestPlants} from "./harvester.js";

//Step 1: In the plan.js module, there is a createPlan() function that is exported. In the main.js module, import that function and invoke it. Since that function returns a value, you need to store that value in a variable named yearlyPlan and store returned values in a new variable named yearlyPlan
let yearlyPlan = createPlan();
//console log for output
console.log(yearlyPlan);

const plantedSeeds = plantSeeds(yearlyPlan)

console.log(usePlants())

const plantedHarvest = harvestPlants(usePlants())
console.log(plantedHarvest)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(plantedHarvest);





//Test logic for Seeds Producing Module:
/*import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
console.log(asparagusSeed);

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
console.log(cornSeed);

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
console.log(wheatSeed)*/


