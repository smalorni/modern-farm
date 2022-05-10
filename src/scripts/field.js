
let growingPlants = [];

//define/export a function named addPlant
//parameter: seedobj
//function will add seed to field
export const addPlant = (seed) => {

    let checkArray = Array.isArray(seed)
    if(checkArray === true) {
        growingPlants.push(seed[0]); 
        growingPlants.push(seed[1]); //pull the first obj out of array and push it to empty array
    } else { growingPlants.push(seed)
        //push obj into empty array
}
    return growingPlants
}

//addPlant("Corn")

//define/export function usePlants that returns a copy of array of plants
//Replaces plantsField and creates a new array that added new plants
export const usePlants = () => {
    let newPlantsFieldArray = [...growingPlants] //use spread operator
    return newPlantsFieldArray
}

//Testing Logic:

/*addPlant("Wheat");
const ResultOfUsePlants = usePlants();
console.log(ResultOfUsePlants);*/


/****Note: when planting corn, an array of objects will be provided instead of single object like other seeds. Investigate Array.isArray method*********/

/* Method determines whether the passed value is an array, returns true if is array, returns false if not */