import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { addPlant } from "./field.js"

//define and export a plantSeeds function
//parameter is year's planting plan
export const plantSeeds = (yearlyPlan) => { 
    /*Example Array - contains 4 arrays representing rows in field and iterate both parent and child arrays
    
    let seedsArray = [ (Parent array)
        ["Potato", "Soybean", "Soybean", "Corn"],   (Child Array for individual seed)
        ["Wheat", "Corn", "Wheat", "Asparagus"],    (Child Array)
        ["Asparagus", "Wheat", "Soybean", "Corn"],  (Child Array)
        ["Asparagus", "Soybean", "Potato", "Wheat"] (Child Array)
    ]*/

//For of loop to iterate through each row
for (const row of yearlyPlan) {
    //for of loop to iterate through each individual seed in each row
    for(const seed of row) { 
        if ( seed === "Potato") {
            //Take that seed and add it to array of plants in field module and invoke each seed function
            addPlant(createPotato());
        }
        else if (seed === "Corn") {
            //Take that seed and add it to the array of plants in the field module and invoke each seed function
            addPlant(createCorn());
        }
        else if (seed === "Asparagus") {
            //Take that seed and add it to the array of plants in the field module and invoke each seed function
             addPlant(createAsparagus());
        }
        else if (seed === "Soybean") {
            //Take that seed and add it to the array of plants in the field module and invoke each seed function
             addPlant(createSoybean());
        }
        else if (seed === "Sunflower") {
            //Take that seed and add it to the array of plants in the field module and invoke each seed function
             addPlant(createSunflower());
        }
        else if (seed === "Wheat") {
            //Take that seed and add it to the array of plants in the field module and invoke each seed function
             addPlant(createWheat());
            }
        }
    }
}