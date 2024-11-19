function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('bmiResult');
    const categoryButton = document.getElementById('categoryButton');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        resultDiv.innerHTML = `Your BMI is: ${bmi}`;

        let category = '';
        if (bmi < 18.5) {
            category = 'underweight';
            categoryButton.className = 'category-button underweight';
            categoryButton.innerHTML = 'Learn about Underweight';
        } else if (bmi < 24.9) {
            category = 'normal';
            categoryButton.className = 'category-button normal';
            categoryButton.innerHTML = 'Learn about Normal Weight';
        } else if (bmi < 29.9) {
            category = 'overweight';
            categoryButton.className = 'category-button overweight';
            categoryButton.innerHTML = 'Learn about Overweight';
        } else {
            category = 'obese';
            categoryButton.className = 'category-button obese';
            categoryButton.innerHTML = 'Learn about Obesity';
        }

        // Show the category button
        categoryButton.style.display = 'inline-block'; // Show the button
    } else {
        resultDiv.innerHTML = 'Please enter valid weight and height.';
        categoryButton.style.display = 'none'; // Hide the button if input is invalid
    }
}

function redirectToCategory() {
    const categoryButton = document.getElementById('categoryButton');
    if (categoryButton.classList.contains('underweight')) {
        window.location.href = 'underweight.html'; // Redirect to underweight page
    } else if (categoryButton.classList.contains('normal')) {
        window.location.href = 'normal.html'; // Redirect to normal weight page
    } else if (categoryButton.classList.contains('overweight')) {
        window.location.href = 'overweight.html'; // Redirect to overweight page
    } else if (categoryButton.classList.contains('obese')) {
        window.location.href = 'obese.html'; // Redirect to obesity page
    }
}