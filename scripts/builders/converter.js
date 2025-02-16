import { handleInput } from "../events/input.js"

function buildAppName() {
  const container = document.createElement("div");
  const title = document.createElement("h1");

  container.classList.add("name");
  title.classList.add("name-title");

  title.innerText = "#números por extenso@!";
  container.appendChild(title);
  return container;
}

function buildAppInput() {
  const container = document.createElement("div");
  const label = document.createElement("label");
  const icon = document.createElement("div");
  const input = document.createElement("input");

  container.classList.add("input");
  label.classList.add("input-label");
  icon.classList.add("label-icon");
  input.classList.add("label-field");

  icon.innerHTML = "#";
  input.id = "number-input";
  input.setAttribute("title", "number-input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Insira o número desejado.");
  input.addEventListener("input", handleInput);

  label.appendChild(icon);
  label.appendChild(input);
  container.appendChild(label);
  return container;
}

function buildAppOutput() {
  const container = document.createElement("div");
  const output = document.createElement("p");

  container.classList.add("output", "hidden");
  output.classList.add("output-field");

  output.id = "text-output"

  container.appendChild(output);
  return container;
}

export default function buildAppConverter() {
  const container = document.createElement("main");
  const appName = buildAppName();
  const appInput = buildAppInput();
  const appOutput = buildAppOutput();

  container.classList.add("app-converter")
  container.appendChild(appName);
  container.appendChild(appInput);
  container.appendChild(appOutput);
  return container;
}