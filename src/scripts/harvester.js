//import { plantSeeds } from "./tractor.js"
//import { addPlant } from "./field.js"
 //Iterate the array of growing plants. On each plant, get the value of the output property.
    //exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
//define/export function named harvestPlants
export const harvestPlants = (plants) => {
    //new array 
  let plantsToSell = []
    for(const plant of plants) {
        if (plant.type === "Corn") {
            plant.output = plant.output / 2
        }
        for (let i = 0; i < plant.output; i++) {
            plantsToSell.push(plant);
            } 
        }
        return plantsToSell
    }
   


//return an array of seed objects