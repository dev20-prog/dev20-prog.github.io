// Retrieving user inputs for the amount of fluid ingredient and the units for conversion
var amountFluid = document.getElementById('amountFluid');
var firstUnitFl = document.getElementById('firstUnitFl');
var secondUnitFl = document.getElementById('secondUnitFl');

// Function to round off the resulting conversion which is called inside all the conversion functions
function roundNum(num) {
    return Math.round(num * 1000)/1000;
}

// The various calculations for multiple conversions
function fluidConversion() {

    var firstUnitFl = document.getElementById('firstUnitFl');
    var first = firstUnitFl[firstUnitFl.selectedIndex].value;

    var secondUnitFl = document.getElementById('secondUnitFl');
    var second = secondUnitFl[secondUnitFl.selectedIndex].value;

    var amount = parseFloat(document.getElementById('amountFluid').value);
    var converted = document.getElementById('convertedFluid');

    var result;

// If the units for conversion are same, the amount is multiplied by 1, which results in the same output (No conversion)
    if (first == second) {
        result = amount * 1;
        converted.value = roundNum(result);
    }

// From liter to other unit conversions
    else if (first == "L" && second == "mL") {
        result = amount * 1000;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "gal") {
        result = amount * 0.264172;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "pt") {
        result = amount * 2.113376;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "qt") {
        result = amount * 1.05669;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "cups") {
        result = amount * 4.22675;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "tsp") {
        result = amount * 202.884;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "tbsp") {
        result = amount * 67.628;
        converted.value = roundNum(result);
    }
    else if (first == "L" && second == "fl oz") {
        result = amount * 33.814;
        converted.value = roundNum(result);
    }

// From milliliter to other unit conversions
    else if (first == "mL" && second == "L") {
        result = amount/1000;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "gal") {
        result = amount/3785;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "pt") {
        result = amount *  0.002113;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "qt") {
        result = amount/946;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "cups") {
        result = amount/237;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "tsp") {
        result = amount/4.929;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "tbsp") {
        result = amount/14.787;
        converted.value = roundNum(result);
    }
    else if (first == "mL" && second == "fl oz") {
        result = amount/29.574;
        converted.value = roundNum(result);
    }

// From gallons to other unit conversions
    else if (first == "gal" && second == "L") {
        result = amount * 3.785;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "mL") {
        result = amount * 3785;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "pt") {
        result = amount * 8;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "qt") {
        result = amount * 4;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "cups") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "tsp") {
        result = amount * 768;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "tbsp") {
        result = amount * 256;
        converted.value = roundNum(result);
    }
    else if (first == "gal" && second == "fl oz") {
        result = amount * 128;
        converted.value = roundNum(result);
    }

//From pints to other unit conversions
    else if (first == "pt" && second == "L") {
        result = amount * 0.473176;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "mL") {
        result = amount * 473.176473;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "gal") {
        result = amount/6.661;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "qt") {
        result = amount/2;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "cups") {
        result = amount * 2;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "tsp") {
        result = amount * 96;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "tbsp") {
        result = amount * 32;
        converted.value = roundNum(result);
    }
    else if (first == "pt" && second == "fl oz") {
        result = amount * 16;
        converted.value = roundNum(result);
    }

// From qt to other unit conversions
    else if (first == "qt" && second == "L") {
        result = amount/1.057;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "mL") {
        result = amount * 946;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "gal") {
        result = amount/4;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "pt") {
        result = amount/1.057;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "cups") {
        result = amount * 4;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "tsp") {
        result = amount * 192;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "tbsp") {
        result = amount * 64;
        converted.value = roundNum(result);
    }
    else if (first == "qt" && second == "fl oz") {
        result = amount * 32;
        converted.value = roundNum(result);
    }

// From cup to other unit conversions
    else if (first == "cups" && second == "L") {
        result = amount/4.227;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "mL") {
        result = amount * 237;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "gal") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "pt") {
        result = amount/2;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "qt") {
        result = amount/4;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (first == "cups" && second == "fl oz") {
        result = amount * 8;
        converted.value = roundNum(result);
    }

// From tsp tp other unit conversions
    else if (first == "tsp" && second == "L") {
        result = amount/203;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "mL") {
        result = amount * 4.929;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "gal") {
        result = amount/768;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "pt") {
        result = amount/96;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "qt") {
        result = amount/192;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "cups") {
        result = amount/48;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "tbsp") {
        result = amount/3;
        converted.value = roundNum(result);
    }
    else if (first == "tsp" && second == "fl oz") {
        result = amount/6;
        converted.value = roundNum(result);
    }

// From tbsp to other unit coversions
    else if (first == "tbsp" && second == "L") {
        result = amount/67.628;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "mL") {
        result = amount * 14.787;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "gal") {
        result = amount/256;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "pt") {
        result = amount/32;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "qt") {
        result = amount/64;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "cups") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }
    else if (first == "tbsp" && second == "fl oz") {
        result = amount/2;
        converted.value = roundNum(result);
    }
