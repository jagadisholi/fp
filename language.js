// Google Translate helpers
// Ensure a hidden container exists in your page: <div id="google_translate_element" style="display:none"></div>

function setLanguage(lang) {
  const hostname = location.hostname || '';
  const domain = (hostname && hostname !== 'localhost' && !/:\d+$/.test(hostname)) ? '.' + hostname : '';
  const expires = 'expires=Fri, 31 Dec 9999 23:59:59 GMT';

  // Set cookie both with and without domain for broader compatibility
  document.cookie = "googtrans=/en/" + lang + ";path=/;" + expires + (domain ? (";domain=" + domain) : "");
  document.cookie = "googtrans=/en/" + lang + ";path=/;" + expires;

  localStorage.setItem("site_lang", lang);

  // If the translate dropdown is already present, change it live
  const sel = document.querySelector('.goog-te-combo');
  if (sel) {
    sel.value = lang;
    sel.dispatchEvent(new Event('change'));
    return;
  }

  // Fallback to reload
  location.reload();
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,ne,ja',
    autoDisplay: false
  }, 'google_translate_element');
}

// Auto apply saved language
(function () {
  const savedLang = localStorage.getItem("site_lang");
  if (savedLang && savedLang !== "en") {
    const hostname = location.hostname || '';
    const domain = (hostname && hostname !== 'localhost' && !/:\d+$/.test(hostname)) ? '.' + hostname : '';
    const expires = 'expires=Fri, 31 Dec 9999 23:59:59 GMT';
    document.cookie = "googtrans=/en/" + savedLang + ";path=/;" + expires + (domain ? (";domain=" + domain) : "");
    document.cookie = "googtrans=/en/" + savedLang + ";path=/;" + expires;
  }
})();
