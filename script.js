function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    
    // Add 'active' class to show the section
    if (targetSection && !targetSection.classList.contains('active')) {
        targetSection.classList.add('active');
    }
} 

function showProjects() {
    const projectsSection = document.getElementById("projectsBox");
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "block";
    } else {
        projectsSection.style.display = "none"; 
    }
}

// 1. Reverse the string
function reverseString() {
    const input = document.getElementById("reverseInput").value;
    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    document.getElementById("reverseResult").innerText = `Reversed String: ${reversedString}`;
}

// 2. Print the sum of integers
function calculateSum() {
    const input = document.getElementById("sumInput").value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("sumResult").innerText = "Please enter valid numbers separated by commas.";
        return;
    }

    const total = numbers.reduce((sum, num) => sum + num, 0);
    document.getElementById("sumResult").innerText = `Sum: ${total}`;
}

// 3. Odd or Even
function checkOddOrEven() {
    const input = parseInt(document.getElementById("oddEvenInput").value);
    if (isNaN(input)) {
        document.getElementById("oddEvenResult").innerText = "Please enter a valid number.";
        return;
    }

    const result = input % 2 === 0 ? "Even" : "Odd";
    document.getElementById("oddEvenResult").innerText = `The number ${input} is ${result}.`;
}

// 4. Find the Largest Number
function findLargestNumber() {
    const input = document.getElementById("largestNumberInput").value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("largestResult").innerText = "Please enter valid numbers separated by commas.";
        return;
    }

    const largest = Math.max(...numbers);
    document.getElementById("largestResult").innerText = `Largest Number: ${largest}`;
}
