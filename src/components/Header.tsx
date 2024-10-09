import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-400"
        }
      >
        <h1 className="text-xl font-bold">Social Feed</h1>
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-400"
        }
      >
        <button color="inherit">bookmarks</button>
      </NavLink>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="bg-gray-700 px-4 py-2 rounded-md"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
