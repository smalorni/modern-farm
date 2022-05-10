//Step 2: In each module define and export a function for creating a seed. Define the functions with the following syntax.

export const createSoybean = (type, height, output) => {
    let soybean =
        {
            type: "Soybean", 
            height: 20, 
            output: 4
        }
//return an object with properties: type, height, output
    return soybean
}


