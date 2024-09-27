function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
  
    if (height === '' || weight === '') {
      result.innerHTML = 'Please enter both height and weight';
      return;
    }
  
    // Convert height from cm to meters
    const heightInMeters = height / 100;
  
    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    // Display result with classification
    if (bmi < 18.5) {
      result.innerHTML = `Your BMI is <strong>${bmi}</strong>. You are <span class="underweight">Underweight</span>.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML = `Your BMI is <strong>${bmi}</strong>. You are <span class="normal">Normal weight</span>.`;
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerHTML = `Your BMI is <strong>${bmi}</strong>. You are <span class="overweight">Overweight</span>.`;
    } else {
      result.innerHTML = `Your BMI is <strong>${bmi}</strong>. You are <span class="overweight">Obese</span>.`;
    }
  }
  