import React from "react"
import ReactDOM from "react-dom/client"

// React - create.Element => gives us a React Element - this is an JS object behind the scene => rendered as an Html Element.
const heading = React.createElement(             //this is a core of react which we use earlier.
    "h1",
    {id:"heading"},
    "Hello from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - JSX is not a part of React 
//JSX is a Javascript syntax which is eaasier to create react element
//JSX is not HTML in Javascript, it just has a HTML-like code in 
//JSX (transpiled before it reaching to js) - PARCEL - BABEL(js compiler)

//JSX -> transpiled into React.createElement
const jsxHeading = <h1 id="heading">Hello from JSX</h1>


// root.render(heading);
root.render(jsxHeading);