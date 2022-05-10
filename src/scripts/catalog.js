//define and export a function named Catalog
export const Catalog = (harvestedFood) => {
//html string inside the function
    let htmlString = "";
    //iterate through array for plant.type
    for(const plant of harvestedFood) {
    htmlString += `<section class="plant">${plant.type}</section>`
    }
    return htmlString
}

