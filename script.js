/*
   GROW WITH GLOW DIGITALS
   Base JavaScript - Foundation Only
   This file contains basic functionality.
   Add more interactivity as needed.
*/

// ===================================
// Document Ready / Initialization
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Grow With Glow Digitals website loaded');
    
    // Initialize features
    initializeNavigation();
    initializeFormValidation();
    initializePortfolioFilter();
    initializeSmoothScroll();
});

// ===================================
// Navigation Functions
// ===================================

/**
 * Initialize mobile navigation toggle (if needed)
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add active state handling if needed
            console.log('Navigation link clicked: ' + this.textContent);
        });
    });
}

// ===================================
// Form Validation
// ===================================

/**
 * Initialize form validation and submission
 */
function initializeFormValidation() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm(this)) {
                console.log('Form validated successfully');
                // Here you would normally submit the form
                // this.submit();
                
                // Show success message
                showSuccessMessage(this);
            }
        });
    }
}

/**
 * Validate form fields
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - True if form is valid
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            highlightField(field);
            console.warn('Field is required: ' + field.name);
        } else {
            removeFieldHighlight(field);
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        if (!isValidEmail(emailField.value)) {
            isValid = false;
            highlightField(emailField);
            console.warn('Invalid email format');
        }
    }
    
    return isValid;
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Highlight invalid field
 * @param {HTMLElement} field - The field to highlight
 */
function highlightField(field) {
    field.style.borderColor = '#
