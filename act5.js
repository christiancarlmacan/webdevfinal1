function calculateBMI() {
    const height = document.getElementById("height").value
    const weight = document.getElementById("weight").value
  
    const bmi = weight / (height ** 2)
  
    let resultText = "Your BMI is: " + bmi.toFixed(2)
  
    if (bmi < 18.5) {
      resultText += " (Underweight)"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText += " (Normal)"
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText += " (Overweight)"
    } else {
      resultText += " (Obese)"
    }
  
    const resultDiv = document.getElementById("result")
    resultDiv.textContent = resultText
  }