//Step 2: In each module define and export a function for creating a seed. Define the functions with the following syntax.

export const createPotato = () => {
    let potato =
        {
            type: "Potato", 
            height: 32, 
            output: 2
        }
//return an object with properties: type, height, output
    return potato
    
}