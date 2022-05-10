//Step 2: In each module define and export a function for creating a seed. Define the functions with the following syntax.

export const createSunflower = (type, height, output) => {
    let sunflower =
        {
            type: "Sunflower",
            height:380, 
            output: 3
        }
    
//return an object with properties: type, height, output
    return sunflower
}