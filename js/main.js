 // Function to handle scroll event
 window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.pageYOffset > 100) {
      navbar.classList.add('navbar-scrolled');
  } else {
      navbar.classList.remove('navbar-scrolled');
  }
});






const showToast = (message, isError = false) => {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: isError ? "#ef4444" : "#22c55e",
      direction: "rtl"
    }
  }).showToast();
};

// Form validation rules
const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'الرجاء إدخال الاسم';
  } else if (!/^[\u0600-\u06FF\s\w]+$/.test(formData.name)) {
    errors.name = 'الرجاء إدخال اسم صحيح';
  }
  

  
  return errors;
};

// Create error message elements
const createErrorElement = (message) => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  return errorDiv;
};

// Remove existing error messages
const removeErrorMessages = () => {
  document.querySelectorAll('.error-message').forEach(el => el.remove());
};

// Display error messages
const showErrors = (errors) => {
  removeErrorMessages();
  Object.keys(errors).forEach(fieldName => {
    const input = document.getElementById(fieldName);
    const errorElement = createErrorElement(errors[fieldName]);
    input.parentNode.appendChild(errorElement);
    input.classList.add('border-red-500');
    
    // Show toast for first error
    if (Object.keys(errors)[0] === fieldName) {
      showToast(errors[fieldName], true);
    }
  });
};

// Remove error styling
const removeErrorStyles = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.classList.remove('border-red-500'));
};

// Google Sheets submission with loading state
const submitToGoogleSheets = async (formData) => {
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxZaDxfoXwkrlpXSuDMJxW1C3wgekcwPWmjKDzwS1F4saENK5kH4DHJSubus6qRtwyv/exec';
  
  // Show sending toast
  showToast('جاري إرسال البيانات...');
  
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    // Show success toast
    showToast('تم التسجيل بنجاح!');
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    // Show error toast
    showToast('حدث خطأ في التسجيل. الرجاء المحاولة مرة أخرى.', true);
    return false;
  }
};

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    timestamp: new Date().toISOString()
  };
  
  // Validate form
  const errors = validateForm(formData);
  
  // Remove existing error styling
  removeErrorStyles();
  
  // If there are errors, show them and return
  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    return;
  }
  
  // Show loading state
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = 'جاري التسجيل...';
  submitButton.disabled = true;
  
  // Submit to Google Sheets
  const success = await submitToGoogleSheets(formData);
  
  if (success) {
    // Reset form
    e.target.reset();
  }
  
  // Reset button state
  submitButton.textContent = originalButtonText;
  submitButton.disabled = false;
});
// **********************
/*** 1 ***/
let num1 = prompt("Enter a number:");
console.log(num1);

/*** 2 ***/
let num2 = prompt("Enter a number:");
if (num2 % 3 === 0 && num2 % 4 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}

/*** 3 ***/
let num3_1 = prompt("Enter the first number:");
let num3_2 = prompt("Enter the second number:");
if (num3_1 > num3_2) {
    console.log(num3_1);
} else {
    console.log(num3_2);
}

/*** 4 ***/
let num4 = prompt("Enter a number:");
if (num4 < 0) {
    console.log("Negative");
} else {
    console.log("Positive");
}

/*** 5 ***/
let num5_1 = prompt("Enter the first number:");
let num5_2 = prompt("Enter the second number:");
let num5_3 = prompt("Enter the third number:");
let max = num5_1;
let min = num5_1;

if (num5_2 > max) max = num5_2;
if (num5_3 > max) max = num5_3;

if (num5_2 < min) min = num5_2;
if (num5_3 < min) min = num5_3;

console.log("Max value = " + max);
console.log("Min value = " + min);

