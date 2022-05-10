/*Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export array*/
let growingPlants = [];


//function will add seed to field
export const addPlant = (seed) => {
//method checks if object is an array
    let checkArray = Array.isArray(seed)
    if(checkArray === true) {
        //pull the first obj out of array and push into empty array
        growingPlants.push(seed[0]); 
        growingPlants.push(seed[1]); 
    } else { growingPlants.push(seed)
        //push obj into empty array
}
    //return the plants that were added to growingPlants array
    return growingPlants
}

//define/export function usePlants that returns a copy of array of plants
//Replaces growingPlants array and creates a new array that added new plants
export const usePlants = () => {
    let newPlantsFieldArray = [...growingPlants] //use spread operator
    return newPlantsFieldArray
}