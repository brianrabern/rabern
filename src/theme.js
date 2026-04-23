export const THEME_DEFAULT = "console";
export const THEME_HIGH = "consoleHi";

export function applyDocumentTheme() {
  const variant = localStorage.getItem("consoleVariant");
  const high = variant === "high";
  document.documentElement.setAttribute(
    "data-theme",
    high ? THEME_HIGH : THEME_DEFAULT
  );
  if (high) {
    document.documentElement.setAttribute("data-contrast", "high");
  } else {
    document.documentElement.removeAttribute("data-contrast");
  }
}
