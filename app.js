function canVote() {
  const ageEl = document.getElementById("age");

  const age = parseInt(ageEl.value, 10);

  if (age >= 18) {
    console.log("You can vote!");
  } else {
    console.log("You cannot vote yet.");
  }
}
