import { useEffect, useState } from "react";

const Themes = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <div>
      {darkTheme !== undefined && (
        <form action="#">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </form>
      )}
    </div>
  );
};

export default Themes;