// From fl oz to other unit conversions
    else if (first == "fl oz" && second == "L") {
        result = amount/33.814;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "mL") {
        result = amount * 29.574;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "gal") {
        result = amount/128;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "pt") {
        result = amount/19.215;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "qt") {
        result = amount/32;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "cups") {
        result = amount/8;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "tsp") {
        result = amount/6;
        converted.value = roundNum(result);
    }
    else if (first == "fl oz" && second == "tbsp") {
        result = amount * 2;
        converted.value = roundNum(result);
    }
}

// Calling the above conversion function for any change in the inputs made by the user
amountFluid.addEventListener('input', fluidConversion);
firstUnitFl.addEventListener('change', fluidConversion);
secondUnitFl.addEventListener('change', fluidConversion);

// Retrieving user inputs for the amount of dry ingredient and the units for conversion
var amountDry = document.getElementById('amountDry');
var firstUnitDry = document.getElementById('firstUnitDry');
var secondUnitDry = document.getElementById('secondUnitDry');

// Mmultiple conversions for dry ingredients
function dryConversion() {

    var firstUnitDry = document.getElementById('firstUnitDry');
    var first = firstUnitDry[firstUnitDry.selectedIndex].value;

    var secondUnitDry = document.getElementById('secondUnitDry');
    var second = secondUnitDry[secondUnitDry.selectedIndex].value;

    var amount = parseFloat(document.getElementById('amountDry').value);
    var converted = document.getElementById('convertedDry');

    var result;

// If the units for conversion are same, the amount is multiplied by 1, which results in the same output (No conversion)
    if (first == second) {
        result = amount * 1;
        converted.value = roundNum(result);
    }

// From liter to other unit conversions
    else if (first == "lb" && second == "oz") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (first == "lb" && second == "mg") {
        result = amount * 453592;
        converted.value = roundNum(result);
    }
    else if (first == "lb" && second == "g") {
        result = amount * 454;
        converted.value = roundNum(result);
    }
    else if (first == "lb" && second == "kg") {
        result = amount/2.205;
        converted.value = roundNum(result);
    }

// From ounce to other unit conversions
    else if (first == "oz" && second == "lb") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (first == "oz" && second == "mg") {
        result = amount * 28350;
        converted.value = roundNum(result);
    }
    else if (first == "oz" && second == "g") {
        result = amount * 28.35;
        converted.value = roundNum(result);
    }
    else if (first == "oz" && second == "kg") {
        result = amount/35.274;
        converted.value = roundNum(result);
    }
    else if (first == "mg" && second == "lb") {
        result = amount/453592;
        converted.value = roundNum(result);
    }
    else if (first == "mg" && second == "oz") {
        result = amount/28350;
        converted.value = roundNum(result);
    }
    else if (first == "mg" && second == "g") {
        result = amount/1000;
        converted.value = roundNum(result);
    }
    else if (first == "mg" && second == "kg") {
        result = amount/1000000;
        converted.value = roundNum(result);
    }

// From g to other unit conversions
    else if (first == "g" && second == "lb") {
        result = amount/454;
        converted.value = roundNum(result);
    }
    else if (first == "g" && second == "oz") {
        result = amount/28.35;
        converted.value = roundNum(result);
    }
    else if (first == "g" && second == "mg") {
        result = amount * 1000;
        converted.value = roundNum(result);
    }
    else if (first == "g" && second == "kg") {
        result = amount/1000;
        converted.value = roundNum(result);
    }
// From kg to other unit conversions
    else if (first == "kg" && second == "lb") {
        result = amount * 2.205;
        converted.value = roundNum(result);
    }
    else if (first == "kg" && second == "oz") {
        result = amount * 35.274;
        converted.value = roundNum(result);
    }
    else if (first == "kg" && second == "mg") {
        result = amount * 1000000;
        converted.value = roundNum(result);
    }
    else if (first == "kg" && second == "g") {
        result = amount * 1000;
        converted.value = roundNum(result);
    }
}

//Calling the above function on any input changes made by the user
amountDry.addEventListener('input', dryConversion);
firstUnitDry.addEventListener('change', dryConversion);
secondUnitDry.addEventListener('change', dryConversion);

// Retrieving user inputs for the amount of commonly used dry ingredients and the units for conversion
var ingredient = document.getElementById('ingredient');
var amountCom = document.getElementById('amountCom');
var firstUnitCom = document.getElementById('firstUnitCom');
var secondUnitCom = document.getElementById('secondUnitCom');

