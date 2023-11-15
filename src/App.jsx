import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Actors from "./Actors";

function App() {
  const Persons = [
    { id: 1, name: "Ali Khan", age: 55 },
    { id: 2, name: "Pritom", age: 25 },
    { id: 3, name: "Sweata", age: 30 },
    { id: 4, name: "Arijit Sing", age: 45 },
    { id: 5, name: "Kayilash", age: 55 },
    { id: 6, name: "Adnan Sami", age: 55 },
  ];

  return (
    <>
      {Persons.map((actor) => (
        <Actors actor={actor}></Actors>
      ))}
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Learn JS" isDone={false}></Todo>
      <Todo task="Learn JSX" isDone={false}></Todo>
      <Todo task="Learn VITE" isDone={false}></Todo>
      <Todo task="Learn HTML" isDone={true}></Todo>
      <Todo task="Learn CSS" isDone={true}></Todo>
      <Todo task="Learn tailwind" isDone={false}></Todo>
      <Todo task="Learn Bootstrap" isDone={true}></Todo>
      <Buttons></Buttons>
    </>
  );
}

function Buttons() {
  return <button id="Hello">Change Background Color</button>;
}
document.getElementById("Hello").addEventListener("click", function () {
  var newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  var rgbColor = newColor.replace("#", "");
  var r = parseInt(rgbColor.substring(0, 2), 16);
  var g = parseInt(rgbColor.substring(2, 4), 16);
  var b = parseInt(rgbColor.substring(4, 6), 16);
  var result = "rgba(" + r + "," + g + "," + b + ")";

  document.body.style.backgroundColor = newColor;
  output.textContent = newColor + " - " + result;
});

export default App;
