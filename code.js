// отримаємо елементи для роботи
let themeButton = document.querySelector("#themeButton");
let lastTurn = document.querySelector("#lastTurn");
const storageKeyDate = "storageKeyDate";
const storageKey = "themeState";
const darkTheme = "dark-theme";
const lightTheme = "light-theme";

// Завантажуємо стан теми з локального сховища
const firstLoadThemeState = () => {
  const themeState = localStorage.getItem(storageKey);
  if (themeState === " ") {
    turnOnLightTheme();
  }
};
const furtherLoadThemeState = () => {
  const themeState = localStorage.getItem(storageKey);
  if (themeState === darkTheme) {
    turnOnDarkTheme();
    showCurrentDate();
  }
  if (themeState === lightTheme) {
    turnOnLightTheme();
    showCurrentDate();
  }
};
// Робимо функцію для збереження теми в локалсторедж
const saveThemeState = (themeState) => {
  localStorage.setItem(storageKey, themeState);
};
// Робимо функцію для збереження дати в локалсторедж

const saveDateState = () => {
  localStorage.setItem(storageKeyDate, Date.now());
};

// Робимо функцію для виводу актуальної дати
const showCurrentDate = () => {
  const dateState = new Date(
    parseInt(localStorage.getItem(storageKeyDate))
  ).toLocaleString();
  if (document.body.classList.contains(lightTheme)) {
    lastTurn.textContent = `Last turn on: ${dateState}`;
  } else {
    lastTurn.textContent = `Last turn off: ${dateState}`;
  }
};

// Умови зміни теми на світлу
const turnOnLightTheme = () => {
  document.body.classList.add(lightTheme);
  document.body.classList.remove(darkTheme);
  themeButton.textContent = "Turn off";
  saveThemeState(lightTheme);
};

// Умови зміни теми на темну
const turnOnDarkTheme = () => {
  document.body.classList.add(darkTheme);
  document.body.classList.remove(lightTheme);
  themeButton.textContent = "Turn on";
  saveThemeState(darkTheme);
};

// міняємо тему залежно від класу
const changeTheme = () => {
  if (document.body.classList.contains(lightTheme)) {
    turnOnDarkTheme();
  } else {
    turnOnLightTheme();
  }
};

themeButton.addEventListener("click", changeTheme); //Додаємо слухач події
themeButton.addEventListener("click", saveDateState);
themeButton.addEventListener("click", showCurrentDate);
// Завантажуємо початковий стан
firstLoadThemeState();
furtherLoadThemeState();
