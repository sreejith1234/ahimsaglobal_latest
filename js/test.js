// Default language is English
let currentLang = 'en';

// Get the elements to be translated
const heading = document.getElementById('heading');
const englishBtn = document.getElementById('english-btn');
const spanishBtn = document.getElementById('spanish-btn');

// Load the current language from local storage if available
if (localStorage.getItem('stored_lang')) {
  currentLang = localStorage.getItem('stored_lang');
}

// Set the language on page load
setLanguage(currentLang);

// Add event listeners for language buttons
englishBtn.addEventListener('click', () => setLanguage('en'));
spanishBtn.addEventListener('click', () => setLanguage('es'));

function setLanguage(lang) {
  // Update the current language
  currentLang = lang;

  // Store the language in local storage for next time
  localStorage.setItem('stored_lang', lang);

  // Load the correct language text for each element
  switch (lang) {
    case 'en':
      heading.textContent = 'Welcome to my website';
      englishBtn.hidden = true;
      spanishBtn.hidden = false;
      break;
    case 'es':
      heading.textContent = 'Bienvenido a mi sitio web';
      englishBtn.hidden = false;
      spanishBtn.hidden = true;
      break;
  }
}
