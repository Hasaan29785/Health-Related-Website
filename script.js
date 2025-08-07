document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  let advice = "";

  // Remove spaces and split by comma
  const symptomsArray = input.split(',').map(s => s.trim());

  // Disease matching logic
  if (symptomsArray.includes("cough") && symptomsArray.includes("sore throat") && symptomsArray.includes("runny nose")) {
    advice = "You may have a common cold. Rest, drink fluids, and consider over-the-counter remedies.";
  } else if (symptomsArray.includes("fever") && symptomsArray.includes("headache") && symptomsArray.includes("body aches") && symptomsArray.includes("fatigue")) {
    advice = "You may have the flu. Rest, drink fluids, and see a doctor if symptoms are severe.";
  } else if (symptomsArray.includes("headache") && (symptomsArray.includes("light sensitivity") || symptomsArray.includes("sound sensitivity"))) {
    advice = "You may be experiencing a migraine. Find a quiet, dark place and take pain relievers if needed.";
  } else if (symptomsArray.includes("nausea") && (symptomsArray.includes("vomiting") || symptomsArray.includes("diarrhea") || symptomsArray.includes("stomach ache"))) {
    advice = "You may have food poisoning. Rest, stay hydrated, and see a doctor if symptoms are severe.";
  } else if (symptomsArray.includes("sneezing") && symptomsArray.includes("runny nose") && symptomsArray.includes("itchy eyes")) {
    advice = "These are common allergy symptoms. Avoid allergens and consider antihistamines.";
  } else if (symptomsArray.includes("fever") && symptomsArray.includes("cough") && (symptomsArray.includes("loss of taste") || symptomsArray.includes("loss of smell") || symptomsArray.includes("shortness of breath"))) {
    advice = "You may have COVID-19. Isolate and contact a healthcare professional for testing.";
  } else if (symptomsArray.includes("stomach pain") && (symptomsArray.includes("nausea") || symptomsArray.includes("heartburn"))) {
    advice = "You may have a stomach ulcer. Avoid spicy foods and consult a doctor for proper diagnosis.";
  } else if (symptomsArray.includes("frequent urination") && symptomsArray.includes("thirst") && symptomsArray.includes("fatigue")) {
    advice = "These symptoms may indicate diabetes. Please consult a healthcare professional.";
  } else if (symptomsArray.includes("headache") && (symptomsArray.includes("nosebleed") || symptomsArray.includes("dizziness"))) {
    advice = "These could be signs of hypertension (high blood pressure). Check your blood pressure and consult a doctor.";
  } else if (symptomsArray.includes("wheezing") && symptomsArray.includes("shortness of breath") && symptomsArray.includes("cough")) {
    advice = "You may have asthma. Use your inhaler and consult a healthcare provider if symptoms worsen.";
  } else if (symptomsArray.includes("chest pain") && (symptomsArray.includes("shortness of breath") || symptomsArray.includes("sweating") || symptomsArray.includes("nausea"))) {
    advice = "Chest pain with these symptoms may be serious. Seek emergency medical help immediately.";
  } else if (symptomsArray.includes("rash") && symptomsArray.includes("itching")) {
    advice = "You may have a skin allergy or infection. Avoid scratching and consult a doctor if rash spreads.";
  } else if (symptomsArray.includes("joint pain") && symptomsArray.includes("swelling") && symptomsArray.includes("stiffness")) {
    advice = "These symptoms may indicate arthritis. Consult a healthcare provider for proper diagnosis.";
  } else if (symptomsArray.includes("fatigue") && symptomsArray.includes("weakness") && symptomsArray.includes("pale skin")) {
    advice = "These symptoms could be anemia. Please consult a doctor for blood tests.";
  } else if (symptomsArray.includes("back pain") && (symptomsArray.includes("numbness") || symptomsArray.includes("tingling") || symptomsArray.includes("leg pain"))) {
    advice = "You may have a nerve or spine issue. Please consult a doctor if pain is severe.";
  } else if (symptomsArray.includes("fever") && symptomsArray.includes("vomiting") && symptomsArray.includes("neck pain")) {
    advice = "These could be signs of meningitis. Seek emergency medical help immediately.";
  } else if (symptomsArray.includes("weight loss") && symptomsArray.includes("excessive thirst") && symptomsArray.includes("frequent urination")) {
    advice = "These symptoms may indicate diabetes. Please consult a healthcare professional.";
  } else if (symptomsArray.includes("blurred vision") && symptomsArray.includes("headache")) {
    advice = "These symptoms may be due to migraine, hypertension, or eye problems. Please consult a doctor.";
  } else {
    advice = "Your symptoms do not match a common disease in our list. Please enter more symptoms or consult a doctor for accurate advice.";
  }

  document.getElementById('advice').innerText = advice;
};
