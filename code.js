// отримаємо елементи для роботи
let themeButton = document.querySelector("#themeButton");
let lastTurn = document.querySelector("#lastTurn");

const storageKey = "themeState";
const darkTheme = "dark-theme";
const lightTheme = "light-theme";

// Завантажуємо стан теми з локального сховища
const loadThemeState = () => {
  const themeState = localStorage.getItem(storageKey);
  //   if (themeState === darkTheme) {
  //     turnOnDarkTheme();
  //   }
};
// Робимо функцію для збереження теми в локалсторедж
const saveThemeState = (themeState) => {
  localStorage.setItem(storageKey, themeState);
};
// Робимо функцію для виводу актуальної дати
const showCurrentDate = () => {
  const currentDate = new Date().toLocaleString();
  if (document.body.classList.contains(lightTheme)) {
    lastTurn.textContent = `Last turn on: ${currentDate}`;
  } else {
    lastTurn.textContent = `Last turn off: ${currentDate}`;
  }
};

// Умови зміни теми на світлу
const turnOnLightTheme = () => {
  document.body.classList.add(lightTheme);
  document.body.classList.remove(darkTheme);
  themeButton.textContent = "Turn off";
  saveThemeState(lightTheme);
  showCurrentDate();
};

// Умови зміни теми на темну
const turnOnDarkTheme = () => {
  document.body.classList.add(darkTheme);
  document.body.classList.remove(lightTheme);
  themeButton.textContent = "Turn on";
  saveThemeState(darkTheme);
  showCurrentDate();
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
