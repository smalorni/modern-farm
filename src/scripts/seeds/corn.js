//Step 2: In each module define and export a function for creating a seed. Define the functions with the following syntax. If the plant is Asparagus, the function should be named createAsparagus.

//Each of these functions should return an object with type, height, output

//Corn exception: return an array with two identical objects in it

export const createCorn = ( type, height, output) => {
    let corn = [
        {
            type: "Corn",
            height: 180,
            output: 6

        },
        {   type: "Corn",
            height: 180,
            output: 6
        }
]
//return an object with properties: type, height, output
    return corn
    
}