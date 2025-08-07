document.getElementById('showTip').onclick = function() {
    document.getElementById('tip').textContent = "Drink plenty of water every day!";
};
document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault(); // Prevents page refresh
  const input = document.getElementById('symptoms').value.toLowerCase();
  let advice = "";

  if (input.includes("headache") && input.includes("fever")) {
    advice = "You may have the flu. Rest, drink fluids, and see a doctor if you feel very sick.";
  } else if (input.includes("cough")) {
    advice = "It could be a cold or allergies. Drink warm fluids and rest. If cough continues, see a doctor.";
  } else if (input.includes("stomach ache")) {
    advice = "Try eating light foods and drink water. If pain continues, go to a doctor.";
  } else {
    advice = "Enter more symptoms or ask a doctor for better advice.";
  }

  document.getElementById('advice').innerText = advice;
};
