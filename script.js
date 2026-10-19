const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-id][data-en]");
const translatableLabels = document.querySelectorAll("[data-aria-id][data-aria-en]");
const description = document.querySelector('meta[name="description"]');
const pageTitle = document.querySelector("title");

function setLanguage(language) {
  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  translatableLabels.forEach((element) => {
    element.setAttribute("aria-label", element.getAttribute(`data-aria-${language}`));
  });

  document.documentElement.lang = language;
  pageTitle.textContent = pageTitle.dataset[language];
  description.content = description.dataset[language];

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
