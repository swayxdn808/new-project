function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('bmiResult');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        resultDiv.innerHTML = `Your BMI is: ${bmi}`;
    } else {
        resultDiv.innerHTML = 'Please enter valid weight and height.';
    };
}