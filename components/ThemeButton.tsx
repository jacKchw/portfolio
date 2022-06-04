export const ThemeButton = () => {
  const toggleTheme = () => {
    document.querySelector("body")?.classList.toggle("dark")
  }
  return <input type="button" onClick={toggleTheme} value="switch theme" />
}
