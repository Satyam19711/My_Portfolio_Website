export function getDeviceTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getSavedTheme() {
  return localStorage.getItem("theme");
}

export function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

export function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

export function initTheme() {
  const saved = getSavedTheme();

  if (saved) {
    applyTheme(saved);
    return saved;
  }

  const deviceTheme = getDeviceTheme();
  applyTheme(deviceTheme);
  return deviceTheme;
}