//
function ingredientConversion() {

    var ingredientCom = document.getElementById('ingredient');
    var ingredient = ingredientCom[ingredientCom.selectedIndex].value;

    var firstUnitCom = document.getElementById('firstUnitCom');
    var first = firstUnitCom[firstUnitCom.selectedIndex].value;

    var secondUnitCom = document.getElementById('secondUnitCom');
    var second = secondUnitCom[secondUnitCom.selectedIndex].value;

    var amount = parseFloat(document.getElementById('amountCom').value);
    var converted = document.getElementById('convertedCom');

    var result;

    if (first == second) {
        result = amount * 1;
        converted.value = roundNum(result);
    }

// Granulated Sugar
    else if (ingredient == "Granulated Sugar" && first == "g" && second == "cups") {
        result = amount/200;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "cups" && second == "g") {
        result = amount * 200;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "g" && second == "tsp") {
        result = amount * 0.24;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "tsp" && second == "g") {
        result = amount * 4.17;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "g" && second == "tbsp") {
        result = amount * 0.08;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "tbsp" && second == "g") {
        result = amount * 12.5;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "tsp" && second == "cups") {
        result = amount * 0.021;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "tbsp" && second == "cups") {
        result = amount * 0.063;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "tsp" && second == "tbsp") {
        result = amount * 0.33;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Granulated Sugar" && first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }

// Powdered Sugar
    else if (ingredient == "Powdered Sugar" && first == "g" && second == "cups") {
        result = amount/120;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "g" && second == "tsp") {
        result = amount * 0.38;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "g" && second == "tbsp") {
        result = amount * 0.13;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "cups" && second == "g") {
        result = amount * 120;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "tsp" && second == "g") {
        result = amount * 2.60;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "tsp" && second == "cups") {
        result = amount * 0.021;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "tsp" && second == "tbsp") {
        result = amount * 0.33;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "tbsp" && second == "g") {
        result = amount * 7.81;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Powdered Sugar" && first == "tbsp" && second == "cups") {
        result = amount * 0.063;
        converted.value = roundNum(result);
    }

// Raw Sugar
    else if (ingredient == "Raw Sugar" && first == "g" && second == "cups") {
        result = amount/250;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "g" && second == "tsp") {
        result = amount * 0.19;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "g" && second == "tbsp") {
        result = amount * 0.064;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "cups" && second == "g") {
        result = amount * 250;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "tsp" && second == "g") {
        result = amount * 5.21;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "tsp" && second == "cups") {
        result = amount/48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "tsp" && second == "tbsp") {
        result = amount/3;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "tbsp" && second == "g") {
        result = amount * 15.63;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "tbsp" && second == "cups") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Raw Sugar" && first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }

// Salt
    else if (ingredient == "Salt" && first == "g" && second == "cups") {
        result = amount * 0.003661;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "g" && second == "tsp") {
        result = amount * 0.175747;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "g" && second == "tbsp") {
        result = amount * 0.058582;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "cups" && second == "g") {
        result = amount * 273.12;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "tsp" && second == "g") {
        result = amount * 5.69;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "tsp" && second == "cups") {
        result = amount/48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "tsp" && second == "tbsp") {
        result = amount/3;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "tbsp" && second == "g") {
        result = amount * 17.06;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "tbsp" && second == "cups") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Salt" && first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }

// All Purpose Flour
    else if (ingredient == "All Purpose Flour" && first == "g" && second == "cups") {
        result = amount/120;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "g" && second == "tsp") {
        result = amount * 0.38;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "g" && second == "tbsp") {
        result = amount * 0.128;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "cups" && second == "g") {
        result = amount * 120;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "tsp" && second == "g") {
        result = amount * 2.6;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "tsp" && second == "cups") {
        result = amount/48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "tsp" && second == "tbsp") {
        result = amount/3;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "tbsp" && second == "g") {
        result = amount * 7.81;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All  Purpose Flour" && first == "tbsp" && second == "cups") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "All Purpose Flour" && first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }

// Butter
    else if (ingredient == "Butter" && first == "g" && second == "cup") {
        result = amount/227;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "g" && second == "tsp") {
        result = amount * 0.211643;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "g" && second == "tbsp") {
        result = amount * 0.070548;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "cups" && second == "g") {
        result = amount * 227;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "cups" && second == "tsp") {
        result = amount * 48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "cups" && second == "tbsp") {
        result = amount * 16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "tsp" && second == "g") {
        result = amount * 4.7;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "tsp" && second == "cups") {
        result = amount/48;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "tsp" && second == "tbsp") {
        result = amount/3;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "tbsp" && second == "g") {
        result = amount * 14.1748;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "tbsp" && second == "cups") {
        result = amount/16;
        converted.value = roundNum(result);
    }
    else if (ingredient == "Butter" && first == "tbsp" && second == "tsp") {
        result = amount * 3;
        converted.value = roundNum(result);
    }
}

ingredient.addEventListener('change', ingredientConversion);
amountCom.addEventListener('input', ingredientConversion);
firstUnitCom.addEventListener('change', ingredientConversion);
secondUnitCom.addEventListener('change', ingredientConversion);
