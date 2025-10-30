/*
Let's see how to create NESTED ELEMENTS using react.
In HTML, we created like this:

1.
<div id="parent">
    <div id="child">
        <h1>I am number - 1</h1>
    </div>
</div>            // let's create this in react


2.
<div id="parent">
    <div id="child">
        <h1>I am number - 1</h1>
        <h2>I am number - 2</h2>
    </div>
</div>            // let's create this in react


3.
<div id="parent">
    <div id="child 1">
        <h1>I am number - 1</h1>
        <h2>I am number - 2</h2>
    </div>
    <div id="child 2">
        <h1>I am number - 3</h1>
        <h2>I am number - 4</h2>
    </div>
</div>            // let's create this in react
*/

import React from "react"
import ReactDOM from "react-dom/client"

//1
// const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {}, "I am number - 1")));

//2
// const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "I am number - 1"), React.createElement("h2", {}, "I am number - 2")]));

//3
const parent = React.createElement("div", { id:"parent" }, [
  React.createElement("div", { id:"child 1", key:"1" }, [
    React.createElement("h1", { key: "1-1" }, "I am number - 1"),
    React.createElement("h2", { key: "1-2" }, "I am number - 2")
  ]),
  React.createElement("div", { id:"child 2", key:"2" }, [
    React.createElement("h1", { key: "2-1" }, "I am number - 3"),
    React.createElement("h2", { key: "2-2" }, "I am number - 4")
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const heading = React.createElement("h1", {id:"heading"}, "Hello From React"); 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 