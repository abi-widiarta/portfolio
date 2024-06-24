// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// document.documentElement.classList.add("dark");
// document.documentElement.classList.toggle("dark");

if (!("theme" in localStorage)) {
  localStorage.setItem("theme", "light");
  console.log("mmasuk");
} else if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.toggle("dark");
} else if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.toggle("dark");
}

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
