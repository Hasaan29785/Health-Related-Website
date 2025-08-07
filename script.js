document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  let advice = "";

  // Helper function: does user have ALL of these symptoms?
  function hasAll(symptomsNeeded) {
    return symptomsNeeded.every(symptom => symptomsArray.includes(symptom));
  }
  // Helper function: does user have ANY of these symptoms?
  function hasAny(symptomsNeeded) {
    return symptomsNeeded.some(symptom => symptomsArray.includes(symptom));
  }

  if (hasAny(["cough", "sore throat", "runny nose"])) {
    advice = "You may have a common cold. Rest, drink fluids, and consider over-the-counter remedies.";
  } else if (hasAny(["fever", "headache", "body aches", "fatigue"])) {
    advice = "You may have the flu. Rest, drink fluids, and see a doctor if symptoms are severe.";
  } else if (hasAny(["headache", "light sensitivity", "sound sensitivity"])) {
    advice = "You may be experiencing a migraine. Find a quiet, dark place and take pain relievers if needed.";
  } else if (hasAny(["nausea", "vomiting", "diarrhea", "stomach ache"])) {
    advice = "You may have food poisoning. Rest, stay hydrated, and see a doctor if symptoms are severe.";
  } else if (hasAny(["sneezing", "runny nose", "itchy eyes"])) {
    advice = "These are common allergy symptoms. Avoid allergens and consider antihistamines.";
  } else if (hasAny(["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"])) {
    advice = "You may have COVID-19. Isolate and contact a healthcare professional for testing.";
  } else if (hasAny(["stomach pain", "nausea", "heartburn"])) {
    advice = "You may have a stomach ulcer. Avoid spicy foods and consult a doctor for proper diagnosis.";
  } else if (hasAny(["frequent urination", "thirst", "fatigue"])) {
    advice = "These symptoms may indicate diabetes. Please consult a healthcare professional.";
  } else if (hasAny(["headache", "nosebleed", "dizziness"])) {
    advice = "These could be signs of hypertension (high blood pressure). Check your blood pressure and consult a doctor.";
  } else if (hasAny(["wheezing", "shortness of breath", "cough"])) {
    advice = "You may have asthma. Use your inhaler and consult a healthcare provider if symptoms worsen.";
  } else if (hasAny(["chest pain", "sweating", "nausea", "shortness of breath"])) {
    advice = "Chest pain with these symptoms may be serious. Seek emergency medical help immediately.";
  } else if (hasAny(["rash", "itching"])) {
    advice = "You may have a skin allergy or infection. Avoid scratching and consult a doctor if rash spreads.";
  } else if (hasAny(["joint pain", "swelling", "stiffness"])) {
    advice = "These symptoms may indicate arthritis. Consult a healthcare provider for proper diagnosis.";
  } else if (hasAny(["fatigue", "weakness", "pale skin"])) {
    advice = "These symptoms could be anemia. Please consult a doctor for blood tests.";
  } else if (hasAny(["back pain", "numbness", "tingling", "leg pain"])) {
    advice = "You may have a nerve or spine issue. Please consult a doctor if pain is severe.";
  } else if (hasAny(["fever", "vomiting", "neck pain"])) {
    advice = "These could be signs of meningitis. Seek emergency medical help immediately.";
  } else if (hasAny(["weight loss", "excessive thirst", "frequent urination"])) {
    advice = "These symptoms may indicate diabetes. Please consult a healthcare professional.";
  } else if (hasAny(["blurred vision", "headache"])) {
    advice = "These symptoms may be due to migraine, hypertension, or eye problems. Please consult a doctor.";
  } else {
    advice = "Your symptoms do not match a common disease in our list. Please enter more symptoms or consult a doctor for accurate advice.";
  }

  document.getElementById('advice').innerText = advice;
};
