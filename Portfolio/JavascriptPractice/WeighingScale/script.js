const weightInput =  document.getElementById("weightInput");
const  KilotoPounds = document.getElementById("KilotoPounds");
const  PoundstoKilograms = document.getElementById("PoundstoKilograms");
const result = document.getElementById("result");
let weight;

function convert(){
    if(KilotoPounds.checked){
        weight = Number(weightInput.value);
        weight = weight  * 2.2046;
        result.textContent = weight.toFixed(2) + "lbs";
    }
    else if(PoundstoKilograms.checked){
        weight = Number(weightInput.value);
        weight = weight  / 2.2046;
        result.textContent = weight.toFixed(2) + "kg";
    }
    else{
        result.textContent = "Select a Unit";
    }
}

