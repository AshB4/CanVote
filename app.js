function canVote() {
  const ageEl = document.getElementById("age");

  const age = parseInt(ageEl.value, 10);

  if (age >= 18) {
    console.log("You can vote!");
  } else {
    console.log("You cannot vote yet.");
  }
}

function areaRectangle() {
  const lengthEl = document.getElementById("length");
  const widthEl = document.getElementById("width");
  const area = parseFloat(lengthEl.value) * parseFloat(widthEl.value);
    console.log("Area of the rectangle is: " + area);
  document.getElementById("result").textContent = "The area is " + area;
}   

function isCold() {
    const tempEl = document.getElementById("temperature");
    const temperature = parseFloat(tempEl.value);
    if (temperature < 10) {
        console.log("It is cold. Wear warm clothes.");
        result.textContent = "It is cold. Wear warm clothes.";
    }else if (temperature >= 10 && temperature <= 25) {
        console.log("It is moderate. Wear regular clothes.");
        result.textContent = "It is moderate. Wear regular clothes.";
    } else if (temperature > 25) {
        console.log("It is warm. Wear light clothes.");
        result.textContent = "It is warm. Wear light clothes.";
    }
}

function kmToMiles() {
    const kmEl = document.getElementById("kilometers");
    const km = parseFloat(kmEl.value);  

    const miles = km / 1.60934;
    console.log(km + " kilometers is equal to " + miles.toFixed(2) + " miles.");
    document.getElementById("result").textContent = km + " km is equal to " + miles.toFixed(2) + " miles.";
}
