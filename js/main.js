







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
    
   // phone validation (numbers only, length between 8-15 digits)
    const numberRegex = /^\d+$/;
    if (!formData.phone.trim()) {
      errors.phone = 'الرجاء إدخال رقم الجوال';
    } else if (!numberRegex.test(formData.phone)) {
      errors.phone = 'الرجاء إدخال أرقام فقط';
    } else if (formData.phone.length < 8 || formData.phone.length > 15) {
      errors.phone = 'رقم الجوال يجب أن يكون بين 8 و 15 رقم';
    }
    

    
    return errors;
  };
  
  

  
  

// *****************




 // تحديد الـ Navbar
 const navbar = document.querySelector('.navbar');

 // دالة لتتبع التمرير
 window.addEventListener('scroll', function() {
     if (window.scrollY > 100) { // إذا تم التمرير لأسفل بمقدار 100 بكسل
         navbar.classList.add('scrolled'); // أضف فئة scrolled
     } else {
         navbar.classList.remove('scrolled'); // قم بإزالة فئة scrolled
     }
 });




// *****************



  // Function to handle scroll event
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.pageYOffset > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});





// **************************************************************




const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxHxVf2iHlQA9D2luKlzGgzMtQVq-emX5mTLmskPBmE6bpVU9H8N_z5fJ8EgGR3Dgyq/exec';

// دالة لإرسال البيانات لـ Google Sheets
const submitToGoogleSheets = async (formData) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert('تم التسجيل بنجاح!');
      return true;
    } else {
      alert('حدث خطأ في التسجيل. الرجاء المحاولة مرة أخرى.');
      return false;
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('حدث خطأ في التسجيل. الرجاء المحاولة مرة أخرى.');
    return false;
  }
};

// التعامل مع إرسال الفورم
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // اجمع بيانات الفورم
  const formData = {
    name: document.getElementById('form_name').value,
    email: document.getElementById('form_email').value,
    message: document.getElementById('form_message').value,
  };
  
  // أرسل البيانات لـ Google Sheets
  const success = await submitToGoogleSheets(formData);
  
  // لو الإرسال نجح، امسح الفورم
  if (success) {
    e.target.reset();
  }
});