/*** 6 ***/
let num6 = prompt("Enter a number:");
if (num6 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

/*** 7 ***/
let char7 = prompt("Enter a character:").toLowerCase();
if (char7 === 'a' || char7 === 'e' || char7 === 'i' || char7 === 'o' || char7 === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

/*** 8 ***/
let num8 = prompt("Enter a number:");
for (let i = 1; i <= num8; i++) {
    console.log(i);
}

/*** 9 ***/
let num9 = prompt("Enter a number:");
for (let i = 1; i <= 12; i++) {
    console.log(num9 * i);
}

/*** 10 ***/
let num10 = prompt("Enter a number:");
for (let i = 1; i <= num10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*** 11 ***/
let base = prompt("Enter the base:");
let exponent = prompt("Enter the exponent:");
let result = 1;
for (let i = 0; i < exponent; i++) {
    result *= base;
}
console.log(result);

/*** 12 ***/
let marks = [];
for (let i = 0; i < 5; i++) {
    marks.push(parseInt(prompt("Enter mark " + (i + 1) + ":")));
}
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;
console.log("Total marks = " + total);
console.log("Average marks = " + average);
console.log("Percentage = " + percentage);

/*** 13 ***/
let month = prompt("Enter month number:");
let days;
switch (month) {
    case '1': case '3': case '5': case '7': case '8': case '10': case '12':
        days = 31;
        break;
    case '4': case '6': case '9': case '11':
        days = 30;
        break;
    case '2':
        days = 28;
        break;
    default:
        days = "Invalid";
}
console.log("Days in month = " + days);

/*** 14 ***/
let physics = prompt("Enter Physics marks:");
let chemistry = prompt("Enter Chemistry marks:");
let biology = prompt("Enter Biology marks:");
let mathematics = prompt("Enter Mathematics marks:");
let computer = prompt("Enter Computer marks:");
let totalMarks = parseFloat(physics) + parseFloat(chemistry) + parseFloat(biology) + parseFloat(mathematics) + parseFloat(computer);
let percentage14 = (totalMarks / 500) * 100;
let grade;
if (percentage14 >= 90) {
    grade = "A";
} else if (percentage14 >= 80) {
    grade = "B";
} else if (percentage14 >= 70) {
    grade = "C";
} else if (percentage14 >= 60) {
    grade = "D";
} else if (percentage14 >= 40) {
    grade = "E";
} else {
    grade = "F";
}
console.log("Percentage = " + percentage14);
console.log("Grade = " + grade);

/*** 15 ***/
let month15 = prompt("Enter month number:");
let days15;
switch (month15) {
    case '1': case '3': case '5': case '7': case '8': case '10': case '12':
        days15 = 31;
        break;
    case '4': case '6': case '9': case '11':
        days15 = 30;
        break;
    case '2':
        days15 = 28;
        break;
    default:
        days15 = "Invalid";
}
console.log("Days in month = " + days15);

/*** 16 ***/
let char16 = prompt("Enter a character:").toLowerCase();
switch (char16) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

/*** 17 ***/
let num17_1 = prompt("Enter the first number:");
let num17_2 = prompt("Enter the second number:");
switch (true) {
    case num17_1 > num17_2:
        console.log(num17_1);
        break;
    default:
        console.log(num17_2);
}

/*** 18 ***/
let num18 = prompt("Enter a number:");
switch (num18 % 2) {
    case 0:
        console.log("Even");
        break;
    default:
        console.log("Odd");
}

/*** 19 ***/
let num19 = prompt("Enter a number:");
switch (true) {
    case num19 > 0:
        console.log("Positive");
        break;
    case num19 < 0:
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}

/*** 20 ***/
let num20_1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
let num20_2 = parseFloat(prompt("Enter the second number:"));
let result20;
switch (operator) {
    case '+':
        result20 = num20_1 + num20_2;
        break;
    case '-':
        result20 = num20_1 - num20_2;
        break;
    case '*':
        result20 = num20_1 * num20_2;
        break;
    case '/':
        result20 = num20_1 / num20_2;
        break;
    default:
        result20 = "Invalid operation";
}
console.log("Result = " + result20);