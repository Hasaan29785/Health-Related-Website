document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  let advice = "";

  // Helper: check if all required symptoms exist
  function hasAll(symptomsNeeded) {
    return symptomsNeeded.every(symptom => symptomsArray.includes(symptom));
  }

  // Helper: check if any required symptoms exist
  function hasAny(symptomsNeeded) {
    return symptomsNeeded.some(symptom => symptomsArray.includes(symptom));
  }

  if (hasAll(["fever", "headache"])) {
    advice = "You may have the flu. Rest, drink fluids, and see a doctor if symptoms are severe.";
  } else if (hasAny(["cough", "sore throat", "runny nose"])) {
    advice = "You may have a common cold. Rest, drink fluids, and consider over-the-counter remedies.";
  }
  // ...add more conditions similarly...

  else {
    advice = "Your symptoms do not match a common disease in our list. Please enter more symptoms or consult a doctor for accurate advice.";
  }

  document.getElementById('advice').innerText = advice;
};
