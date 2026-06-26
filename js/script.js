const gramsInput = document.getElementById("grams");
const filamentPriceInput = document.getElementById("filamentPrice");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    let grams = Number(gramsInput.value);
    let filamentPrice = Number(filamentPriceInput.value);

    if (grams <=0 || filamentPrice <=0) {
        result.textContent = "Please enter valid numbers."
        return;
    }

    let materialCost = grams / 1000 * filamentPrice;
    
    result.textContent = `Material cost: ${materialCost.toFixed(2)} kr`
})