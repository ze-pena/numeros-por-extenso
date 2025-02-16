import buildAppConverter from "./builders/converter.js";

const app = document.getElementById("app");
const appConverter = buildAppConverter();

app.appendChild(appConverter);
