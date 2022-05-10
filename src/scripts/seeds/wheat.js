//Step 2: In each module define and export a function for creating a seed. Define the functions with the following syntax.

export const createWheat = (type, height, output) => {
    let wheat =
        {
            type: "Wheat", 
            height: 230, 
            output: 6
        }
//return an object with properties: type, height, output
    return wheat
    
}