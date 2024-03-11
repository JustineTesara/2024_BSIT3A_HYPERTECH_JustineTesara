
function convert() {
    // Get weights input value
    let weightInput = parseFloat(document.getElementById('weightInput').value);

    // Check if the input is a valid number
    if (isNaN(weightInput)) {
        alert("Please enter a valid number for Weights.");
        return;
    }

    // Convert KG to other weights
    let KGpounds = weightInput *  2.2046;
    let KGounce = weightInput * 35.274;
    // Convert LBS to other weights
    let poundsKG = weightInput / 2.2046;
    let poundsOz = weightInput / 16;
    // Convert OZ to other weights
    let OZkilo = weightInput / 35.274;
    let OZpounds = weightInput * 0.0625;



    // Display the result of KG to other weights
    document.getElementById('KGpounds').innerHTML = `${weightInput} kilogram/s to ${KGpounds.toFixed(2)} Pounds.`;
    document.getElementById('KGounce').innerHTML = `${weightInput} kilogram/s to ${KGounce.toFixed(2)} Ounces.`;

    // Display the result of LBS to other weights
    document.getElementById('poundsKG').innerHTML = `${weightInput} pound/s to ${poundsKG.toFixed(2)} Kilograms.`;
    document.getElementById('poundsOz').innerHTML = `${weightInput} pound/s to ${poundsOz.toFixed(2)} Ounces.`;
    // Display the result of OZ to other weights
    document.getElementById('OZkilo').innerHTML = `${weightInput} ounce/s to ${OZkilo.toFixed(2)} Kilograms.`;
    document.getElementById('OZpounds').innerHTML = `${weightInput} ounce/s to ${OZpounds.toFixed(2)} Pounds.`;

}