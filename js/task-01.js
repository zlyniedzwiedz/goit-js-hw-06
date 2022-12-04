const cat = document.querySelectorAll(".item");
const numberOfCategories = cat.length
console.log(cat)
console.log(`Number of categories: ${numberOfCategories}`)

cat.forEach((cat) => {
    const catname = cat.querySelector("h2").innerHTML
    console.log(`Category: ${catname}`)
    const listElements = cat.querySelectorAll("li").length
    console.log(`Elements: ${listElements}`)
})

