
 /*Iterate the array of growing plants. On each plant, get the value of the output property. The exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns*/

//define and export function named harvestPlants
export const harvestPlants = (plants) => {
    //create new empty array 
  let plantsToSell = []
    //for of loop to iterate through the array of plants
    for(const plant of plants) {
        if (plant.type === "Corn") {
            plant.output = plant.output / 2
        }
        //for loop to iterate through plant's output property and push into new array shown above
        for (let i = 0; i < plant.output; i++) {
            plantsToSell.push(plant);
            } 
        }
        //return all the plants that were pushed into the new array
        return plantsToSell
    }