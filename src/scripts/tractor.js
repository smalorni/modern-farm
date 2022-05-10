import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { addPlant } from "./field.js"

//define/export a plantSeeds function
export const plantSeeds = (yearlyPlan) => { 
    /*contains 4 arrays representing rows in field to be plants
    //iterate both parent and child array
    let seedsArray = [
        ["Potato", "Soybean", "Soybean", "Corn"],
        ["Wheat", "Corn", "Wheat", "Asparagus"],
        ["Asparagus", "Wheat", "Soybean", "Corn"],
        ["Asparagus", "Soybean", "Potato", "Wheat"]
    ]*/
    //iterated thru parents, then iterated thru the children //(individual seed)
     //create plan function   
//newPlantsFieldArray function from field
for (const row of yearlyPlan) {
    for(const seed of row) { //each seed in 
        if ( seed === "Potato") {
            //Take that seed and add it to the array of plants in the field module - addPlant
            addPlant(createPotato());
        }
        else if (seed === "Corn") {
            //Take that seed and add it to the array of plants in the field module.
            addPlant(createCorn());
        }
        else if (seed === "Asparagus") {
            //Take that seed and add it to the array of plants in the field module.
             addPlant(createAsparagus());
            //newPlantsFieldArray.push(seedsArray)
        }
        else if (seed === "Soybean") {
            //Take that seed and add it to the array of plants in the field module.
             addPlant(createSoybean());
            //console.log(soybeanSeed)
        }
        else if (seed === "Sunflower") {
            //Take that seed and add it to the array of plants in the field module.
             addPlant(createSunflower());
        }
        else if (seed === "Wheat") {
            //Take that seed and add it to the array of plants in the field module.
             addPlant(createWheat());
            }
        }
    }
}