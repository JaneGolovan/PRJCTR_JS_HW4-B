// отримаємо елементи для роботи
let themeButton = document.querySelector("#themeButton");
let lastTurn = document.querySelector("#lastTurn");
const storageKeyDateDark = "storageKeyDateDark";
const storageKeyDateLight = "storageKeyDateLight";
const storageKey = "themeState";
const darkTheme = "dark-theme";
const lightTheme = "light-theme";

// Завантажуємо стан теми з локального сховища
const loadThemeState = () => {
  const themeState = localStorage.getItem(storageKey);
  if (themeState === darkTheme) {
    turnOnDarkTheme();
  } else {
    turnOnLightTheme();
  }
  showCurrentDate();
};
// Робимо функцію для збереження теми в локалсторедж
const saveThemeState = (themeState) => {
  localStorage.setItem(storageKey, themeState);
};
// Робимо функцію для збереження дати в локалсторедж

const saveDateStateDark = () => {
  localStorage.setItem(storageKeyDateDark, Date.now());
};
const saveDateStateLight = () => {
  localStorage.setItem(storageKeyDateLight, Date.now());
};

// Робимо функцію для виводу актуальної дати
const showCurrentDate = () => {
  const dateStateDark = new Date(
    parseInt(localStorage.getItem(storageKeyDateDark))
  ).toLocaleString();
  const dateStateLight = new Date(
    parseInt(localStorage.getItem(storageKeyDateLight))
  ).toLocaleString();
  if (document.body.classList.contains(lightTheme)) {
    lastTurn.textContent = `Last turn on: ${dateStateLight}`;
  } else {
    lastTurn.textContent = `Last turn off: ${dateStateDark}`;
  }
};

// Умови зміни теми на світлу
const turnOnLightTheme = () => {
  document.body.classList.add(lightTheme);
  document.body.classList.remove(darkTheme);
  themeButton.textContent = "Turn off";
  saveThemeState(lightTheme);
  saveDateStateLight();
};

// Умови зміни теми на темну
const turnOnDarkTheme = () => {
  document.body.classList.add(darkTheme);
  document.body.classList.remove(lightTheme);
  themeButton.textContent = "Turn on";
  saveThemeState(darkTheme);
  saveDateStateDark();
};

// міняємо тему залежно від класу
const changeTheme = () => {
  if (document.body.classList.contains(lightTheme)) {
    turnOnDarkTheme();
  } else {
    turnOnLightTheme();
  }
  showCurrentDate();
};

themeButton.addEventListener("click", changeTheme); //Додаємо слухач події

// Завантажуємо початковий стан
loadThemeState();
