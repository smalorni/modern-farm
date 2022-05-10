//Step 2: In each module define and export a function for creating a seed. Define the functions with the following syntax. If the plant is Asparagus, the function should be named createAsparagus.


export const createAsparagus = () => {
    let asparagus = {
        type: "Asparagus", 
        height: 24, 
        output: 4,
    }
    return asparagus
}

    
//Should return an object with type, height, output
    //return asparagusObj